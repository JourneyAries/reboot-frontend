"use client"
// Last edited: 2025-10-25 11:26:59
// Example for testing Tree-sitter highlighting

// Importing modules (for Node.js, optional)
import fs from 'fs';

// Variables
const greeting = 'Hello, Tree-sitter!';
let counter = 0;

// Function declaration
function sayHello(name) {
  console.log(`${greeting} My name is ${name}.`);
}

// Arrow function
const add = (a, b) => a + b;

// Conditional
if (counter === 0) {
  sayHello('Alice');
} else {
  sayHello('Bob');
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}: ${add(i, 2)}`);
}

// Object and array destructuring
const person = { name: 'Charlie', age: 25 };
const { name, age } = person;

const numbers = [1, 2, 3, 4];
const [first, second] = numbers;

// Template strings and function calls
console.log(`Name: ${name}, Age: ${age}`);
