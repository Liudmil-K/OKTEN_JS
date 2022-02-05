//0) Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]:

let mainArray = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

console.log('перебрати його циклом while');
let j = 0;
while (j < mainArray.length) {
    let mainArr = mainArray[j];
    console.log(mainArray[j]);
    j++;
}

// 2. перебрати його циклом for

console.log('перебрати його циклом for');
for (let i = 0; i < mainArray.length; i++) {
    console.log(mainArray[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

console.log('while з непарним індексом');
let i = 1;
while (i < mainArray.length) {
    let mainArr = mainArray[i];
    console.log(mainArray[i]);
    i+=2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

console.log('for з непарним індексом');
for (let i = 1; i < mainArray.length; i+=2) {
    console.log(mainArray[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log('while парні значення');
let x = 0;
while (x < mainArray.length) {
    if (mainArray[x] % 2 === 0) {
        let mainArr = mainArray[x];
        console.log(mainArray[x]);
    }
        x++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

console.log('for парні значення');
for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] % 2 === 0) {
        console.log(mainArray[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

// console.log('for парні значення');
// for (let i = 0; i < mainArray.length; i++) {
//     if (mainArray[i] % 2 === 0) {
//         console.log(mainArray[i]);
//     }
// }


// //0) Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]:
//
// let mainArray = [2,17,13,6,22,31,45,66,100,-18];
//
// // 1. перебрати його циклом while
//
// console.log('перебрати його циклом while');
// let j = 0;
// while (j < mainArray.length) {
//     let mainArr = mainArray[j];
//     console.log(mainArray[j]);
//     j++;
// }
//
// // 2. перебрати його циклом for
//
// console.log('перебрати його циклом for');
// for (let i = 0; i < mainArray.length; i++) {
//     console.log(mainArray[i]);
// }
//
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// document.write(`<h2>while з непарним індексом</h2>`);
// let i = 1;
// while (i < mainArray.length) {
//     let mainArr = mainArray[i];
//     document.write(`<p>${mainArray[i]}</p>`);
//     i+=2;
// }
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// document.write(`<h2>for з непарним індексом</h2>`);
// for (let i = 1; i < mainArray.length; i+=2) {
//     document.write(`<p>${mainArray[i]}</p>`);
// }
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// document.write(`<h2>while парні значення</h2>`);
// let x = 0;
// while (x < mainArray.length) {
//     if (mainArray[x] % 2 === 0) {
//         let mainArr = mainArray[x];
//         document.write(`<p>${mainArray[x]}</p>`);
//     }
//     x++;
// }
//
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// document.write(`<h2>for з непарним індексом</h2>`);
// for (let i = 1; i < mainArray.length; i+=2) {
//     document.write(`<p>${mainArray[i]}</p>`);
// }

