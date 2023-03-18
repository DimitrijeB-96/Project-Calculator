//display values and clear them
const displayValue = document.querySelector('.display-operation');
const displayResult = document.querySelector('.display-result');
const btnClear = document.querySelector('.clear-btn'); //to implement removing one each 'char' one by another by clicking it
const btnDelete = document.querySelector('.delete-btn');

//different way to store variable ?
function StoreValues(firstNumber, operator, secondNumber) {
    this.firstNumber = firstNumber;
    this.operate = operator;
    this.secondNumber = secondNumber;
}

const equalBtn = document.querySelector('.btn-equal');

//operations
const addBtn = document.querySelector('.btn-add'); //to implement add numbers together
const subtractBtn = document.querySelector('.btn-subtract'); //to implement subracting numbers
const multiplyBtn = document.querySelector('.btn-multiply'); //to implement multiplying numbers
const divisionBtn = document.querySelector('.btn-division'); //to implement divide numbers

//select all buttons and dot 
const numberBtns = document.querySelectorAll('.btn-number');
const btnDot = document.querySelector('.btn-dot'); // not done implementing this one

//event that get value from each number button clicked
numberBtns.forEach(btn => btn.addEventListener('click', () => {
    displayValue.textContent += btn.textContent;
    storeValue = parseInt(displayValue.textContent);
}));


//to add more functionality at this Event
btnDot.addEventListener('click', () => {
    displayValue.textContent += '.';
});

//////////////////////////////////////////////////

addBtn.addEventListener('click', () => {

});

subtractBtn.addEventListener('click', () => {

});

multiplyBtn.addEventListener('click', () => {

});

divisionBtn.addEventListener('click', () => {

});

//////////////////////////////////////////////////


//event that delete everything from "screen"
btnDelete.addEventListener('click', () => {
    displayValue.textContent = '';
    displayResult.textContent = '';
});

//event that display result
equalBtn.addEventListener('click', () => {
    displayResult.textContent = storeValue;

    //Implement to check which operation is use and to calculate
});

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

function operate(operator, x, y) {
    if (operator == '+') {
        return add(x, y);
    } else if (operator == '-') {
        return subtract(x, y);
    } else if (operator == '*') {
        return multiply(x, y);
    } else if (operator == '/') {
        return divide(x, y);
    }
}

