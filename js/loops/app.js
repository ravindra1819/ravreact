// ===============================
// 🚀 JavaScript Loops Tutorial
// ===============================

// 🔹 What are Loops?
// A loop is a way to execute a block of code multiple times until a certain condition is met.
// Instead of writing the same code repeatedly, loops allow automation of repetitive tasks.
// Examples: printing numbers, processing arrays, fetching data, etc.


// ===============================
// 🔹 Types of Loops in JavaScript
// ===============================

// 1️⃣ for loop (Entry Controlled)
// 👉 Best for: When you know exactly how many times you want to run the loop (like iterating over an array).

// Syntax:
// for(initialization; condition; increment/decrement){
//      // code block
// }

// Example 1: Print numbers 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example 2: Sum of first 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of first 10 numbers: ${sum}`);

// Example 3: Iterating an array
const products = ["Laptop", "Smartphone", "Headphones", "Coffee Mug", "Tablet"];
for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`);
}


// 2️⃣ while loop (Entry Controlled)
// 👉 Best for: When you don’t know how many times to run the loop in advance; runs until condition becomes false.

// Syntax:
// while(condition){
//      // code block
// }

// Example 1: Countdown timer
let count = 10;
while(count > 0){
    console.log(`Countdown: ${count}`);
    count--;
}

// Example 2: User password validation (conceptual)

let password = "";
while(password !== "admin123"){
    password = prompt("Enter password");
}
console.log("✅ Logged In Successfully");

// Example 3: API data fetching simulation
let page = 1;
while(page <= 3){
    console.log(`📡 Fetching data from page ${page}...`);
    page++;
}


// 3️⃣ do..while loop (Exit Controlled)
// 👉 Best for: When you want to run code at least once, even if the condition is false.

// Syntax:
// do{
//      // code block
// }while(condition);

let num = 0;
do {
    console.log("This runs at least once, even if the condition is false.");
} while (num > 0);


// ===============================
// 🔹 ES6 Loops
// ===============================

// 4️⃣ for..of loop → Arrays
// 👉 Best for: Iterating values directly from arrays.
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

// 5️⃣ for..in loop → Objects
// 👉 Best for: Iterating keys/properties of an object.
const product = {
    id: 1,
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    inStock: true
};

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}


// ===============================
// 🔹 Pattern Printing with Loops
// ===============================

// Example: Print a right-angled triangle pattern
// *
// **
// ***
// ****
// *****

let pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern += "*".repeat(i) + "\n";
}
console.log(pattern);


// ===============================
// ✅ Summary
// ===============================
// for      → Fixed number of iterations (arrays, counters).
// while    → Runs until condition fails (unknown iterations).
// do..while→ Runs at least once before checking condition.
// for..of  → Iterate over arrays.
// for..in  → Iterate over object properties.
