// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let divCont = document.createElement('div');
divCont.classList.add('wrap');
divCont.style.border = 'black 1px solid';
document.body.appendChild(divCont);
for (const rule of rules) {
    let divRule = document.createElement('div');
    divRule.classList.add('divrule')
    divCont.style.border = 'black 1px solid';
    divCont.appendChild(divRule);
    for (const element in rule) {
        if(element==='title'){
            let div = document.createElement('div');
            let h2=document.createElement('h2');
            h2.innerText=`${rule[element]}`;
            div.appendChild(h2);
            divRule.appendChild(div);
        } else
        {let div = document.createElement('div');
            let h3=document.createElement('h3');
            h3.innerText=`${rule[element]}`;
            div.appendChild(h3);
        divRule.appendChild(div);}
    }
}