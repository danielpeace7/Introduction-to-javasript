const operation = prompt('Select an operation: (+, -, /, *)');

const num1 = parseFloat(prompt('Enter First Number'));
const num2 = parseFloat(prompt('Enter Second Number'));

let result;

if (operation == '+') {
  result = num1 + num2;
}

else if (operation == '-') {
  result = num1 - num2
}

else if (operation == '/') {
  result = num1 / num2
}

else if (operation == '*') {
  result = num1 * num2
}

alert(`${num1} ${operation} ${num2} = ${result}`);