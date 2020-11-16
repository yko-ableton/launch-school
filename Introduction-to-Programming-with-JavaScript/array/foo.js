let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1];
array2.length = 5; // 5

let array3 = [];
array3[-1] = [1]; // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // 3

let array5 = [];
array5[100] = 3; // 101

let myArray = [1, 3, 6, 11, 4, 2,
    4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; i += 1) {
    if (myArray[i] % 2 === 0) {
        console.log(myArray[i]);
    }
}

let mergedArray = myArray.flat(1);
for (let i = 0; i < mergedArray.length; i += 1) {
    if (mergedArray[i] % 2 === 0) {
        console.log(mergedArray[i]);
    }
}

let result = myArray.map(function(i) {
    if (i % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
});

function findIntegers(array) {
    let result = array.filter(function(num) {
        return Number.isInteger(num);
    });
}

function oddLengths(array) {
    let strlength = array.map(function(i) {
        return i.length
    });
    let result = strlength.filter(function(i) {
        return i % 2 === 1
    });
    return result
}

function sumOfSquares(nums) {
    let result = nums.reduce(function(accum, num) {
        return accum + num * num;
    }, 0)
}

function oddLengths(array) {
    let result = array.reduce(function(total, letters) {
        let strlength = letters.length
        if (strlength % 2 === 1) {
            total.push(strlength)
        }
        return total
    }, [])
}

numbers1.includes(3)

arr[1][3] = 606