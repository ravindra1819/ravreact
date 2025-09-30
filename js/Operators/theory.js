// =======================
// Operators in JavaScript
// =======================

// Operators are special symbols that are used to perform operations on values or variables.

// -----------------------
// Types of Operators
// -----------------------
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison (Relational) Operators
// 4. Logical Operators
// 5. Increment and Decrement Operators
// 6. typeof Operator
// 7. Ternary Operator (?:)
// 8. Bitwise Operators


// -------------------------------------------------
// 1. Arithmetic Operators (+, -, *, /, %, **)
// -------------------------------------------------
const num1 = 1000; 
const num2 = "200";   // string, but JS does implicit conversion for -, *, /, %

console.log(`
Arithmetic Operators:
---------------------
num1 + num2  : ${num1 + num2}   // 1000200 (string concatenation)
num1 - num2  : ${num1 - num2}   // 800
num1 * num2  : ${num1 * num2}   // 200000
num1 / num2  : ${num1 / num2}   // 5
num1 % num2  : ${num1 % num2}   // 0
num1 ** 2    : ${num1 ** 2}     // 1000000
`);

// Note: + is special because if one operand is a string, it does concatenation.


// -------------------------------------------------
// 2. Assignment Operators (=, +=, -=, *=, /=, %=, **=)
// -------------------------------------------------
let num3 = 2000;

num3 += 1000;   // 3000
num3 -= 1000;   // 2000
num3 *= 2;      // 4000
num3 /= 100;    // 40
num3 %= 7;      // 5
num3 **= 2;     // 25

console.log(`Assignment Operators result: ${num3}`);


// -------------------------------------------------
// 3. Comparison Operators (==, ===, >, <, >=, <=, !=, !==)
// -------------------------------------------------
const num4 = 7000;
const num5 = 4000;
const num6 = "7000";   // string

console.log(`
Comparison Operators:
---------------------
num4 > num5  : ${num4 > num5}     // true
num4 < num5  : ${num4 < num5}     // false
num4 >= num5 : ${num4 >= num5}    // true
num4 <= num5 : ${num4 <= num5}    // false
num4 == num6 : ${num4 == num6}    // true (loose equality, type coercion)
num4 === num6: ${num4 === num6}   // false (strict equality, checks type too)
num4 != num6 : ${num4 != num6}    // false
num4 !== num6: ${num4 !== num6}   // true
`);


// -------------------------------------------------
// 4. Logical Operators (&&, ||, !)
// -------------------------------------------------
// Truth table reminder:
// A    B   A&&B   A||B   !A
// 0    0     0      0     1
// 0    1     0      1     1
// 1    0     0      1     0
// 1    1     1      1     0

if (num4 >= num5 && num4 >= num6) {
    console.log(`num4 is greatest`);
} else if (num5 > num6) {
    console.log(`num5 is greatest`);
} else {
    console.log(`num6 is greatest`);
}

console.log(true && true && true && false && true);        // false
console.log((true && true) || (true && false) || true);    // true


// -------------------------------------------------
// 5. Increment & Decrement Operators (++ / --)
// -------------------------------------------------
let a = 10;

// Pre-increment (++a): increases first, then returns
let b = ++a;  
console.log(`Pre-Increment: a = ${a}, b = ${b}`);  // a=11, b=11

// Post-increment (a++): returns first, then increases
let c = a++;
console.log(`Post-Increment: a = ${a}, c = ${c}`); // a=12, c=11

// Pre-decrement (--a)
let d = --a;
console.log(`Pre-Decrement: a = ${a}, d = ${d}`);  // a=11, d=11

// Post-decrement (a--)
let e = a--;
console.log(`Post-Decrement: a = ${a}, e = ${e}`); // a=10, e=11


// -------------------------------------------------
// 6. typeof Operator
// -------------------------------------------------
console.log(`
typeof Examples:
----------------
typeof num1 : ${typeof num1}   // number
typeof num2 : ${typeof num2}   // string
typeof true : ${typeof true}   // boolean
typeof null : ${typeof null}   // object (JS quirk)
typeof []   : ${typeof []}     // object (array is special object)
typeof {}   : ${typeof {}}     // object
`);


// -------------------------------------------------
// 7. Ternary Operator ( condition ? expr1 : expr2 )
// -------------------------------------------------
let age = 20;
let canVote = (age >= 18) ? "Yes, eligible" : "No, not eligible";
console.log(`Ternary Operator: Can vote? ${canVote}`);


// -------------------------------------------------
// 8. Bitwise Operators (&, |, ^, ~, <<, >>, >>>)
// -------------------------------------------------
// Work on binary representation
let x = 5;  // 0101
let y = 3;  // 0011

console.log(`
Bitwise Operators:
------------------
x & y  : ${x & y}   // 0101 & 0011 = 0001 => 1
x | y  : ${x | y}   // 0101 | 0011 = 0111 => 7
x ^ y  : ${x ^ y}   // 0101 ^ 0011 = 0110 => 6
~x     : ${~x}      // bitwise NOT (-(x+1)) => -6
x << 1 : ${x << 1}  // shift left => 1010 => 10
x >> 1 : ${x >> 1}  // shift right => 0010 => 2
x >>> 1: ${x >>> 1} // unsigned shift right => 2
`);




