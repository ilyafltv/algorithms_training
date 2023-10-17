// Функции обработки чисел

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// Функция подсчета суммы цифр целого числа

const sumOfNumbers = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}
// sumOfNumbers(54321);
// sumOfNumbers(101099);

// Функция инверсии целого числа

const inverseNumber = (num) => {
    let inverseNumber = 0, factor = 1;
    while (num > 0) {
        inverseNumber += (num % 10) * factor;
        factor /= 10;
        num = Math.floor(num / 10);
    }
    while ((inverseNumber % 1) != 0) inverseNumber *= 10;
    console.log(inverseNumber);
}

// inverseNumber(4321);
// inverseNumber(56789);

// Функция определения количества цифр в числе

const countNumber = (num) => {
    result = 0;
    while (num > 0) {
        result += 1;
        num = Math.floor(num / 10);
    }
    console.log(result);
}

// countNumber(110);
// countNumber(99999);

// Функция определения максимальной цифры числа

const maxNumber = (num) => {
    max = 0;
    while (num > 0) {
        max = max < (num % 10) ? max = num % 10 : max;
        num = Math.floor(num / 10);
    }
    console.log(max);
}

// maxNumber(1534);
// maxNumber(768194);

// Функция определения минимальной цифры числа 

const minNumber = (num) => {
    min = num % 10;
    while (num > 0) {
        min = min < (num % 10) ? min : num % 10;
        num = Math.floor(num / 10);
    }
    console.log(min);
}

// minNumber(1534);
// minNumber(88923);