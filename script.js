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

// Дополнительные задания из домашней работы №6

//Задание 11 Создайте массив, состоящий из 10 значений. Значения массива необходимо 
//сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
//В данном массиве найдите все четные значения и добавьте их в новый массив. 
//Результат работы программы необходимо вывести в консоль — это будет два массива: 
//исходный массив и массив с четными значениями.

let oldArray = []; 
for (let i = 0; i <= 9; i++) { 
    oldArray[i] = (Math.round(Math.random() * 10)); 
}
console.log(oldArray);
let newArray = oldArray.filter(item => item % 2 == 0);
console.log(newArray);

//Задание 12 Создайте массив, состоящий из 6 элементов. Элементы массива необходимо 
//сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
//Требуется найти среднее арифметическое этих цифр, результат программы вывести в 
//консоль. Для получения среднего арифметического необходимо все значения массива 
//сложить и разделить на количество элементов в массиве.

let oldMassif = []; 
for (let i = 0; i <= 5; i++) { 
    oldMassif[i] = (Math.round(Math.random() * 10) + 1); 
}
console.log(oldMassif);
let newMassif = oldMassif.reduce((a, b) => (a + b));
console.log(newMassif / 6);


//Домашняя работа №7

// Задание 1 Преобразуйте строку js в верхний регистр JS.

let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2 Создайте функцию, которая в качестве параметров принимает массив строк 
//и строку. Возвращать данная функция должна новый массив, содержащий только те 
//элементы переданного массива, которые начинаются с переданной строки. Регистр 
//символов не должен влиять.

function searchStart(animals, search) {
    animals.forEach((animals) => {
        if (animals.toLowerCase().includes(search.toLowerCase())) {
            console.log([animals.toLowerCase()]);
        }
    });
}  

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 


//Задание 3 Округлите число 32.58884:
//До меньшего целого
//До большего целого
//До ближайшего целого

let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


//Задание 4 Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди 
//этих чисел наименьшее и наибольшее числа и вывести их в консоль.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5 Создайте функцию, которая будет выводить в консоль рандомное 
//число от 1 до 10.

function randomNumb(minNumb, maxNumb) {
    return Math.round(Math.random()*(maxNumb - minNumb)) + minNumb;
}
console.log(randomNumb(1, 10));

//Задание 6 Напишите функцию, которая будет принимать на вход целое число, а 
//возвращать массив случайных целых чисел от 0 до переданного числа. Длина 
//массива должна быть в 2 раза меньше переданного числа.
//getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
//getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

function getRandomArrNumbers(numb) {
    
    let array = []; 
    for (let i = 0; i < Math.floor(numb / 2); i++) { 
        array[i] = (Math.round(Math.random() * numb)); 
        
    }
    console.log(array);
}   
 
getRandomArrNumbers(7);
getRandomArrNumbers(12);

//Задание 7 Напишите функцию, которая на вход принимает 2 целых числа, 
//а в качестве результата возвращает случайное целое число в этом диапазоне.

function randomNumber(first, second) {
    return Math.round(Math.random() * (first - second))+second;
}

console.log(`${randomNumber(1, 10)}`);

//Задание 8 Выведите в консоль текущую дату в стандартном режиме. 
//Используйте один из трех рассмотренных в уроке способов. 
let myDate = new Date();
console.log(myDate);

//Задание 9 Создайте переменную currentDate и сохраните в нее текущую дату. 
//Выведите дату, которая наступит через 73 дня после текущей.
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10 Написать функцию, которая на вход принимает дату, а возвращает 
//ее отображение в виде: Дата: <число> <месяц на русском> <год> - это <день 
//недели на русском>. Время: <часы>:<минуты>:<секунды>
//Время, которое будет выведено, также хранится в объекте Date.

function dayMonths(days, months) {
    let myDate = new Date();
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] 
    + " " +  myDate.getFullYear() + " " + "-" + " " + "это" + " " + days[myDate.getDay()] + '.' + " "+ "Время:" + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 
    console.log(fullDate);
}

dayMonths(["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", 
"суббота"],["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня","Июля", "Августа", 
"Сентября", "Октября", "Ноября", "Декабря"]);


//Дан массив слов:['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'].
//Необходимо перемешать элементы массива и вывести на экран пользователю с использованием alert();
//Спросить у пользователя:
//Чему равнялся первый элемент массива?
//Чему равнялся последний элемент массива?
//Поздравить пользователя, если он угадал оба элемента.
//Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
//Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.



function memories() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    
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