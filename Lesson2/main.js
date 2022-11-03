// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [10, 'value', 0, 123, true, 'hello', 'world', 345, false, 40];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'alchemist', pageCount: 205, genre: 'novel'};
let book2 = {title: 'fifth mountain', pageCount: 253, genre: 'novel'};
let book3 = {title: 'kaydashev family', pageCount: 232, genre: 'story'};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {title: 'alchemist', pageCount: 205, genre: 'novel', authors: ['Paulo Coelho', 75]};
let book5 = {title: 'fifth mountain', pageCount: 253, genre: 'novel', authors: ['Paulo Coelho', 75]};
let book6 = {title: 'kaydashev family', pageCount: 232, genre: 'story', authors: ['Nechuy-Levytskyi', 79]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vasya', username: 'V', password: '123'},
    {name: 'Petya', username: 'P', password: 'qwe'},
    {name: 'Sofiya', username: 'S', password: '123qwe'},
    {name: 'Dima', username: 'D', password: '321'},
    {name: 'Lesya', username: 'L', password: '321dsa'},
    {name: 'Anna', username: 'A', password: 'asd'},
    {name: 'Maria', username: 'M', password: 'dsaasd'},
    {name: 'Kolya', username: 'K', password: '123dsaasd'},
    {name: 'Olya', username: 'O', password: '432'},
    {name: 'Sasha', username: 'S', password: '3434'}];
console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3]['password']);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6].password);
console.log(users[7]['password']);
console.log(users[8].password);
console.log(users[9]['password']);
