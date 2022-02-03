// 1) Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

    let time = +prompt('Введіть число від 0 до 59', 0);
// if (time >= 0 && time <= 14) {

    if (time >= 0  && time <= 14) {
        alert('Вказані ${time} хвилин відносяться до ПЕРШОЇ частини години.');
    }else if (time >= 15  && time <= 29){
        alert('Вказані ${time} хвилин відносяться до ДРУГОЇ частини години.');
    }else if (time >= 30  && time <= 44){
        alert('Вказані ${time} хвилин відносяться до ТРЕТЬОЇ частини години.');
    }else if (time >= 45  && time <= 59) {
        alert('Вказані ${time} хвилин відносяться до ЧЕТВЕРТОЇ частини години.');
    }else {alert('Вказано число не відповідає діапазону 0-59.');}

// 2) У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

    let day = Math.round((Math.random() * 32) + 1);
    if (day >=1 && day <= 10) {console.log(day + '-й день відноситься до ПЕРШОЇ декади місяця');}
        else if (day >=11 && day <= 20) {console.log(day + '-й день відноситься до ДРУГОЇ декади місяця');}
        else {console.log(day + '-й день відноситься до ТРЕТЬОЇ декади місяця');}

// 3) У нас є змінна test, якщо не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false.
// Напишіть два варіанти скрипта - з коротким записом(тернаркою)

    let test = true;
    let testTer = (test !== true) ? 'Вірно' : 'Неправильно';
    console.log (testTer);

// 4) Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let a = +prompt('Введіть будь-яке число від -10 до 10', 0);
    let aTer = (a === 0) ? 'Невірно' : 'Вірно';
    alert('Вказане число ${a} НЕдорівнює "нулю" - ${aTer}.');

// 5) Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа що заплановано на цей день.

    let days = +prompt(`Введіть порядковий номер дня тижня від 1 до 7`);
    switch (days) {
        case 1:
            document.write("<h2>Понеділок</h2><p>На понеділок запланована на 20.00 лекція по JS</p>");
            break;
        case 2:
            document.write("<h2>Вівторок</h2><p>В вівторок не забути виконати класну роботу по JS</p>");
            break;
        case 3:
            document.write("<h2>Середа</h2><p>На середу запланована на 20.00 лекція по JS</p>");
            break;
        case 4:
            document.write("<h2>Четверг</h2><p>В четверг не забути виконати класну роботу по JS</p>");
            break;
        case 5:
            document.write("<h2>П'ятниця</h2><p>На п'ятницю запланована на 20.00 лекція по JS</p>");
            break;
        case 6:
            document.write("<h2>Субота</h2><p>На суботу запланована конферанція з англійської мови</p>");
            break;
        case 7:
            document.write("<h2>Неділя</h2><p>В неділю слід відпочивати</p>");
            break;
        default:
            document.write("<h2>Помилка!</h2><p>Слід ввести порядковий номер дня тижня від 1 до 7!</p>");
    }


// 6) Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

    let year = +prompt('Введіть рік від 1900 до 2100', 2022);
    if (0 === (year % 4)) {alert('Вказаний ${year} рік - високосний!');}
    else {alert('Вказаний ${year} рік НЕ високосний.');}

// 7) Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“ Якщо користувач вводить «ECMAScript»,
// то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

    let script = prompt('Яка «офіційна» назва JavaScript?', 'Script');
    if (script === 'ECMAScript') {alert('Правильно!');}
    else {alert('Не знаєте? ECMAScript!');}