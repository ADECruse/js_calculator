const display = document.querySelector('#display-result');
const digit = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let displayValue = "";
let display2 = [];
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

// if (arr.operator === divide) {
//     if (arr.firstNum || arr.secondNum === 0) {
//         window.alert("You can't divide by zero!");
//     } else {
//         console.log(c);
//         return c;
//     }
// }


const nextFunction = function() {
    storedValues.secondNum = parseFloat(display.textContent);
    console.log(this.id);
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
    display.textContent = storedValues.firstNum;
    display2 = [];
    decimalClicked = false
};


//Button functions

digit.forEach(event => event.addEventListener('click', e => {
    display2.push(e.target.textContent)
    // if (e.target.textContent === '.') {
    //     decimal = true;
    // }
    display.textContent = display2.reduce(reducer);
}));

decimalButton.addEventListener('click', e => {
    if (decimalClicked === false) {
        display2.push('.')
        display.textContent = display2.reduce(reducer);
        decimalClicked = true
    }
});

operator.forEach(event => event.addEventListener('click', nextFunction))

equals.addEventListener('click', function() {
    storedValues.secondNum = parseFloat(display.textContent);
    display.textContent = operate(storedValues)
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
    display2 = [];
    display.textContent = "0";
    decimalClicked = false
} )

