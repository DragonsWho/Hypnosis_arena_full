import re
import os

# --- НАСТРОЙКИ ---
SOURCE_DIRECTORY = "source_files"
OUTPUT_DIRECTORY = "translated_files"
FILENAME_TO_PROCESS = "index.html"
# --- КОНЕЦ НАСТРОЕК ---

def process_file(content):
    """
    Обрабатывает HTML-файл в два этапа для максимальной точности:
    1. Сначала обрабатывает маленькие inline-пары <span>.
    2. Затем обрабатывает большие block-пары (p, h2, blockquote).
    """

    # --- Проход 1: Обработка inline-тегов <span> ---
    # Это правило ищет ТОЛЬКО пары <span>, идущие подряд.
    pattern_span = re.compile(
        # Группа 1: Открывающий тег KOR <span...>
        r'(<span[^>]*?KOR.*?>)'
        # Корейское содержимое (пропускаем)
        r'\s*.*?\s*</span>'
        # Пробелы между тегами
        r'\s*'
        # Английский тег <span...>
        r'<span[^>]*?ENG.*?>'
        # Группа 2: Английское содержимое, которое нам нужно
        r'\s*(.*?)\s*'
        # Закрывающий тег </span>
        r'</span>',
        re.DOTALL
    )
    # Замена: берем открывающий KOR тег (\1), вставляем английский текст (\2) и закрываем.
    replacement_span = r'\1\2</span>'
    content = pattern_span.sub(replacement_span, content)


    # --- Проход 2: Обработка block-тегов (p, h2, blockquote) ---
    # Это правило теперь работает с "чистыми" данными после прохода 1.
    pattern_blocks = re.compile(
        # Группа 1: Открывающий KOR тег, Группа 2: его имя (p, h2, или blockquote)
        r'(<(p|h2|blockquote)[^>]*?KOR.*?>)'
        # Корейское содержимое (пропускаем)
        r'\s*.*?\s*</\2>'
        # Пробелы
        r'\s*'
        # Английский тег с тем же именем (\2)
        r'<\2[^>]*?ENG.*?>'
        # Группа 3: Английское содержимое
        r'\s*(.*?)\s*'
        # Закрывающий тег
        r'</\2>',
        re.DOTALL
    )
    # Замена: открывающий KOR тег (\1) + англ. текст (\3) + правильный закрывающий тег (</\2>)
    replacement_blocks = r'\1\3</\2>'
    processed_content = pattern_blocks.sub(replacement_blocks, content)

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