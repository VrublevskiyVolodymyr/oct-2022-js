// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function min_max(...n) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < n.length; i++)
    {
        if (n[i]<min) min=n[i]
        if (n[i]>max) max=n[i]
    }
    console.log(max);
    return min;
}
let min=min_max(2, 3, 6, 8, 9, 5, 8, 6, 3, 55, 88, 888);
console.log(min);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let random_arr = function (lim) {
    let arr1 = [];
    for (let i = 0; i < lim; i++) {
        arr1[arr1.length] = Math.round(Math.random()*100)
    }
    return arr1
};
let arr3=random_arr(10)
console.log(arr3)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function ins(arr){
    let arr1 = [];
    for (let i = arr.length-1; i >=0 ; i--) {
          arr1[arr1.length]=arr[i];
    }
    // console.log(arr1)
    return arr1
}
let arr=[5, 6, 1, 2, 4, 5, 8, 7];
let s=ins(arr);
console.log(s);
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
const foo = (...arg) => arg.length === 2 ? arg[0] + arg[1] : arg[0];
let foo1 =foo(4,5) ;
console.log(foo1);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function res(arr1, arr2) {
    max_length=0;
    let arr3 = [];
    if (arr1.length < arr2.length) max_length = arr2.length; else max_length=arr1.length;
    for (let i = 0; i < max_length; i++)
         {
               arr3[arr3.length]=(arr1[i]||0)+(arr2[i]||0);
    }
    console.log(arr3);
}
let arr1=[2,6,5,4,5,6,5,8,9]
console.log(arr);
console.log(arr1);
res(arr,arr1);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:arr2=[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
arr2=[{name: 'Dima', age: 13}, {model: 'Camry'}];
function keyobject(arr){
    arr1 = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
          arr1[arr1.length]=arrElementKey
        }
    }
    return arr1
}

let keyArr = keyobject(arr2);
console.log(keyArr);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
arr2=[{name: 'Dima', age: 13}, {model: 'Camry'}];
function namekeyobgect(arr){
    arr1 = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            arr1[arr1.length]=arrElement[arrElementKey]
        }
    }
    return arr1
}

let namekeyArr = namekeyobgect(arr2);
console.log(namekeyArr);