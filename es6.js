// Q1.forEach - log

// Write a function that uses the forEach array method to log every member of an array to the console.The
// function should only take one argument, the array.The function should NOT use a for loop.
var array = [1, 2, 3, 4, 5]

function logNumber(arr) {
    arr.forEach((element) => {
        console.log(element);
    })
}

// logNumber(array);

// Q2.simple - filter

// Write a function called greaterThan10 that uses the filter method to filter an array and only
// return numbers that are greater than 10. The function should take an array of numbers as an argument.

const greaterThan10 = (arr) => arr.filter((element) => element > 10);

console.log(greaterThan10([1, 2, 3, 11, 12, 13])); //returns [11,12,13]
console.log(greaterThan10([11, 2, 3, 1, 22, 4, 33])); //returns [11,22,33]

// Write a
// function called filterEvens that uses the filter method to filter an array and only
// return the even numbers.The
// function should take an array of numbers as an argument, and should not use a loop.

var filterEvens = (arr) => arr.filter(element => element % 2 === 0)

console.log(filterEvens([2, 3, 4, 5, 6]));

// Q4.forEach - sum

// Write a
// function called forEachSum that takes in an array of numbers as an argument and returns the sum of the array.
// The function should use the forEach array method and should NOT use a for loop or while loop.

var forEachSum = (arr) => {
    var runningCount = 0;
    var answer = arr.forEach((element) => {
        runningCount += element;
    })
    return runningCount
}

console.log(forEachSum([1, 2, 3, 4, 5])) // 15

// Q5.implement - forEach

// Write a function called forEach that takes in two arguments: an array and a function.
// forEach should apply the passed in function to every member of the array.It should not return anything.

var forEach = (array, callback) => array.forEach((element) => callback(element))

function log(val) {
    console.log(val);
}
var arr = [1, 2, 3, 4, 5];
forEach(arr, log); // logs 1, 2, 3, 4, 5

// Q6.map - triple - array
// Write a
// function that uses the map array method to triple every member of an array.The
// function should only take one argument, the array.The
// function should NOT use a loop.

var tripple = (arr) => arr.map((element) => element * 3);

console.log(tripple([1, 2, 3, 4, 5])) // 3, 6, 9, 12, 15

// Q7.map - strings - to - nums
// Write a
// function called stringsToNums that takes an array of strings, converts them to numbers, and returns a new array containing those numbers.
// Use the map array method, do not use any loops.

var stringsToNums = (array) => array.map((element) => Number(element));

console.log(stringsToNums(["4", "3", "9"])); //returns [4,3,9])
console.log(stringsToNums(["1", "22", "7"])); //returns [1,22,7]

// Q8.first - letter - uppercase - map

// Write a function that takes a string as a parameter and converts the first letter of each word of the string to upper
// case .However, do not use a for loop, while loop, or forEach.

// Example string:
// 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

uppercaseIt = (str) => {
    var array1 = str.split(' ');
    var newarray1 = [];
    array1.map((elem) => {
        newarray1.push(elem.charAt(0).toUpperCase() + elem.slice(1));
    })
    return newarray1.join(' ');
}
console.log(uppercaseIt("the quick brown fox"))

// Q9.implement - map

// Write a function called map that takes in two arguments: an array and a
// function.map should apply the passed in function to every member of the array, and
// return a new array with the results.

var map = (array, callback) => array.map((element) => callback(element));

var arr = [1, 2, 3, 4, 5];

function double(num) {
    return num * 2;
}

console.log(map(arr, double)); // returns [ 2, 4, 6, 8, 10 ]

// Q10.reduce - sum

// Write a function called sum that uses the reduce method to sum up an array of numbers.Do NOT use a loop.

const sum = (arr) => arr.reduce((element, value) => element + value, 0);

console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20

// Q11.reduce - min

// Write a function called reduceMin that uses the reduce method to
// return the minimum number in an array of numbers.Do NOT use a loop.

const reduceMin = (arr) => arr.reduce((element, i) => i < min ? min = i : min);

// Q12.count - odds - and - evens

// Write a function named countOddsAndEvens that takes an array of numbers as argument.Then function should
// return an object that has two properties: odds and evens, that contain the number of odd numbers in the array, 
// and the number of the even numbers in the array, respectively.Use the reduce method.Do not use a for loop, while loop, or forEach.

function countOddsAndEvens(arr) {
    return arr.reduce((acc, num) => {
        console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
        if (num % 2 === 0) {
            acc.evens += 1
            return acc
        } else {
            acc.odds += 1
            return acc
        }
    }, {
        odds: 0,
        evens: 0
    })
}
console.log(countOddsAndEvens([11, 2, 36, 4, 15]));