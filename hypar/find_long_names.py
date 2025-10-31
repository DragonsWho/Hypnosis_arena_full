import sys
try:
    import demjson3
except ImportError:
    print("Ошибка: Необходима библиотека demjson3.")
    print("Пожалуйста, установите ее, выполнив команду в терминале:")
    print("pip install demjson3")
    sys.exit(1)

# --- НАСТРОЙКИ ---
# Укажи максимальную допустимую длину названия.
MAX_LENGTH = 20

# Имя твоего файла с карточками
CARDS_FILE_PATH = 'cards.js'
# --- КОНЕЦ НАСТРОЕК ---

print(f"Поиск названий длиннее {MAX_LENGTH} символов в файле {CARDS_FILE_PATH}...")

long_names = []

try:
    with open(CARDS_FILE_PATH, 'r', encoding='utf-8') as f:
        file_content = f.read()

    # Ищем начало объекта cardDB
    start_marker = "const cardDB = {"
    start_pos = file_content.find(start_marker)

    if start_pos == -1:
        raise ValueError("Не удалось найти 'const cardDB = {' в файле.")

    # Начало нашего объекта
    json_start_index = start_pos + len(start_marker) - 1

    # Ищем соответствующую закрывающую скобку, считая уровни вложенности
    brace_level = 1
    current_pos = json_start_index + 1
    
    while current_pos < len(file_content) and brace_level > 0:
        char = file_content[current_pos]
        if char == '{':
            brace_level += 1
        elif char == '}':
            brace_level -= 1
        current_pos += 1
    
    if brace_level != 0:
        raise ValueError("Не удалось найти закрывающую скобку для объекта cardDB.")

    # Конец нашего объекта
    json_end_index = current_pos

    # Вырезаем "грязный" JavaScript объект
    object_string = file_content[json_start_index : json_end_index]

    # Используем demjson3 для парсинга!
    card_db = demjson3.decode(object_string)

    # Проходим по каждой карточке
    for card_id, card_data in card_db.items():
        name_obj = card_data.get('name')
        if name_obj and name_obj.get('KOR'):
            # Убираем &nbsp; для корректного подсчета длины
            name = name_obj['KOR'].replace('&nbsp;', ' ')
            if len(name) > MAX_LENGTH:
                long_names.append({
                    'id': card_id,
                    'name': name,
                    'length': len(name)
                })

    if not long_names:
        print(f"Отлично! Не найдено названий длиннее {MAX_LENGTH} символов.")
    else:
        long_names.sort(key=lambda item: item['length'], reverse=True)
        print(f"\nНайдено {len(long_names)} слишком длинных названий:\n")
        for item in long_names:
            print(f"- [{item['length']} симв.] ID: {item['id']} -> \"{item['name']}\"")


except FileNotFoundError:
    print(f"Ошибка: Файл '{CARDS_FILE_PATH}' не найден.")
except ValueError as e:
    print(f"Ошибка анализа файла: {e}")
except demjson3.DecodeError as e:
    print(f"Ошибка чтения данных: {e}")
    print("Проверьте, нет ли синтаксической ошибки внутри самого объекта cardDB.")
except Exception as e:
    print(f"Произошла непредвиденная ошибка: {e}")