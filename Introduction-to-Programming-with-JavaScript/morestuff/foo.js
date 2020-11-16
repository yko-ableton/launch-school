let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// the code will log [1,4,3]

$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

    // the following error is telling me that the variable greeting was never defined 

    console.log(Math.sqrt(37))

    console.log(Math.max(1,6,3,2))

    function doSomething(string) {
        return string.split(' ').reverse().map((value) => value.length);
      }

      // the following function will split the string where there is a space and print out the length of each word


      function allMatches(words, pattern) {
          return words.filter((word) => pattern.test(word));
      }

// exception handling is used to deal with errors in a manageable and predictable way. It uses the try/catch statement to catch exceptions that the code in the tr block raises and lets the programmer deal with the problem in a way that makes sense to them. 

function isNotANumber(value) {
    return value !== value;
}

function isNotNegZero(value) {
    return 1 / value === -Infinity;
}

// if you apply ++ to a string, JS coerces it into a number. But the return value is still 5 because the post increment operater returns the original value of y and not the incremented value. 