/*
Array
    1. An array in JavaScript is a data structure used to store a collection of values in a single variable.
    2. These values, known as "elements", can be of any data type (e.g., numbers, strings, objects, or even other arrays).
    3. Arrays in JavaScript are dynamic, meaning their size can change, and they support powerful built-in 
    methods for manipulation.
    4. JavaScript array are resizeable and can contain a mix of different data types
    5. Array element must be accessed using non-negative integers (or their respective string form) as indexes.

*/

// Declaring and Initializing

let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)

const frouts = ["apple", "mango", "orange"]
// console.log(frouts)

const enptyArry = []
// console.log(enptyArry)



// Accessing Array Elements

// Elements in an array are accessed using index numbers, starting from 0.

const colors = ['red', 'green', 'blue']
// console.log(colors[0])
// console.log(colors[2])



// Common Methods

// 1. Adding Elements
// push() => Adds to the end of the array.

numbers.push(6)
numbers.push(7)
// console.log(numbers)

// unshift() => Adds to the beginning of the array.

numbers.unshift(0)
// console.log(numbers)



// 2. Removing Elements
// pop() => Removes the last element.

numbers.pop()
// console.log(numbers)

// shift() => Removes the first element.

numbers.shift()
// console.log(numbers)



// 3. Searching and Filtering

// indexOf() => Finds the index of an element.

// console.log(numbers.indexOf(3))


// includes() => Checks if an element exists.

// console.log(numbers.includes(5))
// console.log(numbers.includes(9))



/*
join()
    The join() method in JavaScript is used to combine all the elements of an array into a single string.
    You can specify a separator (a string) to insert between each element during the joining process.
    If no separator is provided, a comma (,) is used by default.
Syntax
    array.join([separator])
*/ 

const joinFrout = frouts.join(", ")
// console.log(joinFrout)
// console.log(typeof joinFrout)



// 4. Modifying and Combining

// slice() Method
// The slice() method is used to extract a portion of an array into a new array without modifying the original array

const arr = [1, 2, 3, 4, 5]
// console.log(arr)

const arr1 = arr.slice(1, 4) // start inclusive and end exclusive
// console.log(arr1) // [2, 3, 4]
// console.log(arr) // [1, 5]


// splice() Method
// The splice() method is used to add, remove, or replace elements in an array by modifying the original array.

// Sytax => array.splice(start, deleteCount, item1, item2, ...)

const arr2 = arr.splice(1, 3)
// console.log(arr2)
const remove = arr
// console.log(remove)

// adding element 

const score = [1, 2, 3]
score.splice(1, 0, "a", "b" )
// console.log(score)


// Replacing element

const nums = [1, 2, 3, 4];
nums.splice(1, 2, "x", "y"); // Removes 2 elements at index 1 and adds "x", "y"
console.log(nums); // [1, "x", "y", 4]
