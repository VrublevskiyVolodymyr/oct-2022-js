// let elementById = document.getElementById('btn');
//
// elementById.onclick = () => {
//   console.log('CLC');
// }
//
// let i = 0;
// while (i < 999999999) {
//   i++
// }
//
//
//
// console.log(1);
//
// setTimeout(() => {
//   console.log(2.1);
// }, 105);
//
// setTimeout(() => {
//   console.log(2.2);
// }, 102);
//
// setTimeout(() => {
//   console.log(2.3);
// }, 100);
//
// setTimeout(() => {
//   console.log(2.4);
// }, 89);
//
// setTimeout(() => {
//   console.log(2.5);
// }, 95);
//
// setTimeout(() => {
//   console.log(2.6);
// }, 678);
//
// console.log(3);


let money = 100;

function gotWork(isJobDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isJobDone) {
        money += 500;
        console.log(money, 'MONEY');
        resolve('Зробив роботу добре!');
      } else {
        reject('Перше зроби роботу');
      }
    }, 2000);
  });
}

function buyStaff(moneyForStaff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(moneyForStaff, 'buyStaff');
      if (moneyForStaff > 200) {
        console.log('купив кеди в ашані');
        moneyForStaff = moneyForStaff - 150;
        resolve(moneyForStaff);
      } else {
        reject('No money no honey');
      }
    }, 1500)
  })
}

function goEat(moneyForEat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(moneyForEat, 'moneyForEat');
      if (moneyForEat < 200) {
        reject('Сьогодні без їжі');
      } else {
        console.log('Смакота');
        resolve(moneyForEat - 200);
      }
    }, 3000);
  })
}


// gotWork(true)
//   .then(workResult => {
//     console.log(workResult, 'workResult');
//     buyStaff(money)
//       .then(restAfterStaff => {
//         console.log(restAfterStaff, 'restAfterStaff');
//         goEat(restAfterStaff)
//           .then(restAfterEat => {
//             console.log(restAfterEat, 'restAfterEat');
//           })
//       })
//   })

// gotWork(true)
//   .then(workResult => {
//     console.log(workResult, 'workResult');
//
//     return buyStaff(money);
//   })
//   .then(restAfterStaff => {
//     console.log(restAfterStaff, 'restAfterStaff');
//
//     return goEat(restAfterStaff);
//   })
//   .then(restAfterEat => {
//     console.log(restAfterEat, 'restAfterEat');
//   })
//   .catch(e => {
//     console.warn(e);
//   })
//   .finally(() => {
//     console.log('GO HOME')
//   })

async function myDay() {
  try {
    const workRes = await gotWork(true);
    console.log(workRes, 'workRes');

    const restStaff = await buyStaff(90);
    console.log(restStaff, 'restStaff');

    const endDayRest = await goEat(restStaff);
    console.log(endDayRest, 'endDayRest');
  } catch (e) {
    console.warn('ERRROR', e);
  }
}

myDay();
