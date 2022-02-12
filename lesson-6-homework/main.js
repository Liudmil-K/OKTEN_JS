// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'okten hello !';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
    console.log(`Довжина стрігового значення:
        "${str1}"=>${str1.length} символів,
        "${str2}"=>${str2.length} символів,
        "${str3}"=>${str3.length} символів.`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strUp1 = str1.toUpperCase();
let strUp2 = str2.toUpperCase();
let strUp3 = str3.toUpperCase();
    console.log(`Змінимо всі літери на великий регістр:
        "${str1}"=>${strUp1},
        "${str2}"=>${strUp2},
        "${str3}"=>${strUp3}.`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    console.log(`Змінимо всі літери на нижній регістр:
        "${strUp1}"=>${strUp1.toLowerCase()},
        "${strUp1}"=>${strUp1.toLowerCase()},
        "${strUp1}"=>${strUp1.toLowerCase()}.`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let strClean = str.trim().replaceAll('  ', '');
    console.log(`Почистемо від зайвих пробілів:
        "${str}"=>${strClean}.`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str, separator) => {
    let arrayStr = str.split(separator);
        console.log(`З стрінги створено массив з ${arrayStr.length} агументів: 
            "${str}" =>
            [${arrayStr.join(', ')}]`);
    for (let i = 0; i < arrayStr.length; i++) {
        console.log (`'${arrayStr[i]}'`);
    }
    return arrayStr;
}

stringToarray('Каждый охотник желает знать', ' ');
document.writeln(`${arrayStr}`);

// function splitString(stringToSplit, separator) {
//     let arrayOfStrings = stringToSplit.split(separator);
//     console.log('Оригинальная строка: "' + stringToSplit + '"');
//     console.log('Разделитель: "' + separator + '"');
//     console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
// }
//
// splitString('Каждый охотник желает знать', ' ');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.