// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 14;
if (time >= 0 && time <= 15) {
    console.log('I quarter');
} else if (time >= 16 && time <= 30) {
    console.log('II quarter');
} else if (time >= 31 && time <= 45) {
    console.log('III quarter');
} else if (time >= 46 && time <= 59) {
    console.log('IV quarter');
} else {
    console.log('Wrong number');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11;
if (day >= 1 && day <= 10) {
    console.log('I decade');
} else if (day >= 11 && day <= 20) {
    console.log('II decade');
} else if (day >= 21 && day <= 31) {
    console.log('III decade');
} else {
    console.log('Wrong number');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let a = +(prompt('Enter the week number'));
switch (a) {
    case 1: {
        console.log('Monday');
        break;
    }

    case 2: {
        console.log('Tuesday');
        break;
    }

    case 3: {
        console.log('Wednesday');
        break;
    }

    case 4: {
        console.log('Thursday');
        break;
    }

    case 5: {
        console.log('Friday');
        break;
    }

    case 6: {
        console.log('Saturday');
        break;
    }

    case 7: {
        console.log('Sunday');
        break;
    }
    default: {
        console.log('Wrong number');
    }
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let b = 77;
let c = 33;
if (b < c) {
    console.log('max number c =', c);
} else if (b > c) {
    console.log('max number b=', b);
} else if (b === c) {
    console.log('b=c');
}

//     є змінна x, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

 x = 0;
if ((!!x || false) === false) {
    x = "default";
    console.log('x=', x);
}
// or
x = null;
if (!!x||false){
    console.log('x=', x);
}
else {
    x = "default";
    console.log('x=', x);
}


