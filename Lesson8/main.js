// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'Vasya', 'Petrov', 'kjkj@i.ua', '0987654635')
console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let name = ['vasya', 'petya', 'kolya', 'olya', 'max', 'anya', 'oleg', 'andrey', 'masha', 'max'];
let surname = ['ivanov', 'petrov', 'sydorov', 'petrenko', 'danyluk', 'petrash', 'klymenok', 'andrushok', 'petryk', 'danylko'];
let email = ['sdf@gmail.com', 'sd@gmail.com', 'll@i.ua', 'kjl@gmail.com', 'yt@gi.ua', 'bnm@gmail.com', 'hj@i.ua', 'df@gmail.com', 'hyj@i.ua', 'gh@gmail.com',]
let phone = ['0973467594', '0975965688', '0965678967', '0978960432', '0976537890', '0978923433', '0974455667', '0977788990', '0979988776', '0976655443',];

function users() {
    let users = [];
    for (let i = 0; i < 10; i++) {
        users.push(new User(`${i + 1}`, `${name[i]}`, `${name[i]}`, `${email[i]}`, `${phone[i]}`))
    }
    return users
}

let user = users()
console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = user.filter(value => value.id % 2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = user.sort((u1, u2) => {
    return u1.id - u2.id;
})
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let order = [['apple', 'lemon', 'banana'], ['tea', 'milk', 'java', 'banana', 'lime', 'sugar'], ['kiwi', 'lime', 'apricot'], ['peach', 'pear'], ['milk', 'apricot', 'banana', 'fig', 'lime', 'java', 'date', 'pear', 'sugar'], ['batter', 'bred', 'tomato', 'grape', 'fig', 'pear'], ['grape', 'fig'], ['melon', 'date', 'chery'], ['pear'], ['sugar', 'lemon']]

function clients() {
    let clients = [];
    for (let i = 0; i < 10; i++) {
        clients.push(new Client(`${i + 1}`, `${name[i]}`, `${name[i]}`, `${email[i]}`, `${phone[i]}`, `${order[i]}`))
    }
    return clients
}

let client = clients()
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = client.sort((or1, or2) => {
    if (or1.order.length > or2.order.length) {
        return 1
    }
    if (or1.order.length < or2.order.length) {
        return -1
    }
    if (or1.order.length === or2.order.length) {
        return 0
    }
})
console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    return {...this}
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed
    return {...this}
}
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.year = newValue
    return {...this}
}
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    return {...this, driver}
}


let driver = {
    name: 'ivan',
    surname: 'semeniv',
    age: 43
}
let car = new Car("leone", "subaru", 1998, 250, 2);
console.log(car);
car.drive();
console.log(car.info());
console.log(car.increaseMaxSpeed(5));
console.log(car.changeYear(2005));
console.log(car.addDriver(driver));
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        return {...this}
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
       return {...this}
    }

    changeYear(newValue) {
        this.year = newValue
        return {...this}
    }

    addDriver(driver) {
        return {...this, driver}
    }
}

let car1 = new Car1("leone", "subaru", 1998, 250, 2)
console.log(car1);
car1.drive();
console.log(car1.info());
console.log(car1.increaseMaxSpeed(5));
console.log(car1.changeYear(2005));
console.log(car1.addDriver(driver));


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('anna', 30, 35);
let cinderella2 = new Cinderella('alina', 20, 36);
let cinderella3 = new Cinderella('olya', 21, 38);
let cinderella4 = new Cinderella('inna', 22, 35);
let cinderella5 = new Cinderella('nina', 23, 36);
let cinderella6 = new Cinderella('lida', 43, 37);
let cinderella7 = new Cinderella('nadya', 25, 38);
let cinderella8 = new Cinderella('oksana', 26, 39);
let cinderella9 = new Cinderella('mila', 27, 35);
let cinderella10 = new Cinderella('lena', 28, 36);
let cinderellas = []
cinderellas.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10)
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {
    constructor(name, age, footSize) {
        super(name, age, footSize);
    }
}

let prince = new Prince('volodya', 43, 37)
console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderellasElement of cinderellas) {
    if (cinderellasElement.footSize === prince.footSize) {
        console.log(cinderellasElement);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderella = cinderellas.find(value => value.footSize === prince.footSize)
console.log(cinderella);