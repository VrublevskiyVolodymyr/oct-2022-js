// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
let h1=document.querySelector('h1');
h1.style.textAlign='center';
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    //     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
    .then(users => {
        let divCont=document.createElement("div");
        divCont.classList.add('container');
        document.body.appendChild(divCont)
        let ul=document.createElement('ul')
        ul.classList.add('users');
        divCont.append (ul);
        for (let user of users) {
            let li = document.createElement("li");
            li.classList.add('user');
            li.innerText = `user id - ${user.id}; user name -${user.name}`;
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = '   user-details'
            ul.append (li,a);
        }
    })
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
//--->див main.js
