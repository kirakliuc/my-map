Python 3.14.7 (tags/v3.14.7:823f032, Aug  5 2026, 10:51:32) [MSC v.1944 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
...                 upper = y * tile_size
...                 right = min(left + tile_size, scaled_w)
...                 lower = min(upper + tile_size, scaled_h)
...
...                 # Вырезаем тайл
...                 tile = resized_img.crop((left, upper, right, lower))
...
...                 # Если крайний тайл меньше 512x512, создаем прозрачную подложку
...                 full_tile = Image.new("RGBA", (tile_size, tile_size), (0, 0, 0, 0))
...                 full_tile.paste(tile, (0, 0))
...
...                 # Папка вывода: output_dir/{z}/{x}/
...                 zoom_x_dir = os.path.join(output_dir, str(z), str(x))
...                 os.makedirs(zoom_x_dir, exist_ok=True)
...
...                 # Сохраняем в оптимизированный WebP
...                 tile_path = os.path.join(zoom_x_dir, f"{y}.webp")
...                 full_tile.save(tile_path, "WEBP", quality=85)
...
...     print(f"ГОТОВО! Тайлы успешно сохранены в папку:\n{output_dir}")
...
... if __name__ == "__main__":
...     # 1. Укажите имя картинки для теста (положите её рядом со скриптом)
...     INPUT_IMAGE = "test.png"
...
...     # 2. Путь под структуру вашего index.html:
...     # images/world/2026-06-04/fiction/tiles/512/
...     OUTPUT_FOLDER = os.path.join("images", "world", "2026-06-04", "fiction", "tiles", "512")
...
...     generate_tiles(INPUT_IMAGE, OUTPUT_FOLDER)
