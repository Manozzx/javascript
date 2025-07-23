// typeof

let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"


// undefined type
/*
let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined
*/

// null type

// boolean type
/*
let a =true;
console.log(typeof(a))
*/

// number type
/*
let a = 10;
let b  = 20;
console.log(a+b)
*/

// string type
/*
let a = 'Hi';
let b  = "Bye";
console.log(a+" "+b)
*/

// bigint type

let pageView = 5456456456254740991n;
console.log(typeof(pageView)); // 'bigint'


// symbol type

// Object type
/*
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person.firstName)
*/

// Array type
/*
const cars = ["Benz", "Volvo", "BMW"];
console.log(cars[0])
*/