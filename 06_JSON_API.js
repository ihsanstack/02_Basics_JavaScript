/*
What is JSON?
    JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data. It is easy for both humans and machines to read and write, making it widely used in web development for data communication between servers and clients.

Key Features of JSON:
1. Text-Based Format:
    JSON is stored as plain text, making it easy to share across platforms.
2. Structure:
    Uses key-value pairs like objects in JavaScript.
    Supports arrays, numbers, strings, booleans, null, and objects.
3. Language-Independent:
    Although derived from JavaScript, JSON can be used in most programming languages.  
    
JSON Syntax:

    Objects: Represented by curly braces {}.
    Arrays: Represented by square brackets [].
    Keys are strings, and values can be strings, numbers, objects, arrays, booleans, or null 
    
Example:
    {
        "name": "Ihsan",
        "age": 18,
        "isStudent": true,
        "skills": ["HTML", "CSS", "JavaScript"],
        "address": {
            "city": "Haripur",
            "country": "Pakistan"
        }
    }

*/





/*
What is an API?
    API (Application Programming Interface) is a set of rules and protocols that allows different software systems to communicate with each other. APIs enable developers to access and use functionalities or data from another application, service, or library.

Key Features of APIs
1. Interface for Communication:
    APIs act as a bridge between client and server.
2. Platform Independent:
    APIs can work across different platforms and programming languages.
3. Access to Resources:
    APIs provide access to services like databases, external tools, or functionalities.    

How APIs Work
Request:
    The client sends a request to the server, usually in the form of HTTP methods like GET, POST, PUT, or DELETE.
Response:
    The server processes the request and sends back a response, often in JSON format.    
    
Example: API Workflow
    A weather API receives a GET request for today's weather in Haripur.
    The server processes the request and sends back a JSON response:
    
    {
        "city": "Haripur",
        "temperature": "30°C",
        "condition": "Sunny"
    }

JSON and APIs Together
    APIs often use JSON as the format for sending and receiving data because it is lightweight and easily understandable by both machines and humans.    
*/