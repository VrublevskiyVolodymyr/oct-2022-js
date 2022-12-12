const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;
    const createMessage = (operationType, credits) => ({operationType, credits, operationTime: new Date()});

    const getCardOptions = () => ({balance, historyLog, transactionLimit, key});

    const putCredits = (money) => {
        balance += money;
        historyLog.push(createMessage('Reseived сredits', money));
    }

    const takeCredits = (money) => {
        if (balance - money >= 0) {
            balance -= money;

            historyLog.push(createMessage('Withdraval of credits', money))
        } else {
            historyLog.push(createMessage('Withdraval of credits','No money'));
            console.error('not enough money');
        }}
        const setTransactionLimit =(limit)=>{
            transactionLimit=limit;
            historyLog.push(createMessage('Transaction limit change', limit));
        }
    const transferCredits=(money,card)=>{
        if ((balance - money >= 0)&&(transactionLimit>=money)) {
            balance -= (money+money*0.5/100);
            card.putCredits(money);
            // card.historyLog.push(createMessage('Withdraval of credits', money))

            historyLog.push(createMessage('Withdraval of credits', money))
        } else {
            historyLog.push(createMessage('Withdraval of credits','No enough money or limit exceeded'));
            console.error('not enough money or limit exceeded');
        }}

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length === 3) {
            console.error('limit error');
            return;
        }
        this.cards.push(userCard(this.cards.length + 1));
    }

    getCardById(id) {
        const card = this.cards[id - 1];
        if (!card) {
            console.error('not present id');
            return;
        }
        return card;
    }
}

const user = new UserAccount('Vasya');

user.addCard();
user.addCard();
// user.addCard();
// user.addCard();
// user.addCard();

const card1 = user.getCardById(1);
const card2 = user.getCardById(2);

card1.putCredits(200);
console.log(card1.getCardOptions());

console.log('-------------------------------------------------');

// card2.takeCredits(20);
// console.log(card2.getCardOptions());
card2.takeCredits(120);
console.log(card2.getCardOptions());
card1.setTransactionLimit(300);
console.log(card1.getCardOptions());
card1.putCredits(200);
console.log(card1.getCardOptions());
card1.transferCredits(200,card2);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
card1.transferCredits(300,card2);
console.log(card1.getCardOptions());
card1.putCredits(201);
console.log(card1.getCardOptions());
