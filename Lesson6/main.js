// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a='hello world'
let b='lorem ipsum'
let c='javascript is cool'
console.log(a.length);
console.log(b.length);
console.log(c.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let d='HELLO WORLD'
let e='LOREM IPSUM'
let n='JAVASCRIPT IS COOL'
console.log(d.toLowerCase());
console.log(e.toLowerCase());
console.log(n.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.substring(str.indexOf('d'), str.lastIndexOf('g')));

// або
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let stringToarray = (arr) => arr.split(' ');
let arr = stringToarray(str1);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
arr2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arr3 = arr2.map((value) => {return String(value)});
console.log(arr3);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(nums, direction) {
    if (direction === 'ascending') {
         sort = nums.sort((a1, b1) => {
            return a1 - b1});
        return sort
    } else if (direction === 'descending') {
         sort = nums.sort((a1, b1) => {
            return b1 - a1});
        return sort
    } else console.log('Error')

}
console.log(sortNums(nums,'ascending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    let sortCoursesAndDurationArray =
        coursesAndDurationArray
             .sort((a1, b1) => {
                if (a1.monthDuration < b1.monthDuration){
                return 1}
                if (a1.monthDuration > b1.monthDuration){
                 return -1}
                if (a1.monthDuration === b1.monthDuration){
                 return 0}
         })
            .filter(value => value.monthDuration>5);

       console.log(sortCoursesAndDurationArray);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const  cardSuit = ['spade', 'diamond','heart', 'clubs'];
const  value=['2','3','4','5','6','7','8','9','10','jack','queen','king','ace','joker'];
const color=['red','black'];
let cards =[];
    for (let i=0; i<value.length-1; i++) {
    for (const card of cardSuit) {
            let colorCard
            if((card==='clubs')||(card==='spade')){
            colorCard='black'} else
            if((card==='diamond')||(card==='heart'))
            colorCard='red';
            cards.push ({ value:value[i], cardSuit:card, color:colorCard})
    }
}
    for (const col of color) { cards.push({value:value[value.length-1],color:col})
    }
console.log(cards)
// - знайти піковий туз
let aceofspades=cards.find(value=>value.value==='ace'&&value.cardSuit==='spade')
console.log(aceofspades)
// - всі шістки
let allsixes=cards.filter(value=>value.value==='6')
console.log(allsixes)
// - всі червоні карти
let allredcards=cards.filter(value=>value.color==='red')
console.log(allredcards)
// - всі буби
let allbubs=cards.filter(value=>value.cardSuit==='diamond')
console.log(allbubs)
// - всі трефи від 9 та більше
let clubs=cards.filter(value=>((value.cardSuit==='clubs')&&(value.value>='9')||(value.cardSuit==='clubs')&&(value.value==='10')))
console.log(clubs)

// або

let sortCards=cards.reduce((accumulator,card)=>{
        if(card.value==='jack'&&card.cardSuit==='spade')
        {accumulator.aceofspades.push(card)}
        if(card.value==='6')
        {accumulator.allsixes.push(card) }
        if(card.color==='red')
        {accumulator.allredcards.push(card)}
        if(card.cardSuit==='diamond')
        {accumulator.allbubs.push(card)}
        if((card.cardSuit==='clubs')&&(card.value>='9')||(card.cardSuit==='clubs')&&(card.value==='10'))
        {accumulator.clubs.push(card)}
return accumulator},
    {aceofspades:[],allsixes:[],allredcards:[],allbubs:[],clubs:[]})
console.log(sortCards)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let sortCardSuit=cards.reduce((accumulator,card)=>{
        if(card.cardSuit==='spade')
        {accumulator.spades.push(card)}
        if(card.cardSuit==='diamond')
        {accumulator.diamonds.push(card)}
        if(card.cardSuit==='heart')
        {accumulator.hearts.push(card)}
        if(card.cardSuit==='clubs')
        {accumulator.clubs.push(card)}
        return accumulator},
    {spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(sortCardSuit);