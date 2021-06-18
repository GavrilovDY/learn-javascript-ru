"use strict" 

let name = prompt('Как тебя зовут?', 'Леонид?' );
let result = confirm('Точно?');
if (result==true) {
	alert(name);
}	else {
	alert('Он кажется забыл свое имя');
}