// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

for (const simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member')
    document.body.append(simpsonDiv);
    let h2Name = document.createElement('h2');
    h2Name.innerText = simpson.name;
    let h2Surname = document.createElement('h2');
    h2Surname.innerText = simpson.surname;
    let h3Surname = document.createElement('h3');
    h3Surname.innerText = simpson.age;
    let pInfo = document.createElement('p');
    pInfo.innerText = simpson.info;
    let img = document.createElement("img")
    img.src = simpson.photo;
    simpsonDiv.append(h2Name, h2Surname, h3Surname, pInfo, img);
}
// Цикл в циклі
// - Є масив
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
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
for (const element of coursesArray) {
    let conteinerElement = document.createElement('div');
    conteinerElement.classList.add('cont')
    document.body.append(conteinerElement);

    let titleDiv = document.createElement('div');
    titleDiv.innerText = element.title;
    titleDiv.classList.add('title')

    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.innerText = element.monthDuration;
    monthDurationDiv.classList.add('monthDuration')

    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.innerText = element.hourDuration;
    hourDurationDiv.classList.add('hourDuration')

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules')

    let ulModules = document.createElement('ul');
    modulesDiv.append(ulModules);

    for (const module of element.modules) {
        let li = document.createElement('li')
        li.innerText = module;
        ulModules.append(li);
    }
    conteinerElement.append(titleDiv, monthDurationDiv, hourDurationDiv, modulesDiv);
}

//     - створити блок,
let block = document.createElement('div');
block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius modi quidem reprehenderit sapiente?'

//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'silver';
block.style.color = 'blue';
block.style.fontSize = '15px';
block.style.width = '100%';
block.style.height = 'auto';
block.style.border = '#6561db 1px solid';
block.style.margin = '5px';

// - додати цей блок в body.
document.body.append(block);

// - клонувати його повністю, та додати клон в body.
let clone = block.cloneNode(true);
document.body.appendChild(clone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
ul.classList.add('menu');
ul.style.border = '#6561db 1px solid';
ul.style.background = 'yellow'
document.body.append(ul);

for (const elem of arr) {
    let li = document.createElement('li')
    li.innerText = elem;
    ul.append(li);
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let container = document.createElement('div')
container.classList.add('cont');
document.body.append(container);
for (const element of coursesAndDurationArray) {
    let elementDiv = document.createElement('div')
    elementDiv.classList.add('title')
    elementDiv.innerText = element.title + '--' + element.monthDuration + '  month';
    container.append(elementDiv);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let contain = document.createElement('div')
contain.classList.add('contain');
document.body.append(contain);
for (const element of coursesAndDurationArray) {
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = element.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = element.monthDuration + '  month'
    elementDiv.append(h1, p)
    contain.append(elementDiv);
}

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


let button = document.createElement('button')
button.innerText = 'Click me'
let textDiv = document.createElement('div');
textDiv.id = 'text';
document.body.append(button,textDiv );
button.onclick = function () {
    textDiv.style.display = 'none'
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let f1=document.forms.f1
f1.onsubmit = function () {
    let value = this.age.value;
    if (value < 18) {
        alert('age<18');
    } else if (value >= 18) {
        alert('Ok');
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input1=document.createElement('input');
let input2=document.createElement('input');
let input3=document.createElement('input');
let button1=document.createElement('button');
button1.innerText='Click'
document.body.append(input1,input2,input3,button1);

button1.onclick = function () {
    let value1 = input1.value;
    let value2 = input2.value;
    let value3 = input3.value;
    let table = document.createElement('table');
    table.style.border = 'black 1px solid';
    document.body.append(table);

    for (let i = 0; i < value1; i++) {
       let lines=document.createElement('tr')
        table.append(lines)
        for (let j = 0; j < value2; j++) {
           let cells=document.createElement('td')
            cells.style.border='blue 1px solid';
            cells.innerText=`${value3}`;
            lines.append(cells)
        }
    }
}
