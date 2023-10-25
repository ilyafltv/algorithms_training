// Функции обработки строк

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// 1. Функция нахождения суммы чисел массива(вне зависимости от типа данных)

const sumOfNumElements = (arr) => {
    const sum = arr.reduce((a, x) => a = x.toString().match(/[0-9]/) ? parseInt(a) + parseInt(x) : a);
    console.log(sum);
}

// sumOfNumElements([5, 49, '1', 'A']);
// sumOfNumElements(['1', '2', 'ОДИН', 3]);

// 2. Функция обработки массива, возвращает массив без дубликатов(строк)

const deleteDuplicate = (arr) => {
    const newArr = arr.filter((x, i) => arr.indexOf(x) === i);
    console.log(newArr);
}

// deleteDuplicate([1, '1', 2, 2, '3', 3, 'А', '3']);
// deleteDuplicate([111, 11, 1, 22, 22, 3, 3, 3, "А", "Б", "В", "В"]);

// 3. Функция обработки массива, возвращает массив четных чисел

const findEvenNumbers = (arr) => {
    const evenNums = arr.filter(x => (parseInt(x) % 2) == 0);
    console.log(evenNums);
}

// findEvenNumbers([1, 2, 3, 4, 'a']);
// findEvenNumbers([11, 22, 'A', '12', 'a']);

// 4. Функция нахождения среднего арифметического нечетных целых чисел массива

const findAverageOfUnvenNumbers = (arr) => {
    const Uneven = arr.filter(x => (parseInt(x) % 2) == 1);
    const average = Uneven.reduce((a, x) => a += parseInt(x)) / Uneven.length;
    console.log(`Нечетные целые числа массива: ${Uneven}, Среднее арифметическое: ${average}`);
}

// findAverageOfUnvenNumbers([1, 2, 3, 4, 5]);
// findAverageOfUnvenNumbers([15, 12, 11, 41, 5]);