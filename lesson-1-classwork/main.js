//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
    let array = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];
    result =
        array[0]+
        array[1]+
        array[2]+
        array[3]+
        array[4]+
        array[5]+
        array[6]+
        array[7]+
        array[8]+
        array[9];
    console.log(array + ' => сума масиву = ' +result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
    let book1 = [
        {
            title: 'Книга JavaScript. Полное руководство. 7-е издание',
            page: 722,
            genre: 'Програмування'
        },
        {
            title: 'Книга Мистецтво говорити. Таємниці ефективного спілкування',
            price: 304,
            genre: 'Психологія'
        },
        {
            title: 'Книга Усе побачиш, коли пригальмуєш. Правила виживання у метушливому світі',
            price: 232,
            genre: 'Психологія'
        },
        ];

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book = [
    {
        title: "Книга JavaScript. Полное руководство. 7-е издание",
        page: 722,
        genre: 'Програмування',
        autor: 'Девід Фленаган'
    },
    {
        title: 'Книга Мистецтво говорити. Таємниці ефективного спілкування',
        page: 304,
        genre: 'Психологія',
        autor: 'Джеймс Борг'
    },
    {
        title: 'Книга Усе побачиш, коли пригальмуєш. Правила виживання у метушливому світі',
        page: 232,
        genre: 'Психологія',
        autor: 'Гемін Сунім'
    },
];

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт
    for (const books of book) {
        document.write(
            `<h2>${books.title}</h2>
                <p>Кількість сторінок: ${books.page}
                <br>Жанр: ${books.genre}
                <br>Автор: ${books.autor}</p>`)
}

// 5. Напишіть код, який вираховує площ
// прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
    let height = 23;
    let width = 10;
    let s = height * width;
    console.log ('Площа прямокутника - ' + s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC)
// та діаметром основи 4м (dC), результат помістіть у змінну v.
    const pi = 3.1415;
    let heightC = 10;
    let dC = 4;
    let v = (pi * heightC * dC);
    console.log ('Об\'єм циліндра - ' + v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
// (число, ступінь) або оператор зведення в ступінь **).
    let n = 3;
    let m = 4;
    let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
    console.log ('Гіпоненуза трикутника - ' + k);