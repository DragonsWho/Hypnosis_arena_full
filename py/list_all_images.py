import os
import time
import requests
import re
from tqdm import tqdm
from itertools import product

# --- НАСТРОЙКИ ---
BASE_URL = "https://flccncn.neocities.org/hypnosisArena/"
EXISTING_FILES_LIST = "all_images.txt"
REQUESTS_PER_MINUTE = 45  # Можно немного увеличить, т.к. сервер neocities довольно терпимый
NUMERICAL_CHECK_WINDOW = 2 # Проверять N-2, N-1, N+1, N+2 от найденного числа

# --- КОНЕЦ НАСТРОЕК ---

# --- БАЗЫ ДАННЫХ ДЛЯ ГЕНЕРАЦИИ (на основе вашего списка) ---

# Для портретов игроков
FACE_CHARS = ['Sy', 'El', 'Ha', 'Tr']
FACE_STATES = ['A', 'B', 'C', 'D', 'E']
FACE_EXPRESSIONS = [
    'c1', 'c2', 'c3', 'c4', 'c5', 'normal', 'angry', 'sad', 'excited', 
    'blank', 'ecstasy', 'ecstasy2', 'corrupted'
]

# Для портретов боссов и NPC
BOSS_NAMES = [f'boss{i}' for i in range(1, 10)] + ['bossH3', 'bossH4', 'morvain', 'sandrea']
BOSS_EXPRESSIONS = ['normal', 'corrupt', 'ecstasy', 'angry', 'openEye']


def generate_hypothetical_paths(existing_path, all_hypotheses):
    """
    Основная функция генерации гипотез.
    Она принимает путь к одному файлу и добавляет все возможные варианты в общий set.
    """
    
    # Отделяем имя файла и его расширение от пути
    base_name, extension = os.path.splitext(os.path.basename(existing_path))
    dir_name = os.path.dirname(existing_path)

    # --- Правило 1: Вариации суффиксов для карт ---
    if 'image/card/' in existing_path:
        # Убираем известные суффиксы, чтобы получить "чистую" основу
        clean_base = base_name.replace('-real', '').replace('-corrupt', '').replace('-furry', '')
        
        # Генерируем все варианты суффиксов
        for suffix in ['', '-real', '-corrupt', '-furry']:
            all_hypotheses.add(f"{dir_name}/{clean_base}{suffix}{extension}")

    # --- Правило 2: Проверка наличия версии в /cardEx/ ---
    if 'image/card/' in existing_path:
        cardex_path = existing_path.replace('image/card/', 'image/cardEx/')
        all_hypotheses.add(cardex_path)

    # --- Правило 3: Поиск числовых последовательностей (общий) ---
    # Ищем числа в конце имени файла (например, illust01, background8)
    match = re.search(r'(\d+)$', base_name)
    if match:
        num_str = match.group(1)
        num = int(num_str)
        prefix = base_name[:match.start(1)]
        
        for offset in range(-NUMERICAL_CHECK_WINDOW, NUMERICAL_CHECK_WINDOW + 1):
            if offset == 0: continue
            new_num = num + offset
            if new_num >= 0:
                # Сохраняем лидирующие нули, если они были
                new_num_str = str(new_num).zfill(len(num_str))
                all_hypotheses.add(f"{dir_name}/{prefix}{new_num_str}{extension}")

    # --- Правило 4: Поиск числовых последовательностей в кодах карт (...-001) ---
    match = re.search(r'-(\d{3})$', clean_base if 'image/card/' in existing_path else base_name)
    if match:
        num_str = match.group(1)
        num = int(num_str)
        prefix = (clean_base if 'image/card/' in existing_path else base_name)[:match.start(1)]

        for offset in range(-NUMERICAL_CHECK_WINDOW, NUMERICAL_CHECK_WINDOW + 1):
            if offset == 0: continue
            new_num = num + offset
            if new_num > 0:
                new_num_str = str(new_num).zfill(3)
                all_hypotheses.add(f"{dir_name}/{prefix}-{new_num_str}{extension}")


def download_missing_files():
    print("--- Запуск скрипта для поиска и скачивания пропущенных файлов ---")
    
    try:
        with open(EXISTING_FILES_LIST, 'r', encoding='utf-8') as f:
            existing_files_set = set(line.strip().replace('\\', '/') for line in f)
        print(f"Загружен список из {len(existing_files_set)} уже имеющихся файлов.")
    except FileNotFoundError:
        print(f"Ошибка: Файл '{EXISTING_FILES_LIST}' не найден. Сначала запустите скрипт list_all_images.py!")
        return

    all_hypotheses = set()
    print("Генерация гипотез на основе существующих файлов...")
    for path in tqdm(existing_files_set, desc="Анализ файлов"):
        generate_hypothetical_paths(path, all_hypotheses)
    
    # --- Правило 5 и 6: Полный перебор портретов ---
    print("Генерация всех возможных портретов игроков...")
    for char, state, expr in product(FACE_CHARS, FACE_STATES, FACE_EXPRESSIONS):
        all_hypotheses.add(f"image/face/portrait_player_{char}_{state}_{expr}.webp")

    print("Генерация всех возможных портретов боссов и NPC...")
    for name, expr in product(BOSS_NAMES, BOSS_EXPRESSIONS):
        all_hypotheses.add(f"image/face/portrait_{name}_{expr}.webp")
        
    print(f"Всего сгенерировано {len(all_hypotheses)} уникальных гипотетических путей.")

    urls_to_check = sorted([path for path in all_hypotheses if path not in existing_files_set])
    
    if not urls_to_check:
        print("Новых гипотетических файлов для проверки не найдено. Похоже, все на месте!")
        return
            
    print(f"Найдено {len(urls_to_check)} потенциально новых файлов. Начинаем проверку и загрузку...")

    delay = 60.0 / REQUESTS_PER_MINUTE
    downloaded_count = 0
    
    for relative_path in tqdm(urls_to_check, desc="Проверка и скачивание"):
        download_url = f"{BASE_URL}{relative_path}"
        save_path = relative_path.replace('/', os.sep)

        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        
        try:
            time.sleep(delay)
            response = requests.head(download_url, timeout=10) # Используем HEAD для быстрой проверки
            
            if response.status_code == 200:
                # Файл существует, теперь скачиваем его
                file_response = requests.get(download_url, timeout=30)
                if file_response.status_code == 200:
                    with open(save_path, 'wb') as f:
                        f.write(file_response.content)
                    tqdm.write(f"[УСПЕХ] Скачан: {relative_path}")
                    downloaded_count += 1
                else:
                    tqdm.write(f"[ОШИБКА GET] Не удалось скачать {relative_path}. Статус: {file_response.status_code}")
            elif response.status_code != 404:
                tqdm.write(f"[ОШИБКА HEAD] Не удалось проверить {relative_path}. Статус: {response.status_code}")

        except requests.exceptions.RequestException:
            # Игнорируем ошибки сети, чтобы не прерывать длинный процесс
            pass

    print("\n--- Работа скрипта завершена! ---")
    print(f"Скачано новых файлов: {downloaded_count}")

if __name__ == "__main__":
    download_missing_files()