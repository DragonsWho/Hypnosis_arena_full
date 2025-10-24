import re
import json
import argparse
import os

# --- Класс для цветного вывода в терминал ---
class TermColors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def cprint(color, text):
    """Печатает цветной текст."""
    print(color + text + TermColors.ENDC)

def unescape_js_string(s):
    """
    Безопасно раскодирует JS строку, обрабатывая только нужные escape-последовательности.
    Это исправленная версия, которая не ломает UTF-8 символы.
    """
    if s is None:
        return ""
    # Ручная замена, чтобы избежать проблем с кодировкой
    s = s.replace('\\\\', '\\') # Важно, чтобы этот был первым
    s = s.replace('\\"', '"')
    s = s.replace("\\'", "'")
    s = s.replace('\\n', '\n')
    s = s.replace('\\r', '\r')
    s = s.replace('\\t', '\t')
    s = s.replace('\\b', '\b')
    s = s.replace('\\f', '\f')
    return s

def js_string_escape(text):
    """Корректно экранирует строку для вставки в JavaScript."""
    return json.dumps(text, ensure_ascii=False)[1:-1]

def _find_string_literal(content, start_index):
    """
    Находит полную JS строку, возвращая (сырое_содержимое, начало_содержимого, конец_содержимого).
    """
    i = start_index
    while i < len(content) and content[i].isspace():
        i += 1
    
    if i >= len(content) or content[i] not in ('"', "'", "`"):
        return None, -1, -1

    quote_char = content[i]
    content_start = i + 1
    
    j = content_start
    is_multiline = quote_char == '`'
    
    while j < len(content):
        # В многострочных строках (`) слэш не всегда является экранирующим символом для кавычек
        # Но для простоты считаем, что он всегда экранирует следующий символ
        if content[j] == '\\': 
            j += 2
            continue
        if content[j] == quote_char:
            return content[content_start:j], content_start, j
        j += 1
        
    return None, -1, -1

def extract_mode(source_file, output_file):
    cprint(TermColors.HEADER, f"--- Режим извлечения текста ---")
    print(f"Анализ файла: {TermColors.BOLD}{source_file}{TermColors.ENDC}...")
    
    try:
        with open(source_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        cprint(TermColors.FAIL, f"Ошибка: Исходный файл не найден: {source_file}")
        return

    kor_key_pattern = re.compile(r"""(["']?)KOR\1\s*:\s*""")
    eng_key_pattern = re.compile(r"""(["']?)ENG\1\s*:\s*""")
    
    translations = {}
    id_counter = 0
    
    for kor_match in kor_key_pattern.finditer(content):
        raw_kor_text, _, _ = _find_string_literal(content, kor_match.end())

        if raw_kor_text is None:
            continue
        
        kor_text = unescape_js_string(raw_kor_text)

        if not kor_text.strip():
            continue
        
        id_counter += 1
        str_id = f"{id_counter:06d}"
        
        eng_hint = ""
        eng_key_match = eng_key_pattern.search(content, kor_match.end())
        next_kor_key_match = kor_key_pattern.search(content, kor_match.end())

        if eng_key_match and (not next_kor_key_match or eng_key_match.start() < next_kor_key_match.start()):
            raw_hint_text, _, _ = _find_string_literal(content, eng_key_match.end())
            eng_hint = unescape_js_string(raw_hint_text)

        translations[str_id] = {
            "source": kor_text,
            "hint": eng_hint
        }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translations, f, ensure_ascii=False, indent=4)

    cprint(TermColors.OKGREEN, f"\nГотово! Извлечено {len(translations)} строк в файл '{TermColors.BOLD}{output_file}{TermColors.ENDC}'.")
    
    cprint(TermColors.HEADER, "\n--- Что делать дальше? ---")
    print("1. Откройте файл " + TermColors.OKCYAN + output_file + TermColors.ENDC)
    print(f"2. {TermColors.BOLD}Переведите текст из поля 'source'{TermColors.ENDC}. Поле 'hint' - это подсказка.")
    print(f"   {TermColors.WARNING}ВАЖНО: Ваш перевод должен быть записан ВМЕСТО корейского текста в поле 'source'.{TermColors.ENDC}")
    print("3. Сохраните переводы в " + TermColors.BOLD + "НОВЫЙ ФАЙЛ" + TermColors.ENDC + " (например, " + TermColors.OKCYAN + "translated.json" + TermColors.ENDC + ").")
    print("\n4. Для вставки перевода, используйте команду:")
    cprint(TermColors.OKCYAN, f"   python3 localize.py insert {source_file} translated.json")

def insert_mode(source_file, translation_file, output_file):
    cprint(TermColors.HEADER, f"--- Режим вставки перевода ---")
    print(f"Исходный файл: {TermColors.BOLD}{source_file}{TermColors.ENDC}")
    print(f"Файл перевода: {TermColors.BOLD}{translation_file}{TermColors.ENDC}")
    
    try:
        with open(source_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        cprint(TermColors.FAIL, f"Ошибка: Исходный файл не найден: {source_file}")
        return
        
    try:
        with open(translation_file, 'r', encoding='utf-8') as f:
            translations = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        cprint(TermColors.FAIL, f"Ошибка: Не удалось загрузить файл с переводами '{translation_file}': {e}")
        return

    kor_key_pattern = re.compile(r"""(["']?)KOR\1\s*:\s*""")
    eng_key_pattern = re.compile(r"""(["']?)ENG\1\s*:\s*""")
    
    kor_matches_with_content = []
    for m in kor_key_pattern.finditer(content):
        text, _, _ = _find_string_literal(content, m.end())
        if text is not None and unescape_js_string(text).strip():
            kor_matches_with_content.append(m)

    if len(kor_matches_with_content) != len(translations):
        cprint(TermColors.WARNING, "\n--- ПРЕДУПРЕЖДЕНИЕ! ---")
        cprint(TermColors.WARNING, f"Количество строк в исходном файле ({len(kor_matches_with_content)}) не совпадает с количеством в файле перевода ({len(translations)}).")
        cprint(TermColors.WARNING, "Результат может быть некорректным.\n")

    replacements_done = 0
    for i in range(len(kor_matches_with_content) - 1, -1, -1):
        kor_match = kor_matches_with_content[i]
        str_id = f"{i + 1:06d}"

        if str_id not in translations:
            continue
            
        if not isinstance(translations[str_id], dict) or 'source' not in translations[str_id]:
            cprint(TermColors.FAIL, f"Ошибка: Неправильный формат для ID {str_id} в файле {translation_file}. Пропускаем.")
            continue
            
        translated_text = translations[str_id]['source']
        
        eng_key_match = eng_key_pattern.search(content, kor_match.end())
        next_kor_key_match = kor_key_pattern.search(content, kor_match.end())

        if eng_key_match and (not next_kor_key_match or eng_key_match.start() < next_kor_key_match.start()):
            _, content_start, content_end = _find_string_literal(content, eng_key_match.end())
            
            if content_start != -1:
                escaped_translation = js_string_escape(translated_text)
                content = content[:content_start] + escaped_translation + content[content_end:]
                replacements_done += 1

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    cprint(TermColors.OKGREEN, f"\nГотово! Сделано замен: {replacements_done}.")
    cprint(TermColors.OKGREEN, f"Новый файл с переводами создан: '{TermColors.BOLD}{output_file}{TermColors.ENDC}'")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Скрипт для локализации JS файлов (v7.1, фикс кодировки).",
        formatter_class=argparse.RawTextHelpFormatter
    )
    subparsers = parser.add_subparsers(dest='mode', required=True, help='Режим работы')

    parser_extract = subparsers.add_parser('extract', help='Извлечь KOR текст в .json файл для перевода.')
    parser_extract.add_argument('source', help='Исходный JS файл (например, data.js)')
    parser_extract.add_argument('-o', '--output', default='to_translate.json', help='Выходной .json файл (по умолчанию: to_translate.json)')

    parser_insert = subparsers.add_parser('insert', help='Вставить переведенный текст из .json файла.')
    parser_insert.add_argument('source', help='Оригинальный JS файл')
    parser_insert.add_argument('translation', help='Файл .json с переведенным текстом')
    parser_insert.add_argument('-o', '--output', default=None, help='Имя нового JS файла (по умолчанию: original_filename_ENG.js)')

    args = parser.parse_args()

    if args.mode == 'extract':
        extract_mode(args.source, args.output)
    elif args.mode == 'insert':
        output_file = args.output
        if not output_file:
            base, ext = os.path.splitext(args.source)
            output_file = f"{base}_ENG{ext}"
        insert_mode(args.source, args.translation, output_file)