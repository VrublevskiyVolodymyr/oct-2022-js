// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let arr = [12, 23, 34, 45, 56, 'qwe', 'asd', 'ghj', 'dtd', 'vbn', 'uwe', 345, false, true, 34];

// - та вивести його в консоль
console.log('// - створити масив та вивести його в консоль');

console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консол
console.log('// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль');

let arr1 = [];
arr1[0] = 456;
arr1[1] = 345;
arr1[2] = 32;
arr1[3] = 'saqw';
arr1[4] = false;
arr1[5] = 'hjhd';
arr1[arr1.length] = 'asd';
arr1[arr1.length] = 78;
console.log(arr1);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
console.log('// 1. перебрати його циклом while');

let i = 0;
while (i < arr2.length) {
    console.log(arr2[i]);
    i++;
}

//     2. перебрати його циклом for
console.log('// 2. перебрати його циклом for');

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('//3. перебрати циклом while та вивести  числа тільки з непарним індексом');

i = 0
while (i < arr2.length) {
    if (i % 2)
        console.log(arr2[i]);
    i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('// 4. перебрати циклом for та вивести  числа тільки з непарним індексом');

for (let i = 0; i < arr2.length; i++) {
    if (i % 2)
        console.log(arr2[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('// 5. перебрати циклом while та вивести  числа тільки парні  значення');

i = 0;
while (i < arr2.length) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('// 6. перебрати циклом for та вивести  числа тільки парні  значення');

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten"
console.log('// 7. замінити кожне число кратне 3 на слово "okten"');

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 === 0)
        arr2[i] = "okten"
    console.log(arr2[i]);
}

// 8. вивести масив в зворотньому порядку.
console.log('// 8. вивести масив в зворотньому порядку.');

arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = arr2.length - 1;
while (i >= 0) {
    console.log(arr2[i]);
    i--;
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log('// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)');

// 1. перебрати його циклом while, але в зворотньому циклі(с заду на перед)
console.log('// 1. перебрати його циклом while, але в зворотньому циклі(с заду на перед');

i = arr2.length - 1;
while (i >= 0) {
    console.log(arr2[i]);
    i--;
}

//     2. перебрати його циклом for, але в зворотньому циклі (с заду на перед), але в зворотньому циклі (с заду на перед)
console.log('// 2. перебрати його циклом for, але в зворотньому циклі (с заду на перед)');

for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)
console.log('//3. перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)');

i = arr2.length - 1;
while (i >= 0) {
    if (i % 2)
        console.log(arr2[i]);
    i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)
console.log('// 4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)');

for (let i = arr2.length - 1; i >= 0; i--) {
    if (i % 2)
        console.log(arr2[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)
console.log('// 5. перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)');

i = arr2.length - 1;
while (i >= 0) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)
console.log('// 6. перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)');

for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] % 2 === 0)
        console.log(arr2[i]);
}

// 7. замінити кожне число кратне 3 на слово "okten", але в зворотньому циклі (с заду на перед)
console.log('// 7. замінити кожне число кратне 3 на слово "okten", але в зворотньому циклі (с заду на перед)');

for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] % 3 === 0)
        arr2[i] = "okten"
    console.log(arr2[i]);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');

let arr3 = [12, 23, 34, 45, 34, 56, 67, 78, 89, 980];
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');

let arr4 = ['sdfsdf', 'ftyh', 'fghj', 'vbnm', 'hjk', 'hjk', 'fgh', 'gh', 'jk', 'jkl'];
i = 0;
while (i < arr4.length) {
    console.log(arr4[i]);
    i++;
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');

let arr5 = [false, 0, '34', 'cvbbcv', true, 56, 'vbn', 'cvb', 'vcb', 980];
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');

let arr6 = [324, 'ftyh', false, 345, 'hjk', true, 'fgh', 54, 'jk', 567];
i = 0;
while (i < arr6.length) {
    if (typeof (arr6[i]) === "boolean") {
        console.log(arr6[i]);
    }
    i++;
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи');

i = 0;
while (i < arr6.length) {
    if (typeof (arr6[i]) === "number") {
        console.log(arr6[i]);
    }
    i++;
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи');

i = 0;
while (i < arr6.length) {
    if (typeof (arr6[i]) === "string") {
        console.log(arr6[i]);
    }
    i++;
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log('// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.');

let arr7 = [];
arr7[0] = 1;
arr7[1] = 'dfdfg';
arr7[2] = 435;
arr7[3] = 'dfdfg';
arr7[4] = false;
arr7[5] = 467;
arr7[6] = 'dfdfg';
arr7[7] = 879;
arr7[8] = true;
arr7[9] = 90;
for (i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.writeln('Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку');
document.writeln('<p>');

for (i = 1; i <= 10; i = i + 1) {
    console.log(i);
    document.write(i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
document.writeln('<p>');
document.writeln('Створити цикл for на 100 ітерацій з кроком 1.Вивести поточний номер кроку.');
document.writeln('<p>');

for (i = 1; i <= 100; i = i + 1) {
    console.log(i);
    document.write(i + ' ');
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
document.writeln('<p>');
document.writeln('Створити цикл for на 100 ітерацій з кроком 2.Вивести поточний номер кроку');
document.writeln('<p>');

for (i = 1; i <= 100; i = i + 2) {
    console.log(i);
    document.write(i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');

document.writeln('<p>');
document.writeln('Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.');
document.writeln('<p>');

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i + ' ');
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
document.writeln('<p>');
document.writeln('Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки');
document.writeln('<p>');

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2) {
        console.log(i);
        document.write(i + ' ');
    }
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
console.log('// стоврити масив книжок (назва, кількість сторінок, автори , жанри).-знайти наібльшу книжку. ');

let books = [
    {
        title: 'alchemist',
        pageCount: 205,
        authors: ['Paulo Coelho'],
        genre: ['novel', 'adventures', 'novel']
    },
    {
        title: 'fifth mountain',
        pageCount: 253,
        authors: ['Paulo Coelho'],
        genre: ['novel', 'story']
    },
    {
        title: 'kaydashev family',
        pageCount: 232,
        authors: ['Nechuy-Levytskyi'],
        genre: ['novel', 'story', 'adventures']
    },
    {
        title: 'George code',
        pageCount: 220,
        authors: ['Lucy Hawking', 'Stephen Hawking'],
        genre: ['adventures']
    }
];
let max_pageCount = 0;
let max_book = '0';
for (let i = 0; i < books.length; i++) {
    if (max_pageCount < books[i].pageCount) {
        max_pageCount = books[i].pageCount;
        max_book = books[i].title;
    }
}
console.log('max_book -', max_book);

// // - знайти книжку/ки з найбільшою кількістю жанрів
console.log('// - знайти книжку/ки з найбільшою кількістю жанрів');

let max_book_genre = [];
let max_genre = 0;
for (i = 0; i < books.length; i++) {
    if (max_genre < books[i].genre.length) {
        max_genre = books[i].genre.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (max_genre === books[i].genre.length) {
        max_book_genre[max_book_genre.length] = books[i].title;
    }
}
console.log('max_book_genre -', max_book_genre);

// - знайти книжку/ки з найдовшою назвою
console.log('// - знайти книжку/ки з найдовшою назвою');

let max_book_title = [];
let max_title = 0;
for (i = 0; i < books.length; i++) {
    if (max_title < books[i].title.length) {
        max_title = books[i].title.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (max_title === books[i].title.length) {
        max_book_title[max_book_title.length] = books[i].title;
    }
}
console.log(' max_book_title -', max_book_title);


// - знайти книжку/ки які писали 2 автори
console.log('// - знайти книжку/ки які писали 2 автори');

let max_book_authors = [];
let max_authors = 0;
for (i = 0; i < books.length; i++) {
    if (max_authors < books[i].authors.length) {
        max_authors = books[i].authors.length;
    }
}
for (let i = 0; i < books.length; i++) {
    if (max_authors === books[i].authors.length) {
        max_book_authors[max_book_authors.length] = books[i].title;
    }
}
console.log('max_book_authors -', max_book_authors);

// - знайти книжку/ки які писав 1 автор
console.log('// - знайти книжку/ки які писав 1 автор');

let min_book_authors = [];
let min_authors = 1;
for (let i = 0; i < books.length; i++) {
    if (min_authors === books[i].authors.length) {
        min_book_authors[min_book_authors.length] = books[i].title;
    }
}
console.log('min_book_authors -', min_book_authors);