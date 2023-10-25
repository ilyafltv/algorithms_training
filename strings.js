// Функции обработки строк

// Для проверки работоспособности функций раскомментируйте вызов соответствующей функции и запустите файл

// 1. Функция подсчёта количества слов(без цифр, небуквенных символов и пробелов) в строке 

const wordCountFunction = (str) => {
    let lastLetter, isLetter, wordsCount = 0;
    for (let i = 0; i < str.length; i++) {
        lastLetter = isLetter;
        isLetter = (str[i].match(/[А-Я,а-я,A-Z,a-z]/gi)) ? true : false;
        wordsCount = (!lastLetter && isLetter) ? ++wordsCount : wordsCount;
    }
    return wordsCount;
}

// console.log(`В строке ${wordCountFunction(" В этой строке 10 слов, несмотря на знаки и  ЛИШНИЕ  пробелы! ")} слов`);
// console.log(`В строке ${wordCountFunction("You can also use latin alphabet(6).")} слов`);

// 2. Функция подсчёта прописных букв в строке

const upperCaseCheckFunction = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum = (str[i] === str[i].toUpperCase() && str[i].match(/[А-Я,A-Z]/gi)) ? ++sum : sum;
    return sum;
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

// 4. Функция поиска самого длинного слова(первого) и подсчета количества его символов

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

// 5. Функция поиска всех слов в строке, начинающихся с определенной буквы(любого регистра)

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