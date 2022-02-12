// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'okten hello !';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
    console.log(`Довжина стрігового значення:
        "${str1}" - ${str1.length} символів,
        "${str2}" - ${str2.length} символів,
        "${str3}" - ${str3.length} символів.`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strUp1 = str1.toUpperCase();
let strUp2 = str2.toUpperCase();
let strUp3 = str3.toUpperCase();

    console.log(`Змінимо всі літери на великий регістр:
        "${str1}" - ${strUp1},
        "${str2}" - ${strUp2},
        "${str3}" - ${strUp3}.`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(`Змінимо всі літери на нижній регістр:
        "${strUp1}" - ${strUp1.toLowerCase()},
        "${strUp1}" - ${strUp1.toLowerCase()},
        "${strUp1}" - ${strUp1.toLowerCase()}.`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.