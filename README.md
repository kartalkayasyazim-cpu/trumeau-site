TRUMEAU v15 (RU + KZ) — FIXED

Что исправлено:
- Работает переключатель языков RU/KZ (сохраняется в браузере).
- Работает меню (бургер) на мобильных.
- На странице MIRRORS отображаются все загруженные фото (витрина из JSON).
- Добавлены контакты и блок доставки в footer и на странице Contacts.
- Добавлен логотип (assets/img/logo.png).

Как добавить новые зеркала:
1) Закиньте фото в: assets/img/products/mirrors/
2) Откройте: assets/data/products-mirrors.json
3) Добавьте новый объект по примеру:
   { "id":"mirror-999", "title_ru":"Зеркало ...", "title_kz":"Айна ...", "image":"assets/img/products/mirrors/FILE.png", "style":"classic|modern", "shape":"rect|round|arched", "color":"gold|..." }

Важно:
- Пути чувствительны к регистру на GitHub Pages.
- Если после обновления "старые" файлы видны — очистите кеш браузера или откройте в инкогнито.
