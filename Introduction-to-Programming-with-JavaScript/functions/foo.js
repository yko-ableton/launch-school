let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// the console will log 1, because the bar within the function is created in a scope that does not affect anything outside of the scope. 

function greet(prompt){
    let rlSync = require('readline-sync');
    let name = rlSync.question(prompt);
    return name;
}

let firstName = greet("What is your first name? ");
let lastName = greet("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`)

function multiply(prompt) {
    let rlSync = require('readline-sync');
    let num = rlSync.question(prompt);
    return Number(num);
}

let firstNum = multiply("What is your first number? ");
let secondNum = multiply("What is your last number? ");
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
  scream('Yipeee');

// it returns nothing, because the return terminates the function before it can log anything.

function scream(words) {
    return words + '!!!!';
  }
  
  scream('Yipeee');

// it doesn't log anything, because it returns a strig value but it does not do anything with it.