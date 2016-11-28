'use strict';
const fs = require('fs');
/*const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/laba_pp.log', {flags : 'w'});
const log_stdout = process.stdout;

console.log = function() {
	for (let i = 0; i < arguments.length; i++) {
  		log_file.write(util.format(arguments[i]) + '\n');
  		log_stdout.write(util.format(arguments[i]) + '\n');
	}
};*/

const shemsya = {};

((o) => {

	let Data = [
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
		"Аадам Смит",
		"Шарль Ккулон",
		"Вильям Гершель"
	];

	let array = Data.slice(0);

	o.getArray = () => array.slice(0);

	o.filterArray = (criteria) => {
		if (criteria !== undefined) {			
			array = array.filter(criteria);
		} else {
			array = array.filter(element => element[0] >= 'А' && element[0] <= 'Я');
		}
	};

	o.sortArray = (criteria) => {
		if (criteria !== undefined) {
			array.sort(criteria);
		} else {			
			array.sort((a, b) => {
				if (a > b) return 1;
				if (a < b) return -1;
			});
		}
	}

	o.toCharCodeArrays = () => array.map((e) => e.split('').map((c) => c.charCodeAt(0)));

	o.toWordArrays = () => array.map((e) => e.split(/[\s\t]+/));

	o.reinitArray = () => {
		array = Data.slice(0);
	}
	o.searchSubstring = (substr) => array.slice(0).filter(element => element.indexOf(substr) > -1); 

    o.searchContainsInText = (text) => array.slice(0).filter(element => text.indexOf(element) > -1);


})(shemsya);

//console.log('shemsya.getArray():\n\n', shemsya.getArray(), '\n\n');

//shemsya.filterArray();
//console.log('shemsya.filterArray() then shemsya.getArray():\n\n', shemsya.getArray(), '\n\n');

//shemsya.sortArray();
//console.log('shemsya.sortArray() then shemsya.getArray():\n\n', shemsya.getArray(), '\n\n');

//console.log('shemsya.toCharCodeArrays():\n\n', shemsya.toCharCodeArrays(), '\n\n');

//console.log('shemsya.toWordArrays():\n\n', shemsya.toWordArrays(), '\n\n');
console.log('shemsya.searchSubstring():\n\n', shemsya.searchSubstring("Николай"), '\n\n');
