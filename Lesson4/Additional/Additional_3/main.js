// 1. Створити пустий масив та :
let arr=[];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    arr[arr.length] = i * 2;
}
console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    arr[arr.length] = i*2 + 1;
}
console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr[arr.length] = Math.random();
}
console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr[arr.length] = Math.floor(Math.random() * (732 - 8) + 8)
}
console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr.length; i += 3) {
    console.log(arr[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('-------------');
for (let i = 0; i < arr.length; i += 3) {
    if (arr[i]%2===0) {
        console.log(arr[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('-------------');
let arr1 = [];
for (let i = 0; i < arr.length; i += 3) {
    if (arr[i]%2===0) {
        arr1[arr1.length] = arr[i];
    }
}
console.log(arr1);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('-------------');
for (let i = 0; i < arr.length; i += 3) {
    if (arr[i+1]%2===0) {
        console.log(arr[i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('-------------');
let s = 0;
let ser
let arr2 = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < arr2.length; i++) {
    s = s + arr2[i];
}
ser = s / arr2.length;
console.log(ser);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('-------------');
let arr3 = [];
let arr4 = [];
for (let i = 0; i < 20; i++) {
  arr3[arr3.length]=Math.floor(Math.random() * (100 - 5) + 5)*5;
    arr4[arr4.length] = arr3[i];
}
console.log(arr4);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('-------------');
let arr6 = [];
let arr5 = [12, 'sdcas', 324, 45, 'gfhfgh', 67, 34, 45, true, 'sdc', false];
for (let i = 0; i < arr5.length; i++) {
    if ((typeof (arr5[i]) === 'number')) {
        arr6[arr6.length] = arr5[i];
    }
}
console.log(arr6);
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
console.log('-------------');
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    const user = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        const citi = citiesWithId[j];
        if (user.id===citi.user_id) {
            user.address = citi;
            usersWithCities[usersWithCities.length] = user;
        }
    }
}
console.log(usersWithCities)


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('-------------');
let arr7 = [3, 5, 6, 8, 9, 54, 5, 4, 6, 7];
for (const number of arr7) {
    if (number % 2 === 0) {
        console.log(number)
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log('-------------');
let arr8 = [];
for (const number of arr7) {
    arr8[arr8.length] = number;
}
console.log(arr8)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log('-------------');
let word='';
let arr9 = ['a', 'b', 'c'];
for (let i = 0; i < arr9.length; i++) {
    word=word+arr9[i]
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('-------------');
let i = 0;
word='';
while (i < arr9.length) {
    word = word + arr9[i];
    i++;
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('-------------');
word='';
for (const string of arr9) {
    word=word+string
}
console.log(word);