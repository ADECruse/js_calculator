let displayValue = "";
const display = document.querySelector('#display-result');
const digit = document.querySelectorAll('.digit');
const addButton = document.querySelector('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

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
    operator: null,
    firstNum: 0,
    secondNum: 0,
};

const nextFunction = function() {
    storedValues.firstNum = parseFloat(displayValue);
    displayValue = ""
    storedValues.operator = add;
};

const operate = function(arr) {
    let a = arr.firstNum;
    let b = arr.secondNum;
    let c = arr.operator(a,b);
    // return c(a, b);
    console.log(c);
    display.textContent = c;
};



//Button functions

digit.forEach(event => event.addEventListener('click', e => {
    displayValue = displayValue + e.target.textContent;
    display.textContent = displayValue;
}));

addButton.addEventListener('click', nextFunction);

equals.addEventListener('click', function (params) {
    storedValues.secondNum = parseFloat(displayValue);
    operate(storedValues)
}); 

clear.addEventListener('click', function() {
    storedValues = {
        operator: null,
        firstNum: 0,
        secondNum: 0,
    }
    displayValue = ""
    display.textContent = "0";
} )
    