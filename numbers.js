// Функции обработки чисел

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// 1. Функция подсчета суммы цифр целого числа

const sumOfNumbers = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
// console.log(sumOfNumbers(54321));
// console.log(sumOfNumbers(101099));

// 2. Функция инверсии целого числа

const inverseNumber = (num) => {
    let inverseNumber = 0, factor = 1;
    while (num > 0) {
        inverseNumber += (num % 10) * factor;
        factor /= 10;
        num = Math.floor(num / 10);
    }
    while ((inverseNumber % 1) != 0) inverseNumber *= 10;
    return (inverseNumber);
}

// console.log(inverseNumber(4321));
// console.log(inverseNumber(56789));

// 3. Функция определения количества цифр в числе

const countNumber = (num) => {
    result = 0;
    while (num > 0) {
        result += 1;
        num = Math.floor(num / 10);
    }
    return result;
}

// console.log(countNumber(110));
// console.log(countNumber(99999));

// 4. Функция определения максимальной цифры числа

const maxNumber = (num) => {
    max = 0;
    while (num > 0) {
        max = max < (num % 10) ? max = num % 10 : max;
        num = Math.floor(num / 10);
    }
    return max;
}

// console.log(maxNumber(1534));
// console.log(maxNumber(768194));

// 5. Функция определения минимальной цифры числа 

const minNumber = (num) => {
    min = num % 10;
    while (num > 0) {
        min = min < (num % 10) ? min : num % 10;
        num = Math.floor(num / 10);
    }
    return min;
}

// console.log(minNumber(1534));
// console.log(minNumber(88923));