"use strict";

let money = +prompt("Ваш бюджет на месяц? ");
let time = prompt("Введите дату", "YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// for (let i = 0; i < 2; i++) {
//   let a = prompt("Введите обязательную строку расхода: ", "");
//   let b = prompt("Dо сколько это обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.lenght < 50
//   ) {
//     console.log("Done");
//     appData.expenses[a] = b;
//   } else {
//   console.log ('Bad result');
//   i--;
//   }
// }

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

// let i = 0
// while (i < 2) {
//   let a = prompt("Введите обязательную строку расхода: ", "");
//   let b = prompt("Dо сколько это обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.lenght < 50
//   ) {
//     console.log("Done");
//     appData.expenses[a] = b;
//   }
//   i++;
// }

let i = 0;
do {
  let a = prompt("Введите обязательную строку расхода: ", "");
  let b = prompt("Dо сколько это обойдется?", "");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.lenght < 50
  ) {
    console.log("Done");
    appData.expenses[a] = b;
  }
  i++;
} while (i < 2);
