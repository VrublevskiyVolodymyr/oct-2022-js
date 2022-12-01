// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a, b, c) => {
    let m;
    if (a < b && a < c)
        m = a
    else if (b < a && b < c)
        m = b
    else m = c;
    console.log(m);
    return m;
}
min(7, 8, 11);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a, b, c) => {
    let m;
    if (a > b && a > c)
        m = a
    else if (b > a && b > c)
        m = b
    else m = c;
    console.log(m);
    return m;
}
max(8, 7, 6);

// - створити функцію яка повертає найбільше число з масиву
let arrMax = (arr) => {
    let m = arr[0];
    for (const item of arr) {
        if (item > m) {
            m = item;
        }
    }
    return m
}
let arr = [2, 4, 6, 8, 9, 12, -1, 67];
console.log(arrMax(arr))

// - створити функцію яка повертає найменьше число з масиву
let arrMin = (arr) => {
    let m = arr[0];
    for (const item of arr) {
        if (item < m) {
            m = item;
        }
    }
    return m
}
console.log(arrMin(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrSum = (arr) => {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}
let s = arrSum(arr);
console.log(s);
// - Дано натуральное число n. Выведите все числа от 1 до n.
let appearN = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    console.log(arr);
    return arr
}
appearN(20)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let appearAB = (a, b) => {
    let arr = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            arr.push(i)
        }
    }
    console.log(arr);
    return arr
}
appearAB(10, 4)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
console.log(arr)
let substitute = (arr, i) => {
    for (let j = 0; j < arr.length; j++) {
        if (j === i) {
            let x = arr[j]
            arr[j] = arr[j + 1];
            arr[j + 1] = x;
        }
    }
    console.log(arr);
    return arr
}
arr = [2, 4, 6, 8, 9, 12, -1, 67];
substitute(arr, 5);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let transfer0 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr[arr.length] = 0;
        }
    }
    console.log(arr);
    return arr
}
let arr1 = [2, 4, 0, 8, 0, 10, -1, 67]
console.log(arr1)
transfer0(arr1);