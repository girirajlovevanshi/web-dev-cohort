/*
Objects Practice Questions
Create an object:
Create an object named person with properties: name, age, and city. Access and print the name property.
*/
const person = {
    name : "giri",
    age : 22,
    city : "jaipur"
};

/*
Add and delete properties:
Add a new property email to the person object and then delete the city property. Print the updated object.
*/
person.email  = "giri@giri.giri";
console.log(person);

delete person.city;
console.log(person);

/*
Nested objects:
Create an object student with properties: name, marks (which is an object with math, science, and english as properties). Access and print the math marks.
*/
const student = {
    name : "giri",
    marks : {
        math : 90,
        science : 80,
        english : 96
    }
};
console.log(student.marks.math);
/*
Loop through an object:
Use a for...in loop to iterate over the person object and print all key-value pairs.
*/
for ( let properties in person){
    console.log(`${properties} : ${Object[properties]}`);
    
};

/*
Object methods:
Add a method greet to the person object that returns "Hello, my name is [name]". Call this method and print the output.
*/
person.greek = function(){
    console.log('Hello, my name is ',person.name);   
};

person.greek();
console.log(person);


/*
Arrays Practice Questions
Create and access array elements:
Create an array fruits containing "apple", "banana", and "mango". Print the second element.
*/
let fruits = ["apple", "banana", "mango"];

for ( let fruit in fruits){
    console.log(fruits[fruit]);
    
};
/*
Modify an array:
Add "orange" to the end of the fruits array and "grapes" to the beginning. Print the updated array.
*/
fruits.push("orange");
fruits.unshift("grapes");

console.log(fruits);

/*
Remove elements from an array:
Remove the last element from the fruits array using pop() and the first element using shift(). Print the updated array.
*/
fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);


/*
Loop through an array:
Use a forEach loop to print each element of the fruits array.
*/
fruits.forEach(fruit => {
    console.log(fruit);
    
});

/*
Find elements in an array:
Given an array numbers = [10, 20, 30, 40, 50], use the .find() method to get the first number greater than 25. Print the result.
*/
const numbers = [10, 20, 30, 40, 50];
const firstNumgreater25 = numbers.find((num)=>num >25);

console.log(firstNumgreater25);

/*
Objects (Intermediate Level)
Object with dynamic keys:
Create an object user where keys are dynamically set based on variables. Example:

let key = "email";
let user = { name: "Alice", age: 25 };
Add a new property using the key variable so that user.email = "alice@example.com".
*/
let key = "email";
let user = { name: "Alice", age: 25 };

user[key] = "alice@example.com";

console.log(user.email);

/*
Check if a key exists:
Write a function hasKey(obj, key) that checks if a given key exists in an object and returns true or false.
*/


/*
Merge two objects:
Given two objects:

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
Merge them into a new object where b should have the value from obj2.
*/


/*
Object with computed properties:
Create an object where keys are calculated dynamically using an expression inside square brackets [ ]. Example:

let dynamicKey = "score";
let student = { name: "Emma", [dynamicKey]: 95 };
Print the score value.
*/


/*
Convert object keys to an array:
Given:

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
Write a function that returns an array of all the keys (["brand", "model", "year"]).
*/


/*
Arrays (Intermediate Level)
Filter numbers from an array:
Given an array [1, 5, 8, 10, 15, 20], use the .filter() method to return only numbers greater than 8.
*/


/*
Map an array:
Given an array [2, 4, 6, 8], use .map() to create a new array where each number is squared ([4, 16, 36, 64]).
*/


/*
Reduce an array:
Given:

let numbers = [5, 10, 15, 20];
Use .reduce() to find the sum of all numbers.
*/


/*
Find duplicates in an array:
Write a function that takes an array [1, 2, 2, 3, 4, 4, 5] and returns an array of duplicate values ([2, 4]).
*/


/*
Sort an array of objects:
Given:

let students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 95 }
];
Sort the array in descending order of score
*/


/*


*/

