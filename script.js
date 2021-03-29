let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let first = prompt("Введите обязательную статью расходов в этом месяце", "");
let second = prompt("Во сколько обойдется?", "");
let appData = {
    cash: money,
    timeData: time,
    expenses: first + ":"+ second,
    savings: "false"
    // optionalExpenses: ,
    // income: [],
    
};
console.log(appData);
let pay = money / 30;
alert (pay);