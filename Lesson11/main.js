let money = 400;

function wakeUp(I_woke_up) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (I_woke_up) {
                console.log('My a new day has begun');
                resolve('My a new day has begun');
            } else {
                reject('I am still sleeping');
            }
        }, 100);
    })
}

function prayer(I_prayed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (I_prayed) {
                console.log('The day is blessed ');
                resolve('The day is blessed ');
            } else {
                reject('Pray first');
            }
        }, 200);
    });
}


function exercise(isExDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isExDone) {
                console.log('The exercises are done');
                resolve('The exercises are done');
            } else {
                reject('You need to do exercises');
            }
        }, 300);
    });
}

function brushingTeeth(isBrushingDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBrushingDone) {
                console.log('I brushed my teeth');
                resolve('I brushed my teeth');
            } else {
                reject('Brush your teeth');
            }
        }, 50);
    });
}

function breakfast(isBreakfastDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isBreakfastDone) {
                console.log('I had breakfast');
                resolve('I had breakfast');
            } else {
                reject('You need to have breakfast');
            }
        }, 300);
    });
}

function goToWork(money_for_the_road) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money_for_the_road > 100) {
                money -= 100;//transport costs
                console.log(money, 'MONEY');
                resolve('I arrived at the work');
            } else {
                reject('Not enough money');
            }
        }, 800);
    });
}

function gotWork(isJobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isJobDone) {
                money += 500;
                console.log(money, 'MONEY');
                resolve('Did the job well!');
            } else {
                reject('Do the work first');
            }
        }, 2000);
    });
}

function buyStaff(moneyForStaff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(moneyForStaff, 'buyStaff');
            if (moneyForStaff > 300) {
                console.log('I bought a new laptop');
                moneyForStaff = moneyForStaff - 300;
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
                reject('No food today');
            } else {
                console.log('A delicacy');
                resolve(moneyForEat - 200);
            }
        }, 3000);
    })
}

function goToHome(money_for_the_road) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money_for_the_road >= 100) {
                money_for_the_road -= 100;//transport costs
                console.log(money_for_the_road, 'MONEY');
                resolve('I arrived to Home');
            } else {
                reject('Not  money');
            }
        }, 800);
    });
}

//case 1
async function myDay1() {
    try {
        const wakeUpResult  = await wakeUp(true);
        console.log(wakeUpResult, 'wakeUpResult');
        console.log('*******************************************************************')

        const prayerResult = await prayer(wakeUpResult);
        console.log(prayerResult, 'prayerResult');
        console.log('*******************************************************************')

        const exerciseResult = await exercise(prayerResult);
        console.log(exerciseResult, 'exerciseResult');
        console.log('*******************************************************************')

        const brushingTeethResult  = await brushingTeeth(exerciseResult);
        console.log(brushingTeethResult, 'brushingTeethResult');
        console.log('*******************************************************************')

        const breakfastResult = await  breakfast(brushingTeethResult);
        console.log(breakfastResult, 'breakfastResult');
        console.log('*******************************************************************')

        const goToWorkResult = await goToWork(money);
        console.log(goToWorkResult, 'goToWorkResult');
        console.log('*******************************************************************')

        const workRes = await gotWork(goToWorkResult);
        console.log(workRes, 'workRes');
        console.log('*******************************************************************')

        const restStaff = await buyStaff(money);
        console.log(restStaff, 'restStaff');
        console.log('*******************************************************************')

        const restAfterEat = await goEat(restStaff);
        console.log(restAfterEat, 'restAfterEat');
        console.log('*******************************************************************')

        const endDayRest = await goToHome(restAfterEat);
        console.log(endDayRest, 'endDayRest');
        console.log('*******************************************************************')

    } catch (e) {
        console.warn('ERRROR', e);
    }
}

myDay1(true)

//case 2
function myDay2(started) {
    wakeUp(started)
        .then(wakeUpResult => {
            console.log(wakeUpResult, ' wakeUpResult');
            console.log('___________________________________________________________________')
            return prayer(wakeUpResult);
        })
        .then(prayerResult => {
            console.log(prayerResult, ' prayerResult');
            console.log('___________________________________________________________________')
            return exercise(prayerResult);
        })
        .then(exerciseResult => {
            console.log(exerciseResult, ' exerciseResult');
            console.log('___________________________________________________________________')
            return brushingTeeth(exerciseResult);
        })
        .then(brushingTeethResult => {
            console.log(brushingTeethResult, ' brushingTeethResult');
            console.log('___________________________________________________________________')
            return breakfast(brushingTeethResult);
        })
        .then(breakfastResult => {
            console.log(breakfastResult, ' breakfastResult');
            console.log('___________________________________________________________________')
            return goToWork(money);
        })
        .then(goToWorkResult => {
            console.log(goToWorkResult, ' goToWorkResult');
            console.log('___________________________________________________________________')
            return gotWork(goToWorkResult);
        })
        .then(workResult => {
            console.log(workResult, 'workResult');
            console.log('___________________________________________________________________')
            return buyStaff(money);
        })
        .then(restAfterStaff => {
            console.log(restAfterStaff, 'restAfterStaff');
            console.log('___________________________________________________________________')
            return goEat(restAfterStaff);
        })
        .then(restAfterEat => {
            console.log(restAfterEat, 'restAfterEat');
            console.log('___________________________________________________________________')
            return goToHome(restAfterEat);
        })
        .then(goToHomeResult => {
            console.log(goToHomeResult, 'goToHomeResult')
            console.log('___________________________________________________________________')})
        .catch(e => {
            console.warn(e);
        })
        .finally(() => {
            console.log('Go home or if you are at home, go to sleep')
        })
}

myDay2(true)

