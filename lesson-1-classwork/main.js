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
    console.log(array + ' => сума масиву = ' +result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
    let book = [
        {
            title: 'Книга JavaScript. Полное руководство. 7-е издание',
            price: 722,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
        },
        ];

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

// 5. Напишіть код, який вираховує площ
// прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC)
// та діаметром основи 4м (dC), результат помістіть у змінну v.

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
// (число, ступінь) або оператор зведення в ступінь **).

