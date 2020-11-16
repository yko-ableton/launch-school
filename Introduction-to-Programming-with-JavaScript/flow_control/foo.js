false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113');

  // the function will log product2, product3, and product not found because there are no breaks

  if (foo()) {
      return 'bar';
  } else {
      return quix();
  }

  function isArrayEmpty(arr) {
    if (arr) {
      console.log('Not Empty');
    } else {
      console.log('Empty');
    }
  }
  
  isArrayEmpty([]);   // [] is an empty Array

  // it will output not empty

  function allCaps(str) {
      if (str.length > 10) {
          return str.toUpperCase();
      } else {
          return str;
      }
  }

  function numberRange(num) {
      if (num >= 0 || num <= 50) {
          console.log(`${num} is between 0 and 50`)
      } else if (num > 50 || num <= 100) {
          console.log(`${num} is between 51 and 100`)
      } else if (num > 100) {
          console.log(`${num} is greater than 100`)
      } else if (num < 0) {
        onsole.log(`${num} is less than 0`)
      }
  }


let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
// the following causes an infinite loop because the loop condition never becomes false

for (let i = 0; i < 5;) {
    console.log(i += 1);
  }

  // this code will not produce an error, because the arguments are optional. i is incremented on the second line.

  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let tries = 0;
  let result;

  do {
    result = randomNumberBetween(1, 6);
    tries += 1;
  } while (result <= 2);
  
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');