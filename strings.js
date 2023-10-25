// Функции обработки строк

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// 1. Функция подсчёта количества слов в строке 

const wordCountFunction = (str) => {
    return str.trim().split(/[\s]{1,}/g).length;
}

// console.log(wordCountFunction(" В этой строке одиннадцать слов, несмотря на знаки и  ЛИШНИЕ  пробелы! "));
// console.log(wordCountFunction("You can also use latin alphabet(6)."));

// 2. Функция подсчёта прописных букв в строке

const upperCaseCheckFunction = (str) => {
    return str.match(/[А-Я,A-Z]/g).length;
}

// console.log(upperCaseCheckFunction('Подсчет Прописных Букв В Строке(5)'));
// console.log(upperCaseCheckFunction(' AAABBBCCC(9)'));

// 3. Функция удаления повторяющихся символов;

const deleteDuplicateFuntion = (str) => {
    const arr = str.split('');
    return arr.filter((x, i) => arr.indexOf(x) === i);
}

// console.log(deleteDuplicateFuntion("aaabbbcccabcAAA"));
// console.log(deleteDuplicateFuntion("AaAaAa00bcDE11"));

// 4. Функция подсчета количества символов самого длинного слова

const findTheLongestWord = (str) => {
    const arr = str.replace(/[.,?!]{1,}/g, ' ').trim().split(/[\s]{1,}/);
    return arr.reduce((a, x) => a = (a > x.length) ? a : x.length, 0);
}

// console.log(findTheLongestWord('Один, Два, Три, Четыре'));
// console.log(findTheLongestWord('the longest word...?'));

// 5. Функция поиска всех слов в строке, начинающихся с определенной буквы(любого регистра)

const findWords = (str, x) => {
    const arr = str.replace(/[.,?!]{1,}/g, ' ').trim().split(/[\s]{1,}/);
    return arr.filter(y => y[0].toLowerCase().match(x.toLowerCase()));
}

// console.log(findWords('арбуз Дыня Ананас яблоко Огурец Авокадо', 'А'));
// console.log(findWords('арбуз Дыня Ананас яблоко Огурец Авокадо', 'О'));