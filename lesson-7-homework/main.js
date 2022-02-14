// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function Person (id, name, surname, email, phone) {
    this.idPerson = id;
    this.namePerson = name;
    this.surnamePerson = surname;
    this.emailPerson = email;
    this.phonePerson = phone;
}

let User = [
    new Person (1, 'Христина', 'Олива', 'ho@gmail.com', 30951111111),
    new Person (2, 'Ольга', 'Слива', 'os@gmail.com', 30682222222),
    new Person (3, 'Антон', 'Шустак', 'ash@gmail.com', 30673333333),
    new Person (4, 'Сергій', 'Крафт', 'sk@gmail.com', 30734444444),
    new Person (5, 'Мирон', 'Вінський', 'mv@gmail.com', 30665555555),
    new Person (6, 'Людмила', 'Жданова', 'lgd@gmail.com', 30636666666),
    new Person (7, 'Давид', 'Маркович', 'dm@gmail.com', 30687777777),
    new Person (8, 'Олеся', 'Давиденко', 'od@gmail.com', 30988888888),
    new Person (9, 'Дарина', 'Литвинчук', 'uj7@gmail.com', 30689999999),
    new Person (10, 'Олег', 'Стеценко', 'uj7@gmail.com', 30660000000)
];

console.log(arrPerson);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterPerson = User.filter ((item) => {if (item.id % 2 === 0){return item}});

console.log(filterPerson);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)