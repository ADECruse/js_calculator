let displayValue = "0";
const display = document.querySelector('#display-result');
const digit = document.querySelectorAll('.digit');
const addButton = document.querySelector('.operator');
const equals = document.querySelector('#equals');

// Operator functions

const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
	// let multi = 1
	// arr.forEach(element => {
	// 	multi *= element; 
	// });
    // return multi;
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2; 
};

let storedValues = {
    operator: subtract,
    firstNum: 0,
    secondNum: 0,
};

const nextFunction = function() {
    storedValues.firstNum = parseFloat(displayValue);
    displayValue = "0"
    display.textContent = displayValue;
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