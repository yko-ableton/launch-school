let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };

  // you can access the name of the person by person.name

  // 2nd exercise

  all listed values are valid keys

  let myArray = {
      name: 'yukino',
      age: 28,
      length: 2
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

let obj = {
    b: 2,
    a: 1,
    c: 3,
  };

let objKeys = Object.keys(obj)
let upperKeys = objKeys.map((i) => i.toLocaleUpperCase());

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// for loop iterates over all of the object's keys including the prototype object. However, for each iterates only over the object's own properties

let objToCopy = {
    foo: 1,
    bar: 2,
  };
  
  let newObj = copyObj(objToCopy);
  console.log(newObj.foo);    // => 1
  console.log(newObj.bar);    // => 2
  
  let newObj2 = copyObj(objToCopy, [ 'foo' ]);
  console.log(newObj2.foo);   // => 1
  console.log(newObj2.bar);   // => undefined

function copyObj(sourceObj, keys) {
    let destinationObj = {};

    if (keys) {
        keys.forEach(function(key) {
            destinationObj[key] = sourceObj[key];
        });
        return destinationObj;
    } else {
        return Object.assign(destinationObj, sourceObj)
    }
}

let foo = {
    a: 'hello',
    b: 'world',
  };
  
  let qux = 'hello';
  
  function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
  }
  
  bar(foo, qux);
  
  console.log(foo.a);
  console.log(qux);

  // the following program will log hi and hello. this is because objects are mutable, but strings are not.z