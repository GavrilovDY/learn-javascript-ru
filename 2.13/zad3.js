"use strict"
let three_char;
while (1) {
three_char=prompt('Ввидите число большее 100','');
if (+three_char>100) break;
if ((three_char==undefined) || (isNaN(three_char)==true)) {
	alert('Вы ввели не число!');
}
} 

alert('Молодец!');