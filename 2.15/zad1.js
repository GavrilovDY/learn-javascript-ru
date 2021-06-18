"use strict"
function checkAge(age) {
	let bool=(age>18) ? true : confirm('Родители разрешили?');
	return bool;
}
checkAge(0);