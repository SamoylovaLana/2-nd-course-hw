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
