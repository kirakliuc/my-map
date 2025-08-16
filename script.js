// script.js

// Створюємо мапу
let map = L.map('map', {
    center: [0, 0], // стартові координати (можеш змінити на центр свого світу)
    zoom: 2
});

// Базовий шар
let realWorld = L.imageOverlay('images/real_world.png', [[-90, -180], [90, 180]]).addTo(map);

// Інші шари
let fictionCountries = L.imageOverlay('images/fiction_countries.png', [[-90, -180], [90, 180]]);
  let countryNames = L.imageOverlay('images/country_names.png', [[-90, -180], [90, 180]]);
  let cityNames = L.imageOverlay('images/city_names.png', [[-90, -180], [90, 180]]);
  let infrastructure = L.imageOverlay('images/infrastructure.png', [[-90, -180], [90, 180]]);
  let divisions = L.imageOverlay('images/divisions.png', [[-90, -180], [90, 180]]);
  let layer13 = L.imageOverlay('images/layer13.png', [[-90, -180], [90, 180]]);
  let foto = L.imageOverlay('images/foto.png', [[-90, -180], [90, 180]]);

// Контрол для вмикання/вимикання шарів
let overlays = {
    "Країни": fictionCountries,
    "Назви країн": countryNames,
    "Назви міст": cityNames,
    "Інфраструктура": infrastructure,
    "Дивізії": divisions,
    "Шар 13": layer13
    "Фото": Фото
};
L.control.layers(null, overlays).addTo(map);



