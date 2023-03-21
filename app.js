let previousValue = '';
let currentValue = '';
let operator = '';

window.addEventListener('keydown', handleKeyPress);

const displayPrevious = document.querySelector('.display-previous');
const displayCurrent = document.querySelector('.display-current');

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearScreen);

const numberBtn = document.querySelectorAll('.btn-number');
const operatorBtn = document.querySelectorAll('.btn-operation');

const equalBtn = document.querySelector('.btn-equal');
const dotBtn = document.querySelector('.btn-dot');

numberBtn.forEach(number => number.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
}));

operatorBtn.forEach(op => op.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
}));

equalBtn.addEventListener('click', () => {
    if(previousValue != '' && currentValue != '') {
        operate();
    }
});

dotBtn.addEventListener('click', getDecimal);

function handleNumber(num) {
    if (previousValue !== '' && currentValue !== '' && operator === '') {
        previousValue = '';
        displayCurrent.textContent = currentValue;
    }

    if (currentValue.length <= 9) {
        currentValue += num;
        displayCurrent.textContent = currentValue;
    }
}

function handleOperator(op) {
    if (previousValue === '') {
        previousValue = currentValue;
        checkOperator(op);
    } else if (currentValue === '') {
        checkOperator(op);
    } else {
        operate();
        operator = op;
        displayCurrent.textContent = '';
        displayPrevious.textContent = `${previousValue} ${operator}`;
    }
}

function checkOperator(value) {
    operator = value;
    displayPrevious.textContent = ` ${previousValue} ${operator}`;
    displayCurrent.textContent = '';
    currentValue = '';
}

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else if (operator === '/') {
        if (currentValue <= 0) {
            previousValue = "Error!";
            displayResult();
            operator = '';
            return;
        }
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    displayResult();
}

function roundNumber(value) {
    return Math.round(value * 1000000) / 1000000;
}

function displayResult() {
    if (previousValue.length <= 9) {
        displayCurrent.textContent = previousValue;
    } else {
        displayCurrent.textContent = previousValue.slice(0, 9);
    }

    displayPrevious.textContent = '';
    operator = '';
    currentValue = '';
}

function getDecimal() {
    if(currentValue === '') {
        currentValue = '0.';
        displayCurrent.textContent += '0.';
    }

    if(!currentValue.includes('.')) {
        currentValue += '.';
        displayCurrent.textContent += '.';
    }
}

function clearScreen() {
    previousValue = '';
    currentValue = '';
    operator = '';
    displayCurrent.textContent = '';
    displayPrevious.textContent = '';
}

function handleKeyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
    }

    if (e.key === 'Enter' || (e.key === '=' && currentValue != '' && previousValue != '')) {
        operate();
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        handleOperator(e.key);
    }

    if (e.key === '.') {
        getDecimal();
    }

    if (e.key === 'Backspace') {
        handleBackspace();
    }
}

function handleBackspace() {
    if (currentValue !== '') {
        currentValue = currentValue.slice(0, -1);
        displayCurrent.textContent = currentValue;
        if (currentValue === '') {
            displayCurrent.textContent = '';
        }
    }
    if (currentValue === '' && previousValue !== '' && operator === '') {
        previousValue = previousValue.slice(0, -1);
        displayCurrent.textContent = previousValue;
    }
}