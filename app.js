//display values and clear them
const displayValue = document.querySelector('.display-on-screen');
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

const addBtn = document.querySelector('.btn-add');
const subtractBtn = document.querySelector('.btn-subtract'); 
const multiplyBtn = document.querySelector('.btn-multiply'); 
const divisionBtn = document.querySelector('.btn-division'); 

//operations
const operators = document.querySelectorAll('.btn-operation');
operators.forEach(op => op.addEventListener('click', () => {
    if (op === multiplyBtn) {
        displayValue.textContent += ' * ';
        console.log('multiplying...');
    
    } else if (op === divisionBtn) {
        displayValue.textContent += ' / ';
        console.log('dividing...');
    
    } else if (op === addBtn) {
        displayValue.textContent += ' + ';
        console.log('adding...');
    
    } else if (op === subtractBtn) {
        displayValue.textContent += ' - ';
        console.log('subtracting...');
    
    }
}));

//select all buttons and dot 
const numberBtns = document.querySelectorAll('.btn-number');
const btnDot = document.querySelector('.btn-dot'); // not done implementing this one

//event that get value from each number button clicked
numberBtns.forEach(btn => btn.addEventListener('click', () => {
    displayValue.textContent += btn.textContent;
}));

//event that display 'dot' and if textContent string is empty it display '0.'
btnDot.addEventListener('click', () => {
    if(displayValue.textContent == '') {
        displayValue.textContent += '0.';
    }

    if(!displayValue.textContent.includes('.')) {
        displayValue.textContent += '.';
    }     
});

//event that delete everything from "screen"
btnDelete.addEventListener('click', () => {
    displayValue.textContent = '';
    displayResult.textContent = '';
});

//event that display result
equalBtn.addEventListener('click', () => {
    let printResult;
    let firstNumber;
    let operator;
    let secondNumber;
    let splitValue;
    
    if (displayValue.textContent.includes(' ')) {
        displayValue.textContent.split(' ');
    }
    displayResult.textContent = printResult;
});

function operate(operator, firstNumber, secondNumber) {
    if (operator == '*') {
        multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        devision(firstNumber, secondNumber);
    } else if (operator == '+') {
        add(firstNumber, secondNumber);
    } else if (operator == '-') {
        subtract(firstNumber, secondNumber);
    }
}

function multiply(expression) {
    let x = expression.firstNumber;
    let y = expression.secondNumber;
    let result = parseFloat(x) * parseFloat(y);
    return result;
}

function devision(expression) {
    let x = expression.firstNumber;
    let y = expression.secondNumber;
    let result = parseFloat(x) / parseFloat(y);
    return result.toFixed(3);
}

function add(expression) {
    let x = expression.firstNumber;
    let y = expression.secondNumber;
    let result = parseFloat(x) + parseFloat(y);
    return result;
}

function subtract(expression) {
    let x = expression.firstNumber;
    let y = expression.secondNumber;
    let result = parseFloat(x) - parseFloat(y);
    return result;
}

// if (displayValue.textContent.includes(' ')) {
//     splitValue = displayValue.textContent.split(' * ');
//     firstNumber = splitValue[0];
//     secondNumber = splitValue[1];
//     operator = '*';
//     let storeMultiplication = new StoreValues(firstNumber, operator, secondNumber);
//     printResult = multiply(storeMultiplication);
// }
