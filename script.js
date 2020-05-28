let displayValue = "";
let display2 = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const display = document.querySelector('#display-result');
const digit = document.querySelectorAll('.digit');
const operator = document.querySelector('.operator');
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
    operator: add,
    firstNum: 0,
    secondNum: 0,
};
 //reduce ?
// const nextFunction = function() {

    
//     storedValues.firstNum = parseFloat(displayValue);
//     displayValue = ""
//     storedValues.operator = add;
// };


// const operate = function(arr) {
//     let a = arr.firstNum;
//     let b = arr.secondNum;
//     let c = arr.operator(a,b);
//     // return c(a, b);
//     console.log(c);
//     display.textContent = c;
// };

const operate = function(arr) {
    let a = arr.firstNum;
    let b = arr.secondNum;
    let c = arr.operator(a,b);
    console.log(c);
    return c
};

const nextFunction = function() {
    storedValues.secondNum = parseFloat(display.textContent);
    console.log({storedValues});
    storedValues.firstNum = operate(storedValues);
    storedValues.operator = add;
    display.textContent = storedValues.firstNum;
    display2 = [];
};

//Button functions

// digit.forEach(event => event.addEventListener('click', e => {
//     displayValue = displayValue + e.target.textContent;
//     display.textContent = displayValue;
// }));

digit.forEach(event => event.addEventListener('click', e => {
    // displayValue = displayValue + e.target.textContent
    display2.push(e.target.textContent)
    display.textContent = display2.reduce(reducer);
}));

operator.addEventListener('click', nextFunction);

// equals.addEventListener('click', function (params) {
//     storedValues.secondNum = parseFloat(displayValue);
//     operate(storedValues)
// }); 

equals.addEventListener('click', function (params) {
    storedValues.secondNum = parseFloat(display.textContent);
    display.textContent = operate(storedValues)
    storedValues.firstNum = 0;
    storedValues.secondNum = 0;
    console.table(storedValues);
}); 

// clear.addEventListener('click', function() {
//     storedValues = {
//         operator: null,
//         firstNum: 0,
//         secondNum: 0,
//     }
//     displayValue = ""
//     display.textContent = "0";
// } )

clear.addEventListener('click', function() {
    storedValues = {
        operator: add,
        firstNum: 0,
        secondNum: 0,
    }
    display2 = [];
    display.textContent = "0";
} )

