// Функции обработки строк

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// Функция подсчёта количества слов(без букв и символов) в строке 

const wordCountFunction = (str) => {
    let lastLetter, isLetter, wordsCount = 0;
    for (let i = 0; i < str.length; i++) {
        lastLetter = isLetter;
        isLetter = (str[i].match(/[А-Я,а-я,A-Z,a-z]/gi)) ? true : false;
        wordsCount = (!lastLetter && isLetter) ? ++wordsCount : wordsCount;
    }
    console.log(`В строке ${wordsCount} слов`);
}

// wordCountFunction(" В этой строке 10 слов, несмотря на знаки и  ЛИШНИЕ  пробелы! ");
// wordCountFunction("You can also use latin alphabet(6).");

// Функция подсчёта прописных букв в строке

const upperCaseCheckFunction = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum = (str[i] === str[i].toUpperCase() && str[i].match(/[А-Я,A-Z]/gi)) ? ++sum : sum;
    }
    console.log(`В строке ${sum} прописных букв`);
}

// upperCaseCheckFunction('Подсчет Прописных Букв В Строке(5)');
// upperCaseCheckFunction(' AAABBBCCC(9)');

// Функция удаления повторяющихся символов;

const deleteDuplicateFuntion = (str) => {
    let chars = [], duplicateCount = 0;
    for (let i = 0; i < str.length; i++) {
        for (let char of chars) duplicateCount = (str[i] == char) ? ++duplicateCount : duplicateCount;
        if (duplicateCount > 0) {
            str = str.slice(0, i) + ' ' + str.slice(i + 1);
            duplicateCount = 0;
        } else chars.push(str[i]);
    }
    str = str.replace(/ /g, '');
    console.log(`Обновленная строка: ${str}`);
}

// deleteDuplicateFuntion("aaabbbcccabcAAA");
// deleteDuplicateFuntion("AaAaAa00bcDE11");

// Функция поиска самого длинного слова(первого) и подсчета количества его символов

const findTheLongestWord = (str) => {
    let isLetter, word, longestWord = '', maxCount = 0, lettersCount = 0;
    for (let i = 0; i < str.length; i++) {
        isLetter = (str[i].match(/[А-Я,а-я,A-Z,a-z]/gi)) ? true : false;
        lettersCount = isLetter ? ++lettersCount : 0;
        word = isLetter ? word + str[i] : '';
        maxCount = lettersCount > maxCount ? lettersCount : maxCount;
        if (word.length == maxCount && longestWord.length < word.length) longestWord = word;
    }
    console.log(`Слово: ${longestWord}, Количество символов: ${maxCount}`);
}

// findTheLongestWord('Один, Два, Три, Четыре');
// findTheLongestWord('What is the longest word here?');

// Функция поиска всех слов в строке, начинающихся с определенной буквы(любого регистра)

const findWords = (str, x) => {
    let isLetter = false, lastLetter, wordX = '', wordXDetected;
    for (let i = 0; i < str.length; i++) {
        lastLetter = isLetter;
        isLetter = (str[i].match(/[А-Я,а-я,A-Z,a-z]/gi)) ? true : false;
        wordXDetected = !isLetter ? false : wordXDetected;                                                      // False, если не буква
        wordXDetected = (str[i].toUpperCase() === x && lastLetter == false && isLetter) ? true : wordXDetected; // True, если первая буква совпала с искомой
        wordX = isLetter && wordXDetected ? wordX + str[i] : wordX;
        if ((isLetter == false && wordX !== '') || (wordX !== '' && i == str.length - 1)) {
            console.log(wordX);
            wordX = '';
        }
    }
}

// findWords('арбуз Дыня Ананас яблоко Огурец Авокадо', 'А');
// findWords('арбуз Дыня Ананас яблоко Огурец Авокадо', 'О');