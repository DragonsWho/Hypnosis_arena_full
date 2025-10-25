import os
import requests
from tqdm import tqdm # для красивого прогресс-бара

# --- НАСТРОЙКИ ---

# Базовый URL, откуда будем качать
BASE_URL = "https://flccncn.neocities.org/hypnosisArena/"

# Папка, из которой берем названия файлов (относительно места запуска скрипта)
SOURCE_DIR = os.path.join("image", "card")

# Папка, куда будем сохранять скачанные файлы
TARGET_DIR = os.path.join("image", "cardEx")

# --- КОНЕЦ НАСТРОЕК ---


def download_files():
    print("--- Запуск скрипта для скачивания расширенных версий изображений ---")

    # 1. Проверяем, существует ли папка с исходными файлами
    if not os.path.isdir(SOURCE_DIR):
        print(f"Ошибка: Папка с исходными файлами '{SOURCE_DIR}' не найдена!")
        print("Пожалуйста, убедитесь, что скрипт запущен из правильной папки ('images')")
        print("и что структура папок верна.")
        return # Выходим из функции, если папки нет

    # 2. Создаем папку для сохранения, если её еще нет
    os.makedirs(TARGET_DIR, exist_ok=True)
    print(f"Файлы будут сохранены в папку: '{TARGET_DIR}'")

    # 3. Получаем список всех файлов в исходной папке
    try:
        source_files = os.listdir(SOURCE_DIR)
        print(f"Найдено файлов в '{SOURCE_DIR}': {len(source_files)}")
    except Exception as e:
        print(f"Не удалось прочитать файлы из папки '{SOURCE_DIR}': {e}")
        return

    # 4. Проходим по каждому файлу и пытаемся скачать его Ex-версию
    for filename in tqdm(source_files, desc="Скачивание файлов"):
        
        # Формируем новое имя файла, убирая '-real' (как в примере)
        target_filename = filename.replace('-real', '')
        
        # Собираем полный URL для скачивания
        # Пример: https://.../hypnosisArena/image/cardEx/WA-NM-AT-002.webp
        download_url = f"{BASE_URL}{TARGET_DIR.replace(os.sep, '/')}/{target_filename}"
        
        # Путь, куда будет сохранен файл на вашем компьютере
        save_path = os.path.join(TARGET_DIR, target_filename)

        # Проверяем, не скачан ли этот файл ранее
        if os.path.exists(save_path):
            # tqdm.write(f"Файл {target_filename} уже существует, пропускаем.")
            continue # переходим к следующему файлу

        # Пытаемся скачать файл
        try:
            response = requests.get(download_url, timeout=10)
            
            # Проверяем, что сервер ответил успешно (код 200)
            if response.status_code == 200:
                # Записываем содержимое в файл в бинарном режиме ('wb')
                with open(save_path, 'wb') as f:
                    f.write(response.content)
                # tqdm.write(f"Успешно скачан: {target_filename}") # можно включить для детального лога
            else:
                # Если файла на сервере нет (404) или другая ошибка
                tqdm.write(f"Не удалось скачать {target_filename}. Статус: {response.status_code}")

        except requests.exceptions.RequestException as e:
            tqdm.write(f"Ошибка сети при скачивании {target_filename}: {e}")

    print("\n--- Работа скрипта завершена! ---")


# Запускаем основную функцию
if __name__ == "__main__":
    download_files()