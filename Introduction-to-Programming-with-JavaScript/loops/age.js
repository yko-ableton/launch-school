let rlSync = require('readline-sync');

let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);

for (let future = 10; age <= 40; future += 10) {
    console.log(`In ${future} years, you will be ${age + future} years old.`);
}