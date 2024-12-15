/*
Object => {}
    An object in JavaScript is a complex data structure used to store collections of related data and functionality. Objects are made up of key-value pairs, where:
    Keys: are property names (strings or symbols).
    Values: can be any data type, including functions (which are then called methods).

Declaring an Object
    There are two primary ways to declare an object in JavaScript:

1. Using a Constructor Function
    A constructor function is a way to create multiple objects with the same structure. It uses the new keyword to instantiate an object

    Singleton

Syntax
    function ConstructorName(parameters) {
        this.property1 = value1;
        this.property2 = value2;
        // Add more properties or methods
    }


2. Using Object Literal
    An object literal is the simplest and most common way to declare an object. It uses curly braces {} to define the object and its properties

Syntax
    const objectName = {
        property1: value1,
        property2: value2,
        // Add more properties or methods
    };

*/ 


// Object literal

const mySymbol = Symbol("key-1")
// Creating a unique Symbol called 'mySymbol' with a description "key-1".
// Symbols are used for creating unique property keys in objects.

const jsUser = { 
    // Declaring an object 'jsUser' to store information about a user

    name: "Ihsan", 
    // The 'name' property stores the user's first name as a string

    [mySymbol]: "Unique Value",
    // Adding a new property to the 'jsUser' object using the Symbol 'mySymbol' as the key.
    // The key is a Symbol, making it a unique property that won't collide with other property names.

    "full name": "Ihsan Ullah", 
    // The 'full name' property stores the user's full name as a string.
    // Note: It has a space in the property name, so it must be accessed using bracket notation.

    age: 18, 
    // The 'age' property stores the user's age as a number

    email: "ihsan@microsoft.com", 
    // The 'email' property stores the user's email address as a string

    isloggedIn: false, 
    // The 'isloggedIn' property is a boolean indicating if the user is currently logged in

    lastLoggedInDays: ['Monday', 'Tuesday', 'Friday']
    // The 'lastLoggedInDays' property is an array storing days when the user last logged in
};

console.log(jsUser.email); 
// Accessing and printing the 'email' property using dot notation
// Output: "ihsan@microsoft.com"

console.log(jsUser["full name"]); 
// Accessing and printing the 'full name' property using bracket notation
// This is necessary because the property name contains a space
// Output: "Ihsan Ullah"

console.log(jsUser["email"]); 
// Accessing and printing the 'email' property using bracket notation
// Output: "ihsan@microsoft.com"

console.log(jsUser[mySymbol])
// Accessing and printing the value of the property with the Symbol 'mySymbol' as the key.
// Output: "Unique Value"




// Change Value

jsUser.email = "ihsanullah@google.com"
// Object.freeze(jsUser) // freeze the objact
// jsUser.name = "Jason"

// console.log(jsUser)



jsUser.greeting = function() {
    return "Hello JS users"
}

jsUser.greeting1 = function() {
    console.log(`Hello JS user ${this["full name"]}`)
    console.log(`Hello JS user ${this.age}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting1())