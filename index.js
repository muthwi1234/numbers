// add functionality on the calculator from html
// to js

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const allButtons = document.querySelectorAll('.button');
const allOperators = document.querySelectorAll('.operator');
const allNumbers = document.querySelectorAll('.number');
const allOperatorsArray = Array.from(allOperators);
const allNumbersArray = Array.from(allNumbers);
const allButtonsArray = Array.from(allButtons);

const equalsButton = document.querySelector('.equals');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.innerText;
    });
}
);
clearButton.addEventListener('click', () => {
    display.value = '';
});
deleteButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
equalsButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});
// add functionality to the calculator from keyboard
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= 0 && key <= 9) {
        display.value += key;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        display.value = '';
    }
});


