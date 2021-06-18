"use strict"
const number=+prompt('Введите число между 0 и 3','2');
switch (number) {
	case  0:
	alert('Вы ввели число 0');
	break;
	case 1:
	alert('Вы ввели число 1');
	break;
	case 2:
	case 3:
	alert('Вы ввели число 2, а может быть 3');
	break;
	default:
	alert('Вы ввели что-то не то');
}