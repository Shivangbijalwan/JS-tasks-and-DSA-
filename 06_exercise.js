console.log("Welcome!!!");

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /): ");

let result;

if (operator == "+") {
    result = number1 + number2;
} else if (operator == "-") {
    result = number1 - number2;
} else if (operator == "*") {
    result = number1 * number2;
} else if (operator == "/") {
    result = number1 / number2;
} else {
    result = "Invalid operator!";
}

console.log(`Result: ${result}`);