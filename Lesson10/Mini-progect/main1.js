// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())

    // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
    .then(users => {
        let divCont=document.createElement("div");
        divCont.classList.add('container');
        document.body.appendChild(divCont)
        for (let user of users) {
            console.log(user)
            let div = document.createElement("div");
            div.classList.add('user');
            let p=document.createElement("p");
            p.innerText = `user id - ${user.id}; user name -${user.name}`;
            // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = '   user-details'
            div.append (p,a);
            divCont.append (div);
        }
    });
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
//--->див. main2.js


// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//--->див. main2.js

//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
////--->див. main2.js

//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//////--->див. main3.js
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)





