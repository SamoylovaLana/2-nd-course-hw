//Задание 1 Выведете в консоль 2 раза слово «Привет»
let hi = 1;
while (hi <= 2) {
    alert('Привет');
    hi++;
}

//Задание 2 Выведете в консоль цифры от 1 до 5.
let numeral = 1;
while (numeral < 6) {
    alert(numeral);
    numeral++;
}

//Задание 3 Выведите в консоль числа от 7 до 22.
let numb = 7;
 do {
    alert(numb);
    numb++;
} while (numb < 23);

//Задание 4 Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.'
const subject = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'
};
for ( let name in subject) {
    alert(`${name} — зарплата ${subject[name]} долларов.`);
}

//Задание 5 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num.

for (let n = 1000; n > 31; n /= 2) { 
    alert(n);   
}
let num = 5; // n = 31,25;


//Задание 6
for (let dayNamber = 7; dayNamber < 8; dayNamber -= 3) { // 3 = 28(цикл) - 31(в месяце дней) 
    if (dayNamber <= 7 && dayNamber >= 1) {
    alert(`Сегодня пятница, ${dayNamber}-е число. Необходимо подготовить отчет.`);
    } else if (dayNamber >= -6 || dayNamber <= 0) {
    alert(`Сегодня пятница, ${dayNamber + 7}-е число. Необходимо подготовить отчет.`);
    }
}  
