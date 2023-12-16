let currentDisplay = document.querySelector('#current');
let memoryDisplay = document.querySelector('#memory');
let body = document.querySelector('body');

let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');
let current;
let memory;
let operator;
let lastInput;
let operatorsList = '+-*/';

for (let button of numbers)
    button.addEventListener('click', event => onNumberClick(event.target.textContent));

for (let button of operators)
    button.addEventListener('click', event => onOperatorClick(event.target.textContent));

clear.addEventListener('click', clearState);
equals.addEventListener('click', operate);

function onNumberClick(char) {
    let num = parseInt(char);

    if (lastInput === 'operator') {
        display.textContent = '';
        //memory = current;
        current = 0;
    }

    if (lastInput === 'operator') {

    }

    if (lastInput === 'equals') {

    }

    current = (current ? current : 0) * 10 + num;
    display.textContent = current;
    lastInput = 'number';
}

function onOperatorClick(char) {
    if (lastInput === 'number') {
        if (memory) {
            operate();
        } else {
            display.textContent += ` ${char}`;
            memory = current;
        }
    }

    if (lastInput === 'operator') {
        let str = display.textContent;

        if (operatorsList.includes(str.substring(str.length - 1)))
            display.textContent = str.substring(0, str.length - 2);

        display.textContent += ` ${char}`;
    }

    if (lastInput === 'equals') {

    }

    operator = char;
    lastInput = 'operator';
}

function clearState() {
    display.textContent = '';
    current = null;
    memory = null;
    operator = null;
    showingResult = false;
}

function operate() {
    if (lastInput === 'operator') {
        operator = null;
    }

    if (lastInput === 'equals') {
    }

    if (lastInput != 'operator') {
        if (memory && operator && current) {
            memory = calculate();
            current = memory;
            display.textContent = memory;
        }
    }

    lastInput = 'equals';

    function calculate() {
        switch (operator) {
            case '+':
                return memory + current;
            case '-':
                return memory - current;
            case '*':
                return memory * current;
            case '/':
                return current != 0 ? memory / current : alert('Cannot divide by zero');
            default:
                alert(`Unexpected operator ${operator}`)
        }
    }
}

body.addEventListener('click', () => {
    memoryDisplay.textContent = memory ? memory : 'X';
    currentDisplay.textContent = current ? current : 'X';
})