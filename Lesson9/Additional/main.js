let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let userAdres = [];
for (const user of users) {
    const copy = JSON.parse(JSON.stringify(user.address))
    userAdres.push(copy)
}
console.log(userAdres);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (const user of users) {
    let divCont = document.createElement('div');
    divCont.style.border = 'black 1px solid';
    for (const element in user) {
        if (typeof (user[element]) !== 'object') {
            let li = document.createElement('li')
            li.innerText = `${element}: ${user[element]}`
            divCont.appendChild(li)
        } else if (typeof (user[element]) === 'object') {
            let li = document.createElement('li')
            li.innerText = `${element}:`
            divCont.appendChild(li)
            for (const elementKey in user[element]) {
                let li1 = document.createElement('li');
                li1.innerText = `${elementKey}:${user[element][elementKey]}`
                divCont.appendChild(li1);
            }
        }
        document.body.appendChild(divCont)
    }
}

document.body.append(document.createElement('hr'))
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (const user of users) {
    let divCont1 = document.createElement('div');
    divCont1.style.border = 'black 1px solid';
    for (const element in user) {
        if (typeof (user[element]) !== 'object') {
            let div = document.createElement('div')
            div.style.border = 'black 1px solid';
            div.innerText = `${element}: ${user[element]}`
            divCont1.appendChild(div)
        } else if (typeof (user[element]) === 'object') {
            let div = document.createElement('div')
            div.style.border = 'black 1px solid';
            div.innerText = `${element}:`
            divCont1.appendChild(div)
            for (const elementKey in user[element]) {
                let li = document.createElement('li')
                li.innerText = `${elementKey}:${user[element][elementKey]}`
                div.appendChild(li);
            }
            document.body.appendChild(divCont1)
        }
    }
}

document.body.append(document.createElement('hr'))

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    console.log(user)

    let div = document.createElement('div');
    div.style.border = 'black 1px solid';

    let ul = document.createElement('ul')
    div.appendChild(ul)

    for (const element in user) {
        if (typeof (user[element]) !== 'object') {
            let li = document.createElement('li')
            li.innerText = `${element}: ${user[element]}`
            ul.appendChild(li)
        } else if (typeof (user[element]) === 'object') {
            let li = document.createElement('li')
            li.innerText = `${element}:`
            ul.appendChild(li)
            let ul1 = document.createElement('ul')
            li.appendChild(ul1)

            for (const elementKey in user[element]) {
                let li1 = document.createElement('li');
                li1.innerText = `${elementKey}:${user[element][elementKey]}`
                ul1.appendChild(li1);
                let ul2 = document.createElement('ul')
                li1.appendChild(ul2)
            }
            document.body.appendChild(div)
        }
    }
}


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
