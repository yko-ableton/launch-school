1.
false, null, undefined, 0, NaN, '', -0, 0n

2.
let randomNumber = Math.round(Math.random());

if (randomNumber) {
    console.log('Yes!');
} else {
    console.log('No.');
}

3.
let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.')

4.
let weather = 'sunny';

if (weather === 'sunny') {
    console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
    console.log("Grab your umbrella.");
} else {
    console.log("Let's stay inside.");
}

5.
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
// Will log neigh, tweet tweet, cricket

6. 
let weather = 'stormy';

switch (weather) {
  case 'stormy':
    console.log('no');
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  default:
    console.log("Let's stay inside.");
}

7.
if (false || true) {
    console.log('Yes!');
  } else {
    console.log('No...');
  }
  // will log Yes!

8.
if (true && false) {
    console.log('Yes!');
  } else {
    console.log('No...');
  }
// will log No

9.
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);
// will log 3.99

10.
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
// true

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
// the parentheses is necessary because it indicates precedence 