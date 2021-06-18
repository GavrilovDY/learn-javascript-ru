'use strict'
let message, login;
login=prompt('Введите логин сотрудника','Елена');
message =(login == 'Сотрудник') ? 
  'Привет' :
  (login == 'Директор') ? 'Здравствуйте':
  (login == '') ? 'Нет логина':
  message = 'Такой логин не зарегистрирован';
alert(message);