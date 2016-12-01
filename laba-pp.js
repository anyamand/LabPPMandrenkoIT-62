'use strict';
const userInterface = {};
let array = [
    "Пифагор",
    "Гипократ",
    "Евклид",
    "Архимед",
    "Николай Коперник",
    "Теофаст Парацельс",
    "Андреас Везалий",
    "Франсуа Виет",
    "Галилео Галилей",
    "Иоганн Кеплер",
    "Вильям Гарвей",
    "Рене Декарт",
    "Пьер Ферма",
    "Блез Паскаль",
    "Роберт Бойль",
    "Христиан Гюгенс",
    "Антони ван Левенгук",
    "Исаак Ньютон",
    "Готфрид Лейбниц",
    "Карл Линней",
    "Леонард Эйлер",
    "Михаил Васильевич Ломоносов",
    "Адам Смит",
    "Шарль Кулон",
    "Вильям Гершель"
];

console.log('Отфильтрованый массив:\n\n',
	array.filter((element) => element[0] >= 'А' && element[0] <= 'Я'));
        			
console.log('Отсортированый массив:\n\n', array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
}));

console.log('Массивы кодов символов:\n\n',
	array.map((e) => e.split('').map((c) => c.charCodeAt(0))),'\n\n');

console.log('Массивы слов в строках:\n\n',
	array.map((e) => e.split(/[\s\t]+/)), '\n\n');

((o) => {
    o.searchSubstring = (substr) => array.slice(0)
        .filter((element) => element.indexOf(substr) > -1); 

    o.searchContainsInText = (text) => array.slice(0)
        .filter((element) => text.indexOf(element) > -1);
})(userInterface);

console.log('shemsya.searchSubstring():\n\n',
    userInterface.searchSubstring('Николай'), '\n\n');
console.log('searchContainsInText(text):\n\n',
    userInterface.searchContainsInText('Адам Смит родился в Шотландии'), '\n\n');
