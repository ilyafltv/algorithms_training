// Функции обработки строк

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// Функция нахождения суммы чисел массива(вне зависимости от типа данных)

const sumOfNumElements = (arr) => {
    let sum = 0;
    for (let elem of arr) {
        elem = elem.toString();
        if (elem.match(/[0-9]/)) sum += parseInt(elem);
    }
    console.log(sum);
}

// sumOfNumElements([5, 49, '1', 'A']);
// sumOfNumElements(['1', '2', 'ОДИН', 3]);

// Функция сортировки массива, возвращает массив без дубликатов(строк)

const deleteDuplicate = (arr) => {
    let result = [];
    for (let elem of arr) {
        elem = elem.toString();
        let flag = false;
        for (let j of result) if (elem == j) flag = true;
        if (!flag) result.push(elem);
    }
    console.log(result);
}

// deleteDuplicate([1, '1', 2, 3, 'А', '3']);
// deleteDuplicate([111, 11, 1, 22, 22, 3, 3, 3, "А", "Б", "В", "В"]);

// Функция сортировки массива, возвращает массив четных чисел

const findEvenNumbers = (arr) => {
    let evenNums = [];
    for (let elem of arr) if ((parseInt(elem) % 2) == 0) evenNums.push(parseInt(elem));
    console.log(evenNums);
}

// findEvenNumbers([1, 2, 3, 4, 'a']);
// findEvenNumbers([11, 22, 'A', '12', 'a']);

// Функция нахождения среднего арифметического нечетных целых чисел массива

const findAverageOfUnvenNumbers = (arr) => {
    let average = 0, Uneven = [];
    for (let elem of arr) if ((parseInt(elem) % 2) == 1) Uneven.push(parseInt(elem));
    console.log(`Нечетные целые числа массива: ${Uneven}`);
    for (let elem of Uneven) average += elem;
    average /= Uneven.length;
    console.log(`Среднее арифметическое: ${average}`);
}

// findAverageOfUnvenNumbers([1, 2, 3, 4, 5]);
// findAverageOfUnvenNumbers([15, 12, 11, 41, 5]);