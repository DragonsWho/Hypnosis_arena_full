# livereload_server.py
from livereload import Server
import webbrowser
from threading import Timer
import os

# --- Настройки ---
PORT = 5500 # Часто используется порт 5500, как в VS Code Live Server
HOST = '127.0.0.1'
TARGET_FILE = 'hypar/index.html'
# -----------------

# Проверяем, существует ли целевой файл
if not os.path.exists(TARGET_FILE):
    print(f"Ошибка: Файл '{TARGET_FILE}' не найден.")
    print("Убедитесь, что скрипт запущен из корневой папки вашего проекта.")
    exit()

# Собираем URL для открытия в браузере
url = f"http://{HOST}:{PORT}/{TARGET_FILE}"

# Создаем экземпляр сервера
server = Server()

# Указываем, за какими файлами следить. '**/ *.*' означает все файлы во всех подпапках.
# При изменении любого из них, страница в браузере перезагрузится.
server.watch('**/*.html')
server.watch('**/*.css')
server.watch('**/*.js')
server.watch('**/*.svg')
server.watch('**/*.json')

print(f"Live-reload сервер запущен! Откройте в браузере: {url}")
print("Сервер следит за изменениями в файлах...")
print("Для остановки сервера нажмите Ctrl+C")

# Запускаем браузер через секунду после старта (чтобы сервер успел подняться)
Timer(1, webbrowser.open_new_tab, args=[url]).start()

# Запускаем сервер. Он будет работать, пока вы его не остановите (Ctrl+C)
# root='.' означает, что файлы отдаются из текущей директории
server.serve(port=PORT, host=HOST, root='.')