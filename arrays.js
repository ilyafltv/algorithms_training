// Функции обработки строк

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции с выводом в консоль и запустите файл

// 1. Функция нахождения суммы чисел массива(вне зависимости от типа данных)

const sumOfNumElements = (arr) => {
    return arr.reduce((a, x) => a = x.toString().match(/[0-9]/) ? parseInt(a) + parseInt(x) : a);
}

// console.log(sumOfNumElements([5, 49, '1', 'A']));
// console.log(sumOfNumElements(['1', '2', 'ОДИН', 3]));

// 2. Функция обработки массива, возвращает массив без дубликатов(строк)

const deleteDuplicate = (arr) => {
    return arr.filter((x, i) => arr.indexOf(x) === i);
}

// console.log(deleteDuplicate([1, '1', 2, 2, '3', 3, 'А', '3']));
// console.log(deleteDuplicate([111, 11, 1, 22, 22, 3, 3, 3, "А", "Б", "В", "В"]));

// 3. Функция обработки массива, возвращает массив четных чисел

const findEvenNumbers = (arr) => {
    return arr.filter(x => (parseInt(x) % 2) == 0);
}

// console.log(findEvenNumbers([1, 2, 3, 4, 'a']));
// console.log(findEvenNumbers([11, 22, 'A', '12', 'a']));

// 4. Функция нахождения среднего арифметического нечетных целых чисел массива

const findAverageOfUnvenNumbers = (arr) => {
    const Uneven = arr.filter(x => (parseInt(x) % 2) == 1);
    return Uneven.reduce((a, x) => a += parseInt(x)) / Uneven.length;
}

console.log(findAverageOfUnvenNumbers([1, 2, 3, 4, 5]));
console.log(findAverageOfUnvenNumbers([15, 12, 11, 41, 5]));