1.
for (let i = 0; i <= 10; i +=2) {
    console.log(i);
}
// 0, 2, 4, 6, 8, 10

2.
for (let i = 10; i > 0; i -= 1) {
    console.log(i);
}
console.log('Launch!');

3.
let greeting = 'Aloha!';
for (let i = 1; i <= 3; i += 1) {
    console.log(greeting);
}

4.
for (let i = 1; i <= 100; i += 1) {
    console.log(i*2);
}

5.
let index = 0;
let array = [1, 2, 3, 4];
while (index < array.length) {
    console.log(array[index]);
    index += 1;
}

6.
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let i = 0; i < cities.length; i += 1) {
    if (cities[i] === null) {
        continue;
    }
    console.log(cities[i].length);
}

7.
for (let i = 0; ; i += i) {
    console.log('and on')
    break;
}
// the loop was stuck in an infinite loop, because there was no condition to stop.

8.
let i = 1;
while (i < 40) {
    console.log(num);
    num += 2;
}

9.
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (let i = 0; i <= fish.indexOf('Nemo'); i += 1) {
    console.log(fish[i]);
}

10.
// The difference between the two code snippets is that with a while loop, you are testing for a condition before the first iteration of the loop. A do while loop tests for a condition that is after the first iteration of the loop.