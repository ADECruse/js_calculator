let displayValue = "0";

const add = function(num1, num2) {
    return num1 + num2;
}

// console.log(add(2, 2))

const subtract = function(num1, num2) {
	return num1 - num2;
}

const multiply = function(num1, num2) {
	// let multi = 1
	// arr.forEach(element => {
	// 	multi *= element; 
	// });
    // return multi;
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2; 
}

const operate = function(operator, num1, num2) {
    return operator(num1, num2);
}

const digit = document.querySelectorAll('.digit');

digit.forEach(event => event.addEventListener('click', e => {
    displayValue = e.target.textContent;
    console.log(displayValue);
}));