let x;
let y;
let operator;
let current = 0;
let numberButton = document.querySelector(".number");
let display = document.querySelector("#display");

numberButton.addEventListener('click', event => onNumberClick(event.target));

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate() {
    switch (operator) {
        case '+':
            add(x, y);
            break;
        case '-':
            subtract(x, y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            divide(x, y);
            break;
        default:
            alert('Unrecognized operator');
    }
}

function onNumberClick(button) {
    let char = button.textContent;
    let nmbr = parseInt(char);

    display.textContent += char;
    current = current * 10 + nmbr;
}