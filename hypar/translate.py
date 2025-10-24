import re
import os

# --- НАСТРОЙКИ ---
SOURCE_DIRECTORY = "source_files"
OUTPUT_DIRECTORY = "translated_files"
# --- КОНЕЦ НАСТРОЕК ---

def translate_file_content(content):
    """
    Универсальная функция, которая обрабатывает три формата,
    не выходя за пределы одного объекта {}.
    """
    
    # --- Правило №1: Массивы строк ---
    # [^{}]*? - ищет любые символы, КРОМЕ { и }, не "перепрыгивая" через объекты.
    pattern_array = re.compile(r'{\s*"?KOR"?[^{}]*?,\s*"?ENG"?\s*:\s*\[(.*?)\]\s*}', re.DOTALL)
    
    def replace_array(match):
        eng_content = match.group(1).strip()
        if eng_content:
            return f'{{ "KOR":[{eng_content}] }}'
        return match.group(0)

    content = pattern_array.sub(replace_array, content)

    # --- Правило №2: Многострочный текст ---
    pattern_backtick = re.compile(r'{\s*"?KOR"?[^{}]*?,\s*"?ENG"?\s*:\s*`(.*?)`\s*}', re.DOTALL)

    def replace_backtick(match):
        eng_content = match.group(1)
        if eng_content and not eng_content.isspace():
            return f'{{ "KOR":`{eng_content}` }}'
        return match.group(0)

    content = pattern_backtick.sub(replace_backtick, content)

    # --- Правило №3: Обычные строки ---
    pattern_string = re.compile(r'{\s*"?KOR"?[^{}]*?,\s*"?ENG"?\s*:\s*"(.*?)"\s*}', re.DOTALL)

    def replace_string(match):
        eng_content = match.group(1)
        if eng_content:
            return f'{{ "KOR":"{eng_content}" }}'
        return match.group(0)

    content = pattern_string.sub(replace_string, content)

    return content

def main():
    """
    Главная функция скрипта. (без изменений)
    """
    if not os.path.exists(OUTPUT_DIRECTORY):
        os.makedirs(OUTPUT_DIRECTORY)
        print(f"Создана папка: {OUTPUT_DIRECTORY}")

    print(f"Начинаю обработку файлов из папки: {SOURCE_DIRECTORY}...")

    try:
        files_to_process = os.listdir(SOURCE_DIRECTORY)
    except FileNotFoundError:
        print(f"ОШИБКА: Папка '{SOURCE_DIRECTORY}' не найдена! Убедись, что она существует и в ней есть файлы.")
        return

    for filename in files_to_process:
        if filename.endswith('.js'):
            source_path = os.path.join(SOURCE_DIRECTORY, filename)
            output_path = os.path.join(OUTPUT_DIRECTORY, filename)

            print(f"  -> Обрабатываю файл: {filename}")

            try:
                with open(source_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                new_content = translate_file_content(content)

                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
            
            except Exception as e:
                print(f"    !! Произошла ошибка при обработке файла {filename}: {e}")

    print("\nГотово! Все файлы обработаны и сохранены в папку 'translated_files'.")


if __name__ == "__main__":
    main()