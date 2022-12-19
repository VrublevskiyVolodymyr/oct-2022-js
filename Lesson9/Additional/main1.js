// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2=document.getElementsByTagName('h2');
let div=document.createElement('div');
div.setAttribute('id','content');
div.style.border = 'black 1px solid';
document.body.appendChild(div);
let ul=document.createElement('ul');
div.appendChild(ul);
for (const h2Element of h2)
{
    console.log(h2Element)
  let li=document.createElement('li');
  li.innerText=h2Element.innerText;
    ul.appendChild(li);
}


