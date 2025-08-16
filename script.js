// script.js

// Створюємо мапу
let map = L.map('map', {
    center: [0, 0], // стартові координати (можеш змінити на центр свого світу)
    zoom: 2
});

// Базовий шар
let realWorld = L.imageOverlay('photo_2025-08-15_11-36-18.jpg', [[-90, -180], [90, 180]]).addTo(map);

// Інші шари
let fictionCountries = L.imageOverlay('fiction_countries.png', [[-90, -180], [90, 180]]);
let countryNames = L.imageOverlay('country_names.png', [[-90, -180], [90, 180]]);
let cityNames = L.imageOverlay('city_names.png', [[-90, -180], [90, 180]]);
let infrastructure = L.imageOverlay('infrastructure.png', [[-90, -180], [90, 180]]);
let divisions = L.imageOverlay('divisions.png', [[-90, -180], [90, 180]]);
let layer13 = L.imageOverlay('layer13.png', [[-90, -180], [90, 180]]);

// Контрол для вмикання/вимикання шарів
let overlays = {
    "Країни": fictionCountries,
    "Назви країн": countryNames,
    "Назви міст": cityNames,
    "Інфраструктура": infrastructure,
    "Дивізії": divisions,
    "Шар 13": layer13
};
L.control.layers(null, overlays).addTo(map);

