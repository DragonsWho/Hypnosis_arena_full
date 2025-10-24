import re
import os

# --- НАСТРОЙКИ ---
SOURCE_DIRECTORY = "source_files"
OUTPUT_DIRECTORY = "translated_files"
# Имя конкретного файла, который мы хотим обработать
FILENAME_TO_PROCESS = "story.js" 
# --- КОНЕЦ НАСТРОЕК ---

def process_file(content):
    """
    Эта функция ищет блоки с KOR и ENG и заменяет их.
    Она очень простая и "тупая", как мы и хотели.
    """

    # Это правило ищет: "KOR": "...", "ENG": "..."
    # и захватывает в группу (скобки) только английский текст.
    # \s* - это любой пробел или перенос строки, нужно для красивого форматирования.
    # ".*?" - любой текст в кавычках, ? делает его "не жадным".
    pattern = re.compile(r'"KOR"\s*:\s*".*?"\s*,\s*"ENG"\s*:\s*"(.*?)"')

    # Это строка, на которую мы будем заменять найденное.
    # \1 - это ссылка на тот самый английский текст, который мы захватили в скобки.
    replacement = r'"KOR": "\1"'

    # Выполняем замену по всему тексту файла.
    processed_content = pattern.sub(replacement, content)
    
    return processed_content

def main():
    """
    Главная функция.
    """
    if not os.path.exists(OUTPUT_DIRECTORY):
        os.makedirs(OUTPUT_DIRECTORY)
        print(f"Создана папка: {OUTPUT_DIRECTORY}")

    source_path = os.path.join(SOURCE_DIRECTORY, FILENAME_TO_PROCESS)
    output_path = os.path.join(OUTPUT_DIRECTORY, FILENAME_TO_PROCESS)

    print(f"Начинаю обработку файла: {FILENAME_TO_PROCESS}...")

    if not os.path.exists(source_path):
        print(f"ОШИБКА: Файл '{source_path}' не найден! Убедись, что он лежит в папке 'source_files'.")
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