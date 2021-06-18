"use strict"
let str;
str=prompt('Какое "официальное" название JavaScript?','');
if (str=='ECMAScript' || str=='ecmascript' || str=='Ecmascript' || str=='EcmaScript') {
	alert('Верно!');
} else {
	alert('Вам необходимо перечитать урок');
}