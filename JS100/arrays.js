1.
function first(arr) {
    return arr[0];
}

2.
function first(arr) {
    return arr[arr.length -1];
}

3.
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');

4.
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split('');

5.
let scores = [96, 47, 113, 89, 100, 102];
let count = 0;
for (let i = 0; i < scores.length; i += 1) {
    if (scores[i] >= 100) {
        count += 1;
    }
}
console.log(count)

6.
let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

for (let i = 0; i < vocabulary.length; i += 1) {
    for (let x = 0; x < vocabulary[i].length; x += 1) {
        console.log(vocabulary[i][x]);
    }
}

7.
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
// the output will be false, because JS compares whether two objects are strictly equal by checking whether they are the same object

7.
function filter(input) {
    input.isArray();
  }

8.
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(element, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === element) {
        return true;
      }
    }
  
    return false;
  }

9.
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
passcode.join('-');

10.
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
    let checkedItem = groceryList.shift();
  
    console.log(checkedItem);
  }