// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_rectangle(a, b) {
    return a*b;
}
let area_ret=area_rectangle(10, 20)
console.log('area_rectangle=', area_ret);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_circle(r) {
    return Math.PI * r ** 2;
}
let area_cir=area_circle(5)
console.log('area_circle=', area_cir);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_cylinder(h, r) {
    return 2 * Math.PI * r * (r + h);
}

let area_cyl = area_cylinder(5, 6);
console.log('area_cylinder=', area_cyl);

// - створити функцію яка приймає масив та виводить кожен його елемент
function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
printerArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function printText(text) {
    return (`<p>${text}</p>`);
}

let text = printText('Lorem ipsum dolor sit amet.')
console.log(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function print_Ul_3li(text) {
    return (`<ul>
             <li>${text}</li>
             <li>${text}</li>
             <li>${text}</li>
            </ul>`);
}

let Ul_3li_text = print_Ul_3li('Lorem ipsum dolor sit amet.')
document.write(Ul_3li_text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function print_Ul_nli(text, li) {
    document.write('<ul>')
    for (let i = 0; i < `${li}`; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

print_Ul_nli('Lorem ipsum dolor sit amet.', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function printerArrayLi(array) {
    document.write('<ul>')
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>')
}

let listOfItems = ['html', 21, true, 'mysql', 234, 'react', false, 'node.js'];
printerArrayLi(listOfItems)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function printerArrayObject(array) {
    document.write('<div class="container">')
    for (const arrayElement of array) {
        document.write('<div>')
        for (const item in arrayElement) {
            document.write(`${item}: ${arrayElement[item]}  `);
        }
        document.write('</div>')
    }
    document.write('</div>')
}

let users1 = [
    {id: 0, name: 'vasya', age: 31},
    {id: 1, name: 'petya', age: 30},
    {id: 2, name: 'kolya', age: 29},
    {id: 3, name: 'olya', age: 28},
    {id: 4, name: 'max', age: 30},
    {id: 5, name: 'anya', age: 31},
    {id: 6, name: 'oleg', age: 28},
    {id: 7, name: 'andrey', age: 29},
    {id: 8, name: 'masha', age: 30},
    {id: 9, name: 'olya', age: 31},
    {id: 10, name: 'max', age: 31}
];
printerArrayObject(users1);

// - створити функцію яка повертає найменьше число з масиву
function minArray(array) {
    let min = array[0];
    for (const item of array) {
        if (item<min)
            min=item
            }
    return min
}
let arr2 = [2, 4, 6, 8, 9, 12, -1, 67];
let a = minArray(arr2);
console.log(a);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function summArray(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}
arr2 = [2, 4, 6, 8, 9, 12, -1, 67];
let s = summArray(arr2);
console.log(s);