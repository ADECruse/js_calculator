const displayResult = document.querySelector('#display-result');
const digit = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let currentInputValues = [];
let decimalClicked = false;

// Operator functions

const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2; 
};

let storedValues = {
    operator: add,
    firstNum: 0,
    secondNum: 0,
};

const operate = function(arr) {
    let a = arr.firstNum;
    let b = arr.secondNum;
    let c = arr.operator(a,b); 
    return c
};

const nextFunction = function() {
    storedValues.secondNum = parseFloat(displayResult.textContent);
    storedValues.firstNum = operate(storedValues);
    switch (this.id) {
        case "add":
            storedValues.operator = add;
            break;
        case "subtract":
            storedValues.operator = subtract;
            break;
        case "multiply":
            storedValues.operator = multiply;
            break;
        case "divide":
            storedValues.operator = divide;
            break;
    }
    displayResult.textContent = storedValues.firstNum;
    currentInputValues = [];
    decimalClicked = false
};


//Button functions

digit.forEach(event => event.addEventListener('click', e => {
    currentInputValues.push(e.target.textContent)
    // if (e.target.textContent === '.') {
    //     decimal = true;
    // }
    displayResult.textContent = currentInputValues.reduce(reducer);
}));

decimalButton.addEventListener('click', e => {
    if (decimalClicked === false) {
        currentInputValues.push('.')
        displayResult.textContent = currentInputValues.reduce(reducer);
        decimalClicked = true
    }
});

operator.forEach(event => event.addEventListener('click', nextFunction))

equals.addEventListener('click', function() {
    storedValues.secondNum = parseFloat(displayResult.textContent);
    displayResult.textContent = operate(storedValues)
    storedValues.firstNum = 0;
    storedValues.secondNum = 0;
    decimalClicked = false
    console.table(storedValues);
}); 

clear.addEventListener('click', function() {
    storedValues = {
        operator: add,
        firstNum: 0,
        secondNum: 0,
    }
    currentInputValues = [];
    displayResult.textContent = "0";
    decimalClicked = false
} )

