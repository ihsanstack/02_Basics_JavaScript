const colors = ['red', 'green', 'blue']
const score = [11, 12, 13]

colors.push(score)

// console.log(colors) // ['red', 'green', 'blue', [11, 12, 13]]
// console.log(colors.length) // 4
// console.log(colors[3][1]) // output is 12



// Marge two array into one array

/*
    concat(): Combines two arrays into a new one.

    The spread operator (...) in JavaScript is a convenient way to combine two or more arrays into a new array. It expands the elements of an array into individual items, allowing them to be included in another array or operation.
*/

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]

const newArray = arr1.concat(arr2)
// console.log(newArray)


const combineArray = [...arr1, ...arr2]
// console.log(combineArray)


const nums = [[12, 98], [34, 65]]
// console.log(...nums[0], ...nums[1])


// Adding more element

const addElements = [0, ...arr1, 99, ...arr2, 100]
// console.log(addElements)



/*
flat()
    The flat() method in JavaScript is used to create a new array by "flattening" nested arrays into a single-level array. It is particularly useful when working with arrays that contain other arrays (nested arrays) and you want to simplify their structure.
Sytax
    array.flat([depth])
*/

const numbers = [1, 5, 6, [9, 2, 3], 8, 6, [4, 7, [1, 2, 4]]]
const singleArray = numbers.flat(Infinity)

// console.log(singleArray)

// sort() => use for ascinding order
// console.log(singleArray.sort())




// Checks if the argument is an array or not
console.log(Array.isArray("Ihsna")); // Output: false

// Creates an array from an iterable object (like a string)
console.log(Array.from("Ihsna")); // Output: ["I", "h", "s", "n", "a"]

// Tries to create an array from a non-iterable object
console.log(Array.from({ name: "Ihsan", age: 18 })); // Output: []

// Explanation: `Array.from()` requires an **iterable object** (like strings, arrays, or objects with a `[Symbol.iterator]` property).
// Since the object `{ name: "Ihsan", age: 18 }` is not iterable, it returns an empty array.




/*
Array.of()
    The Array.of() method is used to create a new array from a variable number of arguments, regardless of the number or types of arguments.
Syntax
    Array.of(element1, element2, ..., elementN)
*/

console.log(Array.of("Ihsan")) //['Ihsan']
console.log(Array.of(1, 2, 3)) //[1, 2, 3]


const x = 234
const y = 567
const z = 989

console.log(Array.of(x, y, z))