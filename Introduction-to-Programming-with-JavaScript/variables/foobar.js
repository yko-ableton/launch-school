{
    let foo = 'bar';
  }
  
  console.log(foo);

  // the program outputs nothing or throws an error, because foo is out of scope.

  const NAME = 'Victor';
  console.log('Good Morning, ' + NAME);
  console.log('Good Afternoon, ' + NAME);
  console.log('Good Evening, ' + NAME);
  
  NAME = 'Joe';
  console.log('Good Morning, ' + NAME);
  console.log('Good Afternoon, ' + NAME);
  console.log('Good Evening, ' + NAME);

  // The name will be Victor the first three times and Name = 'Joe' will throw an error, because Victor was declared a constant variable

  let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// the program will log bar, because qux was declared within the scope and therefore, cannot be accessed outside of it.

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// no, this program will not produce an error, because outside and inside the scope, a constant variable is being initialised but not changed. 