let a;  // 1 задание
a = 20;
alert(a);

let year;  // 2 задание
year = 2007;
alert(`Год выпуска первого iPhone ${year}`);

let creator;  // 3 задание
creator = "Brendon Eich";
alert(`Имя создателя языка ${creator}`);

let b = 10;  // 4 задание
let c = 2;
let sum = b + c;
alert(sum);
let subtract = b - c;
alert(subtract);
let multiply = b * c;
alert(multiply);
let divide = b / c;
alert(divide);

let two = 2;  // 5 задание, возведение 2 в 5-ю степень = 32
let result = two ** 5;
alert(result);

let aa = 9;  // 6 задание, остаток от деления aa на bb = 1
let bb = 2;
let remainder =  aa % bb;
alert(remainder);

let num = 1;   // 7 задание, переписывание кода с использованием операторов присваивания и инкремента/декремента
num += 5;  // num = num + 5;
num -= 3;  // num = num - 3;
num *= 7;  //num = num * 7;
num /= 3;  //num = num / 3;
num += 1;  //num = num + 1;
num -= 1;  //num = num - 1;
alert(num); // Ответ 7

let age = Number(prompt(`Сколько вам лет?`));  // 8 задание
alert(age);

// 9 задание
const user = {
	name: 'Svetlana',
	surname: 'Samoylova',
    isAdmin: true
};
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// 10 задание
let yourName = prompt(`Ваше имя?`);
alert("Привет," + yourName +`!`);







