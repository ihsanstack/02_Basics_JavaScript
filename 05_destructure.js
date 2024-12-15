/*
Destructuring:
    Destructuring is a convenient way to unpack values from arrays or properties from objects into individual variables. It makes code cleaner and reduces the need for repetitive access to properties or indices.

Syntax of Array:
    const [variable1, variable2, ...rest] = array;
    
Key Points:
    The order of variables corresponds to the order of elements in the array.
    You can use the rest operator (...rest) to collect remaining elements. 
    

Syntax of an Object:
    const { key1, key2, ...rest } = object;
    
Key Points
    The variable names must match the property names of the object.
    The rest operator (...) collects remaining properties into a new object.
    
    
Advantages of Destructuring:
    1. Cleaner Code: Reduces repetitive code for accessing properties or elements.
    2. Improved Readability: Easy to understand what’s being extracted.
    3. Flexible Assignments: Supports default values, renaming, and rest properties.    
*/


const frouts = ['Apple', 'Orange', 'Mango', 'Banana', 'Cherry']

const [first, second, ...rest] = frouts

// console.log(first)
// console.log(second)
// console.log(rest)



const user = {
    name: 'Ihsan',
    age: 18,
    email: 'ihsan@google.com',
    country: 'Pakistan',
    provision: 'Punjab'
}

const {name, age, email, ...otherDetails} = user

// console.log(name)
// console.log(age)
// console.log(email)
// console.log(otherDetails)




// Default Value:

const score = [45]

const [x = 0, y = 0] = score

console.log(x) // output 45
console.log(y) // output 0


const student = {
    name: 'Ihsan Ullah',
    rollNum: 71,
    department: "IT",
    programe: "BS-AI"
}

const {name: studentName, rollNum, department, programe, university = "UOH"} = student

console.log(studentName)
console.log(department)
console.log(programe)
console.log(university)