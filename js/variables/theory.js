// ===============================
// 📘 Variables in JavaScript
// ===============================

// Variables → Containers to store values (data).
// JavaScript is dynamically typed → variable type is decided at runtime.

// Syntax:
// keyword variableName = value;


// ===============================
// 🔹 Types of variable keywords
// ===============================

// 1. var (ES5)  → Function-scoped
// 2. let (ES6) → Block-scoped
// 3. const (ES6) → Block-scoped, cannot be reassigned


// ===============================
// 🔹 var vs let vs const
// ===============================

// var → Declaration ✅ | Initialization ✅ | Re-init ✅ | Redeclare ✅
var city = "Hyderabad";
var city = "Bangalore"; // allowed (redeclaration)
console.log("City with var:", city);

// let → Declaration ✅ | Initialization ✅ | Re-init ✅ | Redeclare ❌
let state = "Telangana";
state = "Karnataka"; // re-init allowed
// let state = "Tamil Nadu"; ❌ Error
console.log("State with let:", state);

// const → Declaration ✅ (must init) | Initialization ✅ | Re-init ❌ | Redeclare ❌
const country = "India";
// country = "USA"; ❌ Error: reassignment not allowed
console.log("Country with const:", country);


// ===============================
// 🔹 Rules of Naming Variables
// ===============================

// ✅ Allowed → letters, numbers (not at start), _ , $
// ❌ Not Allowed → spaces, starting with numbers, reserved keywords, special Characters

const employeeId = 123456;         // ✅ camelCase
let employee_name = "Vamsee";     // ✅ snake_case (not preferred)
let EmployeeName = "Krishna";     // ✅ but not recommended (PascalCase usually for classes)


// ===============================
// 🔹 const special case
// ===============================

// For objects/arrays → reference cannot be reassigned, but values inside can be modified
const user = { name: "Vamsee" };
user.name = "Krishna"; // ✅ allowed
console.log("Const object value updated:", user);