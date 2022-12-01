// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let substrings = [];
    for (let i = 0; i < str.length; i = i + n) {
        substrings.push(str.substring(i, i + n))
    }
    return substrings
}
document.writeln(cutString('насолодження', 3));
document.writeln(`<p></p>`);
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => {
    return str.substring(0, length)
}
let str = 'кожен мисливець бажає знати'
document.writeln(delete_characters(str, 6))
document.writeln(`<p></p>`);
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    let str1 = str.toUpperCase()
    return str1.replaceAll(' ', '-')
}
let str1 = "HTML JavaScript PHP";
document.writeln(insert_dash(str1));
document.writeln(`<p></p>`);
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let toUp = (line) => {
    let firsLetter = line.charAt(0)
    let firstLetterUp = firsLetter.toUpperCase()
    return line.replace(firsLetter, firstLetterUp)
}
let lowLine = 'напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.'
document.write(toUp(lowLine))
document.writeln(`<p></p>`);
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
validName = (n) => {
    return n
        .replace('..', ' ')
        .replace('---', ' ')
        .replace('__', ' ')

}
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
document.writeln(validName(n1), ',')
document.writeln(validName(n2), ',')
document.writeln(validName(n3))
document.writeln(`<p></p>`);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random_arr = function () {
    let arr1 = [];
    for (let i = 0; i < 100; i++) {
        arr1[arr1.length] = Math.round(Math.random() * 100)
    }
    return arr1
};
let arr3 = random_arr()
console.log(arr3)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = random_arr()
let sort = arr.sort((a1, a2) => {
    return a1 - a2
})
console.log(sort)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let couples = sort.filter(value => (value % 2 === 0) && (value % 10 !== 0))
console.log(couples);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let line = 'напишіть функцію яка повертає рядок'

// function lineFirstUp(line) {
//     let s = 0;
//     let Up = 0;
//     line.trim()
//     for (let i = 0; i < line.length; i++) {
//         if (line[i] === ' ') {
//             s += 1
//         }
//         if ((line[i] === line[i].toUpperCase()) && (line[i] !== ' ')) {
//             Up += 1
//         }
//     }
//     if (s === Up - 1)
//         return line;
//     else return 'не кожне слово  починається з великої літери'
// }
line.split(" ").map(value => value[0].toUpperCase() + value.slice(1,value.length)).join(" ");
console.log(line.split(" ").map(value => value[0].toUpperCase() + value.slice(1,value.length)).join(" "))
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let email1 = 'someemail@gmail.com'
let email2 = 'someeMAIL@gmail.com'
let email3 = 'someeMAIL@i.ua'
let email4 = 'some.email@gmail.com'

function valid(email) {
    let ind = email.indexOf('@')
    let point = email.indexOf('.', ind)
    if ((ind > 0) && (((point - ind) > 2)))
        return 'true'
    else
        return 'false'
}

console.log(valid(email4));

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortModules = coursesArray.sort((c1, c2) => {
    return c2.modules.length - c1.modules.length
})
console.log(sortModules)
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str, stringsearch) => {
    let symb = stringsearch;
    let k = 0;
    for (const symbol of str) {
        if (symbol === symb)
            k += 1;
    }
    return k
}
str2 = "Астрономия это наука о небесных объектах";
document.writeln(count(str2, 'о'))
document.writeln(`<p></p>`);
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cut_String = (str, n) => {
    let spase = 0;
    line.trim();
    for (let i = 0; i < str.length; i++) {
        let lastWord = i;
        if (str[i] === ' ')
            spase += 1;
        if (spase === n) {
            return str.substring(0, lastWord)
        }
    }
}
let str3 = "Сила тяжести приложена к центру масс тела";
document.writeln(cut_String(str3, 5))
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'Alchemist',
        pageCount: 205,
        authors: ['Paulo Coelho'],
        genre: ['novel', 'adventures', 'novel']
    },
    {
        title: 'Fifth mountain',
        pageCount: 253,
        authors: ['Paulo Coelho'],
        genre: ['novel', 'story']
    },
    {
        title: 'Kaydashev family',
        pageCount: 232,
        authors: ['Nechuy-Levytskyi'],
        genre: ['novel', 'story']
    },
    {
        title: 'George code',
        pageCount: 220,
        authors: ['Lucy Hawking', 'Stephen Hawking'],
        genre: ['adventures']
    }
];
// -знайти наібльшу книжку.
let booksTitle = books.sort((book1, book2) => {
    return book2.title.length - book1.title.length
})
for (let i = 0; i < booksTitle.length; i++) {
    if (booksTitle[i].title.length === booksTitle[0].title.length)
        console.log(booksTitle[i].title)
}
// - знайти книжку/ки з найбільшою кількістю жанрів

let booksMaxGenre = books.sort((book1, book2) => {
    return book2.genre.length - book1.genre.length
})
for (let i = 0; i < booksMaxGenre.length; i++) {
    if (booksMaxGenre[i].title.length === booksMaxGenre[0].title.length)
        console.log(booksMaxGenre[i].title)
}
// - знайти книжку/ки які писали 2 автори
let authors = books.filter((value) => {
    return value.authors.length === 2
})
for (let i = 0; i < authors.length; i++) {
    if (authors[i].title.length === authors[0].title.length)
        console.log(authors[i].title)
}
// - знайти книжку/ки які писав 1 автор
let author = books.filter((value) => {
    return value.authors.length === 1
})
for (let i = 0; i < author.length; i++) {
    console.log(author[i].title)
}

// - вісортувати книжки по кількості сторінок по зростанню
let booksSort = books.sort((book1, book2) => {
    return book2.pageCount - book1.pageCount
})
console.log(booksSort)

