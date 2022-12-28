// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
const  cont=document.createElement("div");
cont.style.margin='10px 0';
document.body.appendChild(cont);
const  divCont=document.createElement("div");
divCont.classList.add('container');
divCont.style.border= '#090b0c 1px solid';
divCont.style.background='#d3bdfd'
cont.appendChild(divCont);
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        const  ul=document.createElement('ul');
        ul.classList.add('users');
        divCont.append (ul);
        for (const  user of users) {
            const  li = document.createElement("li");
            li.classList.add('user');
            li.innerText = `user id - ${user.id}; user name -${user.name}`;
            const btn = document.createElement('button');
            const  a = document.createElement('a');
            a.href = `index.html?id=${user.id}`;
            a.innerText = '   user-posts'
            btn.append(a);
            ul.append (li,btn);
        }
    })
let url = new URL(location.href);
let id = url.searchParams.get('id');
let divPost = document.createElement("div");
divPost.style.border= '#090b0c 1px solid';
divPost.style.margin='5px';
divPost.style.background='#95d9e5'
cont.appendChild(divPost);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => response.json())
        .then(posts => {
            for (let post of posts) {
                let div = document.createElement("div");
                div.classList.add('title');
                div.innerText = `${post.title}`;
                let a = document.createElement('a');
                a.href = `index.html?id=${post.userId}&userId=${post.id}`;
                a.innerText = '   comments'
                div.appendChild(a);
                divPost.appendChild(div);
            }
        });

// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let postId = +(url.searchParams.get('userId'));
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then(comments => {
            let divComents = document.createElement("div");
            divComents.classList.add('comments');
            cont.appendChild(divComents);
            for (comment of comments) {
                let divComent = document.createElement('div');
                divComent.classList.add('comment');
                divComent.style.border= '#090b0c 1px solid';
                divComent.style.background='#8d857c'
                for (const element in comment) {
                    if (element !== 'postId') {
                        let div = document.createElement('div');
                        div.classList.add('element');
                        div.innerText = `${element}: ${comment[element]}`
                        divComent.appendChild(div);
                    }
                }
                divComents.appendChild(divComent);
            }
        }
    )




// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
const goodsKey = 'goods';
// localStorage.setItem(goodsKey,JSON.stringify([]));

const btn=document.forms.f1.cart;
const input1=document.forms.f1.name;
const input2=document.forms.f1.quantity;
const input3=document.forms.f1.price;
const input4=document.forms.f1.picture;
a=document.createElement('a');
const divForm=document.getElementById('divForm');
divForm.append(a);
a.href='list.html';
a.innerText = 'На сторінку товарів';
btn.onclick = () => {
    if(input1.value&&input2.value&&input3.value&&input4.value){
    const goods = JSON.parse(localStorage.getItem(goodsKey)) || [];
    let  article={id:Math.round(Math.random() * 1000),name:input1.value,quantity:input2.value,price:input3.value,picture:input4.value};
    goods.push(article);
    localStorage.setItem(goodsKey,JSON.stringify(goods));
   }
}



