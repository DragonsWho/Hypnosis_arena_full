import re
import os

# --- НАСТРОЙКИ ---
SOURCE_DIRECTORY = "source_files"
OUTPUT_DIRECTORY = "translated_files"
FILENAME_TO_PROCESS = "story.js"
# --- КОНЕЦ НАСТРОЕК ---

def process_file(content):
    """
    Обрабатывает story.js, используя очень точные и безопасные правила в правильном порядке.
    """

    # --- Проход 1: Обработка ТОЛЬКО объектов `name` ---
    # Это правило теперь ищет конструкцию, которая начинается именно с 'name:'.
    # Это не позволит ему "убежать" и захватить лишнего.
    pattern_name_object = re.compile(
        # Группа 1: Захватываем 'name:' и пробелы, чтобы сохранить форматирование
        r'(name\s*:\s*)'
        # Ищем сам объект
        r'{\s*"?KOR"?\s*:.*?,\s*"?ENG"?\s*:\s*(".*?"|`.*?`)\s*}',
        re.DOTALL
    )

    # Замена для name: \1 - это 'name:', \2 - это английское значение ("???")
    replacement_name_object = r'\1{ "KOR": \2 }'
    
    # Сначала выполняем эту, самую точную замену
    content = pattern_name_object.sub(replacement_name_object, content)


    # --- Проход 2: Обработка основных многострочных блоков (теперь безопасно) ---
    # Это правило ищет только большие блоки KOR/ENG.
    # Так как объекты 'name' уже исправлены (в них нет ENG), это правило их не увидит.
    pattern_backticks = re.compile(
        # Группа 1: Все до корейского текста (например, 'KOR:`')
        r'("?KOR"?\s*:\s*`)'
        # Корейский текст (нам не нужен, но его нужно найти)
        r'.*?'
        # Разделитель и ключ ENG (например, '`, "ENG":`')
        r'(`\s*,\s*"?ENG"?\s*:\s*`)'
        # Группа 2: Английский текст
        r'(.*?)'
        # Группа 3: Закрывающая кавычка ENG
        r'(`)',
        re.DOTALL
    )

    # "Умная" функция замены, которая аккуратно перестраивает строку
    def safe_replace(match):
        kor_key_part = match.group(1)   # 'KOR:`'
        english_text = match.group(2)   # Английский текст
        closing_tick = match.group(3)   # '`'
        # Собираем новую строку, выбрасывая блок ENG
        return f"{kor_key_part}{english_text}{closing_tick}"

    processed_content = pattern_backticks.sub(safe_replace, content)
    
    return processed_content

def main():
    # Эта часть не меняется
    if not os.path.exists(OUTPUT_DIRECTORY):
        os.makedirs(OUTPUT_DIRECTORY)
        print(f"Создана папка: {OUTPUT_DIRECTORY}")

    source_path = os.path.join(SOURCE_DIRECTORY, FILENAME_TO_PROCESS)
    output_path = os.path.join(OUTPUT_DIRECTORY, FILENAME_TO_PROCESS)

    print(f"Начинаю обработку файла: {FILENAME_TO_PROCESS}...")

    if not os.path.exists(source_path):
        print(f"ОШИБКА: Файл '{source_path}' не найден!")
        return

    try:
        with open(source_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = process_file(content)

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Готово! Обработанный файл сохранен как '{output_path}'.")

    except Exception as e:
        print(f"!! Произошла ошибка при обработке файла: {e}")


if __name__ == "__main__":
    main()