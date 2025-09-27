/**************************************************
 * Day 1 – JavaScript Foundations
 **************************************************/

/* 
1. What is JavaScript?
   - JavaScript is a high-level, interpreted scripting language.
   - Used to make web pages dynamic and interactive.
   - Runs in browsers (Client-Side) and on servers (Node.js).
   - Example: Button click → show popup → done by JavaScript.
*/


/* 
2. Key Terms
--------------------------------------------------
*/

// 🔹 High-level Language
// - Close to human language, easy to read & write.
// - You don’t worry about memory or CPU directly.
// Example:
let x = 10; // Instead of writing binary 1010


// 🔹 Programming vs Scripting
// - Programming (Compiled): Code is fully converted to machine code first.
// - Scripting (Interpreted): Code runs line by line at runtime.
// Analogy:
//   - Compiled → Baking a cake (prepare before eating)
//   - Interpreted → Cooking noodles (cook and eat immediately)


// 🔹 Interpreted Language
// - JS code executes line by line, no need to compile first.
console.log("Hello World"); // Runs instantly in browser or Node.js


// 🔹 Compiler
// - Translates the whole program into machine code before running.
// Example (Java):
// javac MyProgram.java → MyProgram.class → run


// 🔹 Client-Side Scripting
// - Code runs inside the browser (on user’s computer).
// Example: Form validation before sending data to server
function validateForm(email) {
  if (!email.includes("@")) {
    alert("Invalid Email Address");
  }
}
validateForm("testmail.com");


// 🔹 Server-Side Scripting
// - Code runs on the server (using Node.js, PHP, etc.)
// Example: (Node.js server pseudo-code)
/*
const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from Server!");
}).listen(3000);
*/


// 🔹 Dynamically Typed Language
// - No need to declare variable types.
// - JS automatically understands the type.
let y = 5;       // Number
y = "Hello JS";  // Now String → No error


/* 
3. History & Evolution
   - Created by Brendan Eich in 1995 (10 days!).
   - First called Mocha → LiveScript → JavaScript.
   - First appeared in Netscape Navigator 2.0.
   - Standardized as ECMAScript.
   - Now used for web, mobile, desktop, games, IoT.
*/


/* 
4. ECMAScript (ES Versions)
   - ES5 (2009): strict mode, JSON, array methods.
   - ES6 / ES2015 (2015): let, const, arrow functions, classes, promises, modules.
   - Later: async/await, optional chaining, top-level await.
*/


/* 
5. JavaScript Engines
   - Special programs that run JavaScript code.
   - V8 → Google Chrome, Node.js (fastest).
   - SpiderMonkey → Mozilla Firefox.
   - JavaScriptCore → Safari.
   - Chakra → Old Microsoft Edge.
*/


/* 
6. Features of JavaScript
   - Easy to learn, lightweight, cross-platform.
   - Supports both OOP and Functional programming.
   - Event-driven & asynchronous (promises, async/await).
   - Runs everywhere: 
       → Frontend (React, Angular, Vue),
       → Backend (Node.js),
       → Mobile (React Native),
       → Desktop (Electron → VSCode, Slack),
       → Games, IoT, AI.
*/


/**************************************************
 * ✅ Summary for Day 1
 * - What JS is
 * - Scripting vs Programming
 * - Interpreted vs Compiled
 * - Client-side vs Server-side
 * - JS Engines (V8, SpiderMonkey, etc.)
 * - Where JS is used today
 **************************************************/
