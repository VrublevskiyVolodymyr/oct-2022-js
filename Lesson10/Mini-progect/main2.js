
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
    .then(info => {
            let ul = document.createElement('ul');
            ul.classList.add('userInfo');
            for (const elem in info) {
                let li = document.createElement('li');
                if (typeof (info[elem]) === 'object') {
                    li.innerText = `${elem}:`;
                } else {
                    li.innerText = `${elem}: ${info[elem]}`
                }
                if (typeof (info[elem]) === 'object') {
                    let ul1 = document.createElement('ul');
                    for (const element in info[elem]) {
                        let li1 = document.createElement('li');
                        if (typeof (info[elem][element]) === 'object') {
                            li1.innerText = `${element}:`
                        } else {
                            li1.innerText = `${element}: ${info[elem][element]}`
                        }
                        ul1.appendChild(li1);
                        if (typeof (info[elem][element]) === 'object') {
                            let ul2 = document.createElement('ul');
                            for (const inf in info[elem][element]) {
                                let li2 = document.createElement('li');
                                li2.innerText = `${inf}: ${info[elem][element][inf]}`;
                                ul2.appendChild(li2);
                            }
                            li1.appendChild(ul2);
                        }
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
let button=document.createElement('button');
button.classList.add('button');
button.innerText='post of current user';
let divContTitle=document.createElement('div');
divContTitle.classList.add('contTitle');
divCont.append(button,divContTitle);
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
                a.href = `post-details.html?id=${post.id}&userId=${post.userId}`;
                a.innerText = '   post-details'
                div.appendChild(a);
                divContTitle.appendChild(div)
            }
        });
}



