// 1) створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRec = (a) => {
    return a * 6;
}
console.log (`Площа прямокутника дорівнює 
            ${areaRec (5)}`);

// 2) створити функцію яка обчислює та повертає площу кола з радіусом r

const pi = 3.1415;
let areaСir = (r) => {
    return pi * Math.pow(r, 2);
}
console.log (`Площа кола дорівнює 
            ${areaRec (pi, 6)}`);

// 3) створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCyl = (r, h) => {
    return 2 * pi * r * h + 2 * pi * Math.pow(r, 2);
}
console.log (`Площа циліндра дорівнює 
            ${areaCyl (5, 10)}`);

// 4) створити функцію яка приймає масив та виводить кожен його елемент

function arrCreator (array) {
    document.write(`<ul>Масив з елементів:`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`);
}
let array = [100, 'дата народження', false, 467, 'продовження'];
arrCreator(array);

// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент
// 6) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// 7) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
