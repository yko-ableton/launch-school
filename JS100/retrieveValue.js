1.
let student = {
    name: 'Carmen',
    age: 14,
    grade: 10,
    courses: ['biology', 'algebra', 'composition', 'ceramics'],
    gpa: 3.75,
  };

student.courses;

2.
let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
  };

jane.location.country;

3.

let fido = {
    name: 'Fido',
    species: 'Labrador Retriever',
    color: 'brown',
    weight: 16,
  };

fido.age = 3
fido['favorite food'] = 'pasta'
  
4.
let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    greet: function (name) {
        console.log(`Hej, ${name}!`);
    }
  };
  
  jane.greet('Bobby'); // Hej, Bobby!

5.
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // prefix: Pacific

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // Indian: Pacific
// bracket notation accepts expressions, including variables but the dot notation does not.

6.
let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
      console.log('Harr Harr!');
    },
  };
  
  for (let prop in obj) {
    if (prop === true) {
      console.log("It's true!");
    }
  }
//The condition of our if statement on line 11 returns false for all properties, because property names are always strings, while the body of our for loop looks for the Boolean value true.

7.
let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };

let keys = Object.keys(vehicle);

8.
let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };

let nestedArray = Object.entries(person);
  
9.
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let obj = {};
for (let i = 0; i < nestedArray.length; i++) {
    obj[nestedyArray[i][0]] = nestedyArray[i][1]
}

10.
function clone(obj) {
  return Object.assign({}, obj);
}