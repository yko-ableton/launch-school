1.
console.log(greeting);

var greeting = 'Hello world!';
// the log will be undefined 

2.
console.log(greeting);

let greeting = 'Hello world!';
// there will be an error. In contrast to var variables, let variables are not accessible before they are declared. For that reason the above code raises an error.

3.
if (true) {
    let myValue = 20;
  }
  
  console.log(myValue);
// There will be an error saying that myValue is not defined, because variables declared with let are block scoped. 

4.
function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
    }
  }
  
  myFunction();
// the code logs 1

5.
function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
      let a = 2;
      console.log(a);
    }
  }
  
  myFunction();
// the code will throw an error

6.
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
// the code will log false, because because the scope of b declared on line 5 is the body of the if statement, and it is not accessible in any outer scope.

7.
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
// the code logs 1, because the variable declared is at the top and therefore is accessible.

8.
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
// the code logs 2

9.
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
// there will be an error, because Variables declared by const are block scoped and cannot be reassigned

10. 
const a = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  function myFunction() {
    a.firstName = 'Jane';
  }
  
  myFunction();
  
  console.log(a);
// will just log the object