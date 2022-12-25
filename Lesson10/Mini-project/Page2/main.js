//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
let url = new URL(location.href);
let id = url.searchParams.get('id');
let divCont = document.createElement("div");
divCont.classList.add('container');
document.body.appendChild(divCont);
let divUser = document.createElement("div");
divUser.classList.add('user');
divCont.appendChild(divUser);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(user => {
            let ul = document.createElement('ul');
            ul.classList.add('userInfo');

            for (const element in user) {
                let li = document.createElement('li');
                if (typeof (user[element]) !== 'object') {
                    li.innerText = `${element}: ${user[element]}`
                } else if (typeof (user[element]) === 'object') {
                    li.innerText = `${element}:`;
                    let ul1 = document.createElement('ul');

                    for (const value in user[element]) {
                        let li1 = document.createElement('li');
                        if (typeof (user[element][value]) !== 'object') {
                            li1.innerText = `${value}: ${user[element][value]}`
                        }
                        if (typeof (user[element][value]) === 'object') {
                            li1.innerText = `${value}:`
                            let ul2 = document.createElement('ul');

                            for (const inf in user[element][value]) {
                                let li2 = document.createElement('li');
                                li2.innerText = `${inf}: ${user[element][value][inf]}`;
                                ul2.appendChild(li2);
                            }
                            li1.appendChild(ul2);
                        }
                        ul1.appendChild(li1);
                    }
                    li.appendChild(ul1);
                }
                ul.appendChild(li);
                divUser.appendChild(ul);
            }
        }
    );
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
let button = document.createElement('button');
button.classList.add('button');
button.innerText = 'post of current user';
let divContTitle = document.createElement('div');
divContTitle.classList.add('contTitle');
divCont.append(button, divContTitle);
button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => response.json())
        .then(posts => {
            for (let post of posts) {
                let div = document.createElement("div");
                div.classList.add('title')
                div.innerText = `${post.title}`;
                //  6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
                let a = document.createElement('a');
                a.href = `../Page3/post-details.html?id=${post.id}&userId=${post.userId}`;
                a.innerText = '   post-details'
                div.appendChild(a);
                divContTitle.appendChild(div)
            }
        });
}



