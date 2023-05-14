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
/*
//Задание 1
//Создайте функцию, которая принимает строку и один символ и возвращает целое число, 
//соответствующее количеству вхождений второго аргумента в первом.
//Если вхождений не найдено, должно быть возвращено число 0. 
//Используем метод split, filter и свойство length:
//strCount('Hello', 'o'), 1;
//strCount('Hello', 'l'), 2;
//strCount('',      'z'), 0;

function strCount(str, letter){  
    let string = str;
    string = string.split('');
    string = string.filter(item => item === letter );
    console.log(string.length);
}
strCount('Hello', 'o');
strCount('Hello', 'l');
strCount('',      'z');

//Задание 2
//Использовать map и reduce:
//Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
//Например, for [1, 2, 2]он должен возвращаться 9, потому что
function squareSum(numbers){
    let numerals = numbers;
    numerals = numerals.map(item => (item ** 2));
    numerals = numerals.reduce((a, b) => a + b, 0); // 0 пишем на случай если будет [] 
    console.log(numerals);
}
squareSum([]); //0
squareSum([1,2]); //5
squareSum([0, 3, 4, 5]);// 50

//Задание 3 Ваша задача состоит в том, чтобы найти ближайшее квадратное число nearest_sq(n)или nearestSq(n)положительное целое число n.
//Например, если n = 111, то nearest\_sq(n)( nearestSq(n)) равно 121, так как 111 ближе к 121, квадрату 11, чем 100, квадрату 10.
//Если это nуже идеальный квадрат (например n = 144, n = 81, и т. д.), вам нужно просто вернуть n.
//Math.sqrt и условное ветвление:
function nearestSq(n) {
    if (n === 1 ) {
        return n;
    } else  {
        n = Math.round(Math.sqrt(n));
        n *= n;
        return n;
    }
}
nearestSq(10);
nearestSq(111);
nearestSq(9999);

//Задание 4 Split, reverse, join:

function solution(str){  
  let strg = str.split('');
  strg = strg.reverse();
  strg = strg.join(``);
  console.log(strg);
}
solution('world');
solution('');

//Задание 5 Split, length, map:Что, если нам нужно, чтобы длина слов, разделенных пробелом, 
//была добавлена ​​в конце того же слова и возвращена в виде массива?
//"apple ban" --> ["apple 5", "ban 3"] "you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
    let string = str.split(' ').map(a => (a + ' ' + a.length));
    return string;
}

addLength('you will win'); //["you 3", "will 4", "win 3"]

//Задание 6 Арифметические операторы, условное ветвление:
//Есть предложение «3 по цене 2» (или «2+1» , если хотите) на манго. Для данного количества 
//и цены (за манго) рассчитайте общую стоимость манго.
//mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
//mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
//mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
//mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
function mango(quantity, price){
    if (quantity < 3) {
        return quantity * price;
    } else if (quantity >= 3) {
        return(quantity * price) - price * Math.floor(quantity / 3);
    }
}
mango(3, 3); // 6
mango(9, 5); // 30

//Задание 7 Арифметические операторы, Math.floor():
//Натан любит кататься на велосипеде. Поскольку Натан знает, как важно избегать обезвоживания, 
//он выпивает 0,5 литра воды за час езды на велосипеде. Вам дается время в часах, и вам нужно 
//вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
//Например:time = 3 ----> litres = 1
//time = 6.7---> litres = 3
//time = 11.8--> litres = 5

function litres(time) {
    let water = Math.floor(time * 0.5)
    return water;
  }
  litres(1787);//893 
  
 //Задание 8 map(), условный оператор:
 //Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное 
 //становится отрицательным, а отрицательное становится положительным.
 //invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
function invert(array) {
   let massif = array.map(item => (item * -1), 0);
    return massif;
 }
 invert([1, -2, 3, -4, 5])

 //Задание 9 Цикл, Math.pow(): 
 //Завершите функцию, которая принимает неотрицательное целое число n в качестве входных 
 //данных и возвращает список всех степеней 2 с показателем степени от 0 до n( включительно ).
function powersOfTwo(n){
    let result = [];
    for (i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}
powersOfTwo(0); // [1]
powersOfTwo(1); // [1, 2]
powersOfTwo(4); // [1, 2, 4, 8, 16]

//Задание 10 length, условный оператор, reduce:
//Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    let result = x.reduce((a, b) => a * b);
    return result;
}
grow([2, 2, 2, 2, 2, 2]); // 64
*/
//Задание 11 Цикл, арифмитические операторы:
//Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.
//Например (Вход -> Выход) :
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)