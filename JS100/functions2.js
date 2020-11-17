1.
function greet(greeting = 'Hello') {
    console.log(greeting + ', world!');
  }

2.
function greet(greeting = 'Hello', recipient = 'world') {
    console.log(`${greeting}, ${recipient}!`);
  }

3.
function greeting() {
    return 'Good morning';
  }
  
  function recipient() {
    return 'Launch School';
  }

4.
function greet() {
    console.log(`${greeting()}, ${recipient()}!`)
}

5.
function calculateBMI(height, weight) {
    return (weight / (height / 100) **2).toFixed(2)
}

6.
function catAge(humanYears) {
    switch(humanYears) {
      case 0:
        return 0;
      case 1:
        return 15;
      case 2:
        return 24;
      default:
        return 24 + (humanYears - 2) * 4;
    }
  }

7.
function removeLastChar(str) {
    return str.substring(0, str.length - 1)
}

8.
const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

9.
let initGame = () => 
    ({
        level: 1,
        score: 0
    });
  
  let game = initGame();