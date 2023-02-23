/*/ Домашняя работа №3

// 1 задание
let password = prompt("Введите пароль");
if (password === '5HsrU84'){
	alert("Пароль введен верно");
} else {
	alert("Пароль введен неправильно");
}

// 2 задание

let c = prompt("Введите число");
if ( c == 55 ){
	alert("Верно");
} else if ( c >= 0 && c <= 10 ){
	alert("Верно");
} else {
	alert("Неверно");
}

// 3 задание

let d = prompt("Введите первое число");
let e = prompt("Введите второе число");
if ( d >= 100 || e >= 100 ){
	alert("Верно");
} else {
	alert("Неверно");
}

// 4 задание

let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert( a + b);

// 5 задание

let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
      case '1': case '2': case '12':
            alert('Зима');
            break;
      case '3': case '4': case '5':
            alert('Весна');
            break;
      case '6': case '7': case '8':
            alert('Лето');
            break;
      case '9': case '10': case '11':
            alert('Осень');
            break;
      default:
            alert('Такого по числу месяца не существует!');
            break;
}

//Дополнительная практика

// 7 задание

let numb = prompt("Пожалуйста, введите любое число");
if (isNaN(numb)) {
      alert('Нужно написать число!');
} else if (numb % 2 == 0) {
      alert('Число чётное!');
} else {
      alert('Число не чётное!');
}

// 8 задание

let clientOS = prompt("Если Вы используете iOS введите - 0, а если Android введите - 1  ");
if (clientOS === '0') {
      alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === '1') {
      alert('Установите версию приложения для Android по ссылке');
} else {
      alert('Нужно ввести 1 или 0');
}

// 9 задание

let clientOS1 = prompt("Если Вы используете iOS введите - 0, если Android введите - 1  ");
let clientDeviceYear = prompt("Напишите год выпуска Вашего телефона");
if (clientOS1 === '0' && clientDeviceYear <= '2014' ) {
      alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS1 === '0' &&  clientDeviceYear >= '2015' ) {
      alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS1 === '1' && clientDeviceYear <= '2014' ) {
      alert('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS1 === '1' &&  clientDeviceYear >= '2015') {
      alert('Установите версию приложения для Android по ссылке');
} else {
      alert('Введено не верно');
}
*/