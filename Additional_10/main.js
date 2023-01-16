//
// - Сворити масив не цензцрних слів.
let arr = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10'];
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let input = document.createElement('input');
input.type = 'text';
let div = document.createElement('div');
let button = document.createElement('button');
button.innerText = 'Send word';
div.append(input, button);
document.body.appendChild(div);
button.onclick = () => {
    for (const element of arr) {
        if (input.value === element) {
            alert('You have entered an obscene word')
        }
    }
}
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let input1 = document.createElement('input');
input.type = 'text';
let div1 = document.createElement('div');
div1.style.margin = '10px 0';
let button1 = document.createElement('button');
button1.innerText = 'Send sentence';
div1.append(input1, button1);
document.body.appendChild(div1);

button1.onclick = () => {
    let sentence = input1.value.split(' ');
    for (const elemArr of arr) {
        for (const elemSent of sentence) {
            if (elemSent === elemArr) {
                alert('You have entered an obscene word in a sentence')
            }
        }
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let divNav = document.createElement('div');
divNav.classList = "divNav";
let divMenu = document.createElement('div');
divMenu.classList = "divMenu";
let menuButton = document.createElement('button');
menuButton.classList = 'buttonMenu';
menuButton.innerText = 'Menu1';
let divContLink = document.createElement('div');
divContLink.classList = 'divContLink1'
let divLink1 = document.createElement('div');
divLink1.classList = 'link';
divLink1.innerText = 'link1';
let divLink2 = document.createElement('div');
divLink2.innerText = 'link2';
divLink2.classList = 'link';
let divLink3 = document.createElement('div');
divLink3.innerText = 'link3';
divLink3.classList = 'link';
divContLink.append(divLink1, divLink2, divLink3)
divMenu.append(menuButton, divContLink);
divNav.append(divMenu);
menuButton.addEventListener("click", function () {
    divContLink.classList.toggle('active');
})

// - Создайте меню, которое раскрывается при наведенні
let divMenu2 = document.createElement('div');
divMenu2.classList = "divMenu";
let menuButton2 = document.createElement('button');
menuButton2.classList = 'buttonMenu';
const i = document.createElement('i');
i.classList = 'fa fa-caret-down'
menuButton2.innerText = 'Menu2';
menuButton2.append(i);
let divContLink2 = document.createElement('div');
divContLink2.classList = 'divContLink'
let divLink4 = document.createElement('div');
divLink4.classList = 'link';
divLink4.innerText = 'link1';
let divLink5 = document.createElement('div');
divLink5.innerText = 'link2';
divLink5.classList = 'link';
let divLink6 = document.createElement('div');
divLink6.innerText = 'link3';
divLink6.classList = 'link';
divContLink2.append(divLink4, divLink5, divLink6)
divMenu2.append(menuButton2, divContLink2);
divNav.append(divMenu2);
document.body.appendChild(divNav);


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const cont = document.createElement("div");
cont.classList = 'cont';
cont.style.margin = '10px 0';
document.body.appendChild(cont);
fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    .then((response) => response.json())
    .then(comments => {
            for (comment of comments) {
                let divComent = document.createElement('div');
                divComent.id = '1'
                divComent.classList = 'divComent';
                divComent.style.border = '#090b0c 1px solid';
                divComent.style.background = '#8d857c'
                let divTitle = document.createElement('div');
                divTitle.id = '2'
                divTitle.classList = 'divTitle';
                divTitle.innerText = `title: ${comment.name}`
                let divBody = document.createElement('div');
                divBody.id = '3'
                divBody.classList = 'divBody'
                divBody.innerText = `body:${comment.body}`
                let buttonBody = document.createElement('button');
                buttonBody.id = '4'
                buttonBody.classList = 'buttonBody'
                buttonBody.innerText = 'Body'
                buttonBody.classList = 'buttonBody'
                buttonBody.addEventListener("click", function () {
                    divBody.classList.toggle('divBody');
                })
                divTitle.appendChild(buttonBody)
                divComent.appendChild(divTitle);
                divComent.appendChild(divBody);
                cont.appendChild(divComent);
            }
        }
    )

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
button3 = document.createElement('button');
button3.innerText = 'Click me';
button3.onclick = () => {
    button3.classList.toggle('divBody');
}
document.body.append(button3)
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

function explorer(htmlElement) {
    htmlElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (htmlElement != document.body) {
            console.log('Tag name:', htmlElement.localName, ',', 'Class name:', htmlElement.className, ',', 'id:', htmlElement.id, ',', 'Height*Width:', htmlElement.offsetHeight, '*', htmlElement.offsetWidth)
            console.log('_______________________________________')
        }
    })
    let children = htmlElement.children;
    if (children.length != 0) {
        for (const child of children) {
            explorer(child)
        }
    }

}

// explorer(document.body);


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
const divPopup = document.createElement('div');
const img = document.createElement('img')
img.src = 'close.png'
img.classList='close'
divPopup.appendChild(img);
divPopup.classList.add('divPopup');
document.body.append(divPopup);

function explorer2(htmlElement) {
    htmlElement.addEventListener('click', (e) => {
        if (htmlElement != document.body && htmlElement != divPopup && htmlElement != img) {
            e.preventDefault();
            divPopup.classList.add('active2');
            let p = document.createElement('p')
            p.textContent = `Tag name: ${htmlElement.localName}; Class name: ${htmlElement.className} ; id:${htmlElement.id} ; Height*Width: ${htmlElement.offsetHeight} *${htmlElement.offsetWidth} `
            divPopup.appendChild(p);
        }
    })
    let children = htmlElement.children;
    if (children.length != 0) {
        for (const child of children) {
            explorer2(child)
        }
    }
    img.addEventListener('click', () => {
        let arr = divPopup.getElementsByTagName('p');
        for (const arrElement of arr) {
            arrElement.remove();
        }
        divPopup.classList.remove('active2');
    });
}

// explorer2(document.body);


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let contUs1 = document.createElement('div');
document.body.appendChild(contUs1);

let chbox1 = document.createElement('input');
chbox1.setAttribute("type", "checkbox");
let p1 = document.createElement('p');
p1.style.display = 'inline-block'
p1.innerText = 'Status false'
let div2 = document.createElement('div')
let div3 = document.createElement('div')

let chbox2 = document.createElement('input');
chbox2.setAttribute("type", "checkbox");
let p2 = document.createElement('p');
p2.style.display = 'inline-block'
p2.innerText = 'Older 20 years'

let chbox3 = document.createElement('input');
chbox3.setAttribute("type", "checkbox");
let p3 = document.createElement('p');
p3.style.display = 'inline-block'
p3.innerText = 'Sity is Kyiv '


contUs1.append(chbox1, p1, div2, chbox2, p2, div3, chbox3, p3,)

let didUsers = document.createElement('div');
didUsers.style.margin = "10px";
contUs1.appendChild(didUsers)


let filterFalse = () => {
    let statusFalse = usersWithAddress.filter(value => value.status === false);
    for (const Key of statusFalse) {
        divUs = document.createElement('div');
        divUs.style.border = '#090b0c 1px solid';
        didUsers.appendChild(divUs);

        for (const keyKey in Key) {
            if (typeof Key[keyKey] !== 'object') {
                let div = document.createElement('div');
                div.innerText = `${keyKey}: ${Key[keyKey]}`;
                divUs.appendChild(div)
            } else if (typeof Key[keyKey] === 'object') {
                let div = document.createElement('div');
                div.innerText = `${keyKey}`;
                let ul = document.createElement('ul');
                ul.style.margin = '0'
                for (const elem in Key[keyKey]) {
                    let li = document.createElement('li');
                    li.style.margin = '0'
                    li.innerText = `${elem}: ${Key[keyKey][elem]}`
                    ul.appendChild(li);
                    div.appendChild(ul)
                }
                divUs.appendChild(div)
            }

        }
    }
}

chbox1.addEventListener('change', function (e) {
    if (chbox1.checked) {
        filterFalse()
    } else {
        didUsers.innerText = ''
    }
});


let filterOld = () => {
    let old = usersWithAddress.filter(value => value.age > 20);
    for (const Key of old) {
        divUs = document.createElement('div');
        divUs.style.border = '#090b0c 1px solid';
        didUsers.appendChild(divUs);

        for (const keyKey in Key) {
            if (typeof Key[keyKey] !== 'object') {
                let div = document.createElement('div');
                div.innerText = `${keyKey}: ${Key[keyKey]}`;
                divUs.appendChild(div)
            } else if (typeof Key[keyKey] === 'object') {
                let div = document.createElement('div');
                div.innerText = `${keyKey}`;
                let ul = document.createElement('ul');
                ul.style.margin = '0'
                for (const elem in Key[keyKey]) {
                    let li = document.createElement('li');
                    li.style.margin = '0'
                    li.innerText = `${elem}: ${Key[keyKey][elem]}`
                    ul.appendChild(li);
                    div.appendChild(ul)
                }
                divUs.appendChild(div)
            }

        }
    }
}

chbox2.addEventListener('change', function (e) {
    if (chbox2.checked) {
        filterOld()
    } else {
        didUsers.innerText = ''
    }
});


let sityKyiv = () => {
    let city = usersWithAddress.filter(value => value.address.city === 'Kyiv');
    for (const Key of city) {
        divUs = document.createElement('div');
        divUs.style.border = '#090b0c 1px solid';
        didUsers.appendChild(divUs);

        for (const keyKey in Key) {
            if (typeof Key[keyKey] !== 'object') {
                let div = document.createElement('div');
                div.innerText = `${keyKey}: ${Key[keyKey]}`;
                divUs.appendChild(div)
            } else if (typeof Key[keyKey] === 'object') {
                let div = document.createElement('div');
                div.innerText = `${keyKey}`;
                let ul = document.createElement('ul');
                ul.style.margin = '0'
                for (const elem in Key[keyKey]) {
                    let li = document.createElement('li');
                    li.style.margin = '0'
                    li.innerText = `${elem}: ${Key[keyKey][elem]}`
                    ul.appendChild(li);
                    div.appendChild(ul)
                }
                divUs.appendChild(div)
            }

        }
    }
}

chbox3.addEventListener('change', function (e) {
    if (chbox3.checked) {
        sityKyiv()
    } else {
        didUsers.innerText = ''
    }
});

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
let treveler = (htmlElement) => {
    const TOPHtmlElement = htmlElement;
    let buttonLeft = document.createElement('button');
    let buttonRight = document.createElement('button');
    buttonRight.innerText = 'Go'
    buttonLeft.innerText = 'Back'
    document.body.append(buttonLeft, buttonRight)

    function parent(element) {                                       // функція пошуку предка в якого є справа сусід
        if ((element.parentElement).nextElementSibling === null) {   //якщо в батька елемента немає справа сусіда
            element = element.parentElement
            parent(element)                                          //ідемо до діда
        } else {                                                     //якщо в батька елемента є справа сусід
            element1 = (element.parentElement).nextElementSibling
        }
        return element1
    }


    let element = htmlElement
    let elementLog = htmlElement //змінна яка вказує на те, який останній елемент був вибраний і використовується для передачі даних між кнопками
    let toggle = 0;             // маркер який показує, яка кнопка була натиснута остання

    buttonRight.addEventListener('click', (e) => {        //кнопка занурення в структуру обєкту
     try{
        if ((toggle === 0 || toggle === 1)&&element!=='head') {                                     //якщо останній раз була натиснута ця кнопка
            console.log(element)
            elementLog = element
            toggle = 1
        } else {                                                                //якщо останній раз була натиснута ліва кнопка
            element = elementLog
            if (element.children.length !== 0) {                                //якщо в елемента є діти
                console.log(element.children[0]);
                element = element.children[0]
                elementLog = element
            } else {
                console.log(element.nextElementSibling)                          //переходим до правого сусіда
                element = element.nextElementSibling
                elementLog = element
            }
            toggle = 1;
        }
        if (element.children.length !== 0) {                                     //якщо в елемента є діти
            element = element.children[0]
        } else if (element.children.length === 0) {                              //якщо в елемента немає дітей
            if (element.nextElementSibling !== null) {                           //якщо в елемента є сусід
                element = element.nextElementSibling
            } else if ((element.parentElement).nextElementSibling === null) {   //якщо в батька елемента немає справа сусіда
                element = parent(element);
            } else if ((element.parentElement).nextElementSibling !== null){    //якщо в батька елемента є справа сусід
                element = (element.parentElement).nextElementSibling
            }
        }
     }
     catch (e) {
         console.warn(`It's Bottom`, e);
     }
    })


    buttonLeft.addEventListener('click', (e) => {         //кнопка повернення (всплиття) назовні до кореневого обєкту
        if(element===TOPHtmlElement){return console.log(`It's Top`) }           //при досягненні нашого кореневого елементу вивести повідомдення
        if (toggle === 0 || toggle === 2) {                                     //якщо останній раз була натиснута ця кнопка
            console.log(element)
            elementLog = element
            toggle = 2;}
        else {                                                                //якщо останній раз була натиснута права кнопка
            element = elementLog
            if (element.previousElementSibling !== null) {                     //якщо в елемента є сусід справа
                console.log(element.previousElementSibling)
                element = element.previousElementSibling
                elementLog = element
            } else {                                                          //йде до батька
                console.log(element.parentElement)
                element = element.parentElement
            }
            elementLog = element
            toggle = 2;
        }
        if (element.previousElementSibling !== null) {                      //якщо в елемента є сусід зліва
            element = element.previousElementSibling
        } else element = element.parentElement                              //йдем до батька
    })
}
treveler(document.body);


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.




let width = 260; // ширина зображення
let count = 3; // видима кількість зображень

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // початкова позиція каруселі

carousel.querySelector('.prev').onclick = function() {
    // зсув ліворуч
    position += width * count;
    // останній зсув вліво може бути не на 3, а на 2 або 1 елемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
    list.style.transition='1s'
};

carousel.querySelector('.next').onclick = function() {
    // зсув праворуч
      position -= width * count;
      // останнє пересування вправо може бути не на 3, а на 2 або 1 елемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
      list.style.transition='1s'
};
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let inputText=document.createElement('input')
inputText.style.display='block'
inputText.style.margin='10px'
let par=document.createElement('p')
inputText.value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ut?'
document.body.append(inputText, par)
function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd).toUpperCase();
    par.textContent = `You selected: ${selection}`;
}
inputText.addEventListener('select', logSelection);
