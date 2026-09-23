let a = 5;
let b = 10;
function calculate() {
    let result = a + b;
    console.log(result);
    return result;
}
calculate();
if (b>a) {
    let result = 1;
    console.log(result);
}

const n = 16;
const secretNumber = n % 10;
let guess = prompt("Вгадай число від 0 до 9:")
if (guess == secretNumber) {
    alert("Correct!");
}
else {
    alert("Wrong!")
}

let userName = prompt("Введіть ваше ім'я:");
let firstNumber = prompt("Введіть перше число:");
let secondNumber = prompt("Введіть друге число:");
console.log("Hello," + userName + "! The sum of " + firstNumber + " and " + secondNumber + " is " + (parseInt(firstNumber) + parseInt(secondNumber)) + ".");