function season() {
    let monthNumber = prompt('Напишите номер месяца');

    if (monthNumber >=  1 && monthNumber <= 2 || monthNumber == 12) {
        alert('Зима');

    } else if (monthNumber >=  3 && monthNumber <= 5) {
        alert('Весна');

    } else if (monthNumber >=  6 && monthNumber <= 8) {
        alert('Лето');

    } else if (monthNumber >=  9 && monthNumber <= 11) {
        alert('Лето');

    } else if (monthNumber >=  13) {
        alert('Такого по числу месяца не существует!');
    }       
}

function memories() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits.sort(() => Math.random()-0.5); // Перемешиваем элементы
    alert(`Запомните: ${fruits}`);
    start = prompt('Чему равнялся первый элемент массива?');
    end = prompt('Чему равнялся последний элемент массива?');
    if (start.toLowerCase() === fruits[0].toLowerCase() && end.toLowerCase() === fruits[6].toLowerCase()) {
        alert('Поздравляю! Вы угадали!');
    } else if (start.toLowerCase() === fruits[0].toLowerCase() || end.toLowerCase() === fruits[6].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
    alert('Вы ответили не верно');
    }
}

//Домашняя работа №8

//Задание 1 Написать функцию, которая на вход принимает массив чисел и callback-функцию. 
//Функция должна возвращать целое число, в зависимости от callback это может быть сумма 
//всех чисел массива, произведение. Функции, вычисляющие произведение и сумму чисел массива, 
//также необходимо реализовать.

function mult(a, b) {
    return a * b;
}

function sum(a, b) {
    return a + b;
}

function getResult(array, funCallBack) {
    const result = array.reduce(funCallBack);
    console.log(result); 
}

getResult ([3, 4, 1, 9], mult); //108
getResult ([3, 4, 1, 9], sum); //17

//Задание 2 Дан массив объектов. Необходимо отсортировать элементы массива 
//в порядке увеличения возраста.

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareAge(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}

function getSortedArrayObj(a) {
    a.sort(compareAge);
    console.log(a);
}

getSortedArrayObj(users);

//Задание 3 Создайте функцию each, которая может производить любые манипуляции над 
//переданным массивом в зависимости от переданной callback-функции. Реализуйте 
//несколько callback-функций, которые будут делать следующее:
//Переворачивать массив: const arrt = [1, '4', 9, 'two'];
//console.log(arrt.reverse());

const array = [1, '4', 9, 'two'];

const each = (a, callback) => {
    result = a.reverse();
    callback();
}
const reversArr = () => { 
    console.log(result);
}

each(array, reversArr); // ['two', 9, '4', 1]

/*Преобразовывать все элементы к числу; если элемент получился NaN, то удалять его:
const massif = [1, '4', false, 9, 'two'];
result = massif.map(item =>(Number(item)));
console.log(result);
result = result.filter(item => item >= 0);
console.log(result);*/

const massif = [1, '4', false, 9, 'two'];

const eachSecond = (a, callback) => {
    result = a.map(item =>(Number(item)));
    callback();
}

const toNumberArr = () => {
    result = result.filter(item => item >= 0); 
    console.log(result);
}

eachSecond(massif, toNumberArr);

//Задание 4 Напишите программу, которая на протяжении 30 секунд, каждые 3 секунды, 
//будет выводить в консоль текущую дату. Последней строкой должно выводиться 
//сообщение «30 секунд прошло». Пример вызова:

// Fri Feb 10 2023 00:02:32 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:35 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:38 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:41 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:44 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:47 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:50 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:53 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:56 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:59 GMT+0300 (Москва, стандартное время)
// 30 секунд прошло

let myDate = new Date();
let timerId = setInterval(() => console.log(myDate), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

//Задание 5 У нас есть код, имитирующий телефонный звонок:

function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        talk();
    }, 1000);
}

function talk() {
    setTimeout(() => {
        console.log('Разговор');
    }, 500);    
}

calling();
beeps(); 
