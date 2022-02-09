// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a, b, c) => {
    let txt = 'Найменьше число';
    document.write (`<div>`);
    if (a < b && a < c) {
        document.write (`${txt} ${a}`);
    } else if (b < a && b < c) {
        document.write (`${txt} ${b}`);
    } else {
        document.write (`${txt} ${c}`);
    }
    document.write (`</div>`);
};

minNumber (36544, 8566, 8032);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
    let txt = 'Найбільше число';
    document.write (`<div>`);
    if (a > b && a > c) {
        document.write (`${txt} ${a}`);
    } else if (b > a && b > c) {
        document.write (`${txt}  ${b}`);
    } else {
        document.write (`${txt}  ${c}`);
    }
    document.write (`</div>`);
};

maxNumber (36544, 8566, 8032);

// - створити функцію яка повертає найбільше число з масиву

function arrayMax (arrMax) {
    let max = arrMax [0];
    for (const num of arrMax) {
        if (num > max) {
            max = num;
        }
    }
    document.write (`<p>Найбільше число массиву <br>${max}</p>`);
}

arrayMax ([100, 43, 542, 75, 765, 952]);

// - створити функцію яка повертає найменьше число з масиву

function arrayMin (arrMin) {
    let min = arrMin [0];
    for (const num of arrMin) {
        if (num < min) {
            min = num;
        }
    }
    document.write (`<p>Найменьше число массиву <br>${min}</p>`);
}

arrayMax ([12, -50, 52, 750, 9]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arraySum (arrSum) {
    let sum = 0;
    for (const num of arrSum) {
            sum += num;
    }
    document.write (`<p>Сума массиву <br>${sum}</p>`);
}

arraySum ([12, 50, 750, 9]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrayMid (arrMid) {
    let sum = 0;
    for (const num of arrMid) {
        sum += num;
    }
    document.write (`<p>Сума массиву <br>${sum / arrMid.length}</p>`);
}

arrayMid ([102, -50, 650, -90]);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function arrayMinMax (minMax) {
    let minArr = minMax [0];
    let maxArr = minMax [0];
    for (const num of minMax) {
        if (num < minArr) {
            minArr = num;
        }
        if (num > maxArr) {
            maxArr = num;
        }
    }
    document.write (`<h2>Найбільше число массиву ${maxArr}</h2>`);
    console.log (minArr);
}

arrayMinMax ([102, -50, 650, -90]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].