// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     // До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const goodsKey = 'goods';
const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
const goods = JSON.parse(localStorage.getItem(goodsKey) || []);
goods.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.style.border = '#090b0c 1px solid';
    articleDiv.style.margin = '10px';
    const btnDel=document.createElement('button');
    btnDel.innerText='Remove from cart';
    const h = document.createElement('h2');
    h.innerText = `${article.name} -- ${article.quantity} -- ${article.price}$`;
    const img = document.createElement("img");
    img.src = article.picture;
    articleDiv.append(h,img,btnDel)
    container.append(articleDiv);

    btnDel.onclick = () => {
        const goods = JSON.parse(localStorage.getItem(goodsKey)) || [];
        const index = goods.findIndex(item => item.id === article.id);
        console.log(index);
        goods.splice(index,1);
        console.log(goods);
        localStorage.setItem(goodsKey,JSON.stringify(goods));
        btnDel.disabled = true;
    }
})

const btnClear=document.createElement('button');
btnClear.innerText='Clear';
container.append(btnClear);
btnClear.onclick = () => {
    const goods = JSON.parse(localStorage.getItem(goodsKey)) || [];
    localStorage.setItem(goodsKey,JSON.stringify([]));
    btnClear.disabled = true;
}

