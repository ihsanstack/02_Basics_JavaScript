const user = new Object() // Singleton object 

const anotherUser = {} // Non-singleton object

anotherUser.name = "Ihsan Ullah"
anotherUser.id = 2471
anotherUser.isloggedIn = false

// console.log(anotherUser)


/*
Nesting in Objects?
    Nesting in objects refers to creating objects inside other objects. This allows us to structure and organize complex data hierarchically. Nested objects are accessed by chaining the property keys or indices.
*/

const student = {
    name: "Ihsan",
    age: 18,
    contect: {
        email: "ihsan@google.com",
        phone: "+92301*****5",
    },
    courses: {
        programming: {
            languages: ["JavaScript", "Python", "C++"],
            projects: [
                {title: "Todo App", tech: "JavaScript"}
            ]
        }
    }
}

// console.log(student.contact.email); 
// Output: "ihsan@example.com"
// console.log(student["contact"]["phone"]); 
// Output: "123-456-7890"
// console.log(student.courses.programming.languages[0]); 
// Output: "JavaScript"
// console.log(student.courses.programming.projects[1].title); 
// Output: "Portfolio Website"



// 1. Using the Object.assign() Method
// Object.assign() copies properties from source objects to a target object

const obj1 = {name: "Ihsan", age: 18}
const obj2 = {email: "ihsan@google.com", countary: "Pakistan"}

const combineObj = Object.assign({}, obj1, obj2)

// console.log(combineObj)



// 2. Using the Spread Operator (...)
// The spread operator is a concise and modern way to combine objects.

const margeObj = {...obj1, ...obj2}

// console.log(margeObj)




// Object.keys() & Object.values()

const objKeys = Object.keys(anotherUser); 
// The `Object.keys()` method retrieves an array of all the keys (property names) from the `anotherUser` object.
// Example: If `anotherUser = { name: "Ihsan", id: 18, isloggedIn: false }`, `objKeys` will be `["name", "id", "isloggedIn"]`.

const objValues = Object.values(anotherUser); 
// The `Object.values()` method retrieves an array of all the values from the `anotherUser` object.
// Example: If `anotherUser = { name: "Ihsan", id: 18, isloggedIn: false }`, `objValues` will be `["Ihsan", 2471, false]`.

console.log(objKeys); 
// Logs the array of keys to the console.
// Example output: `["name", "id", "isLoggedIn"]`.

console.log(objValues); 
// Logs the array of values to the console.
// Example output: `["Ihsan", 2471, false]`.



/*
Object.entries()
    The Object.entries() method retrieves an array of key-value pairs from an object. Each key-value pair is represented as a nested array, where the first element is the key, and the second element is the value.
*/

console.log(Object.entries(anotherUser)) // [ [ 'name', 'Ihsan Ullah' ], [ 'id', 2471 ], [ 'isloggedIn', false ] ]


// hasOwnProperty()

console.log(anotherUser.hasOwnProperty("isLoggedIn")); 
// The `hasOwnProperty()` method checks if the `anotherUser` object contains a direct property named "isLoggedIn".
// It returns `true` if the property exists directly on the object (not inherited from its prototype), otherwise `false`.



