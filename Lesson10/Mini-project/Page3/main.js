// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
let url = new URL(location.href);
let postId = +(url.searchParams.get('id'));
let divContainer = document.createElement("div");
divContainer.classList.add('container');
document.body.appendChild(divContainer);
let div = document.createElement("div");
div.classList.add('post');
divContainer.appendChild(div);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then(posts => {
            let ul = document.createElement('ul');
            for (const post in posts) {
                let li = document.createElement('li');
                li.innerText = `${post}: ${posts[post]}`
                ul.appendChild(li);
                div.appendChild(ul);
            }
        }
    )
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then(comments => {
            let divComents = document.createElement("div");
            divComents.classList.add('comments');
            divContainer.appendChild(divComents);
            for (comment of comments) {
                let divComent = document.createElement('div');
                divComent.classList.add('comment');
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