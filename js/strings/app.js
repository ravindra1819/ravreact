// --------------------------- STRING IN JAVASCRIPT --------------------------- //
// A **String** in JavaScript is a sequence of characters enclosed in:
// - Single quotes ('')
// - Double quotes ("")
// - Template literals (``) — allows embedded expressions and multiline text.

// --------------------------- EXAMPLES --------------------------- //
let firstName = "Ravindra";
let lastName = 'Reddy';
let fullName = `Sanivarapu ${firstName} ${lastName}`; // Template literal usage
console.log(fullName); // Output: Sanivarapu Ravindra Reddy

// --------------------------- WHY STRINGS? --------------------------- //
// Strings are used to represent textual or character-based data like:
// - User names → "Vamsi Krishna"
// - Emails → "test@example.com"
// - Messages → "Your OTP is 4568"
// - Product descriptions → "Wireless Bluetooth Headphones"
// - JSON data → '{"name": "John", "age": 30}'

let userMessage = "Your OTP is 4568";
console.log(userMessage);

// --------------------------- STRING INFO --------------------------- //
// ✅ Strings are IMMUTABLE → once created, they cannot be changed.
// Any modification creates a **new string**.
// ✅ Strings are INDEX-BASED → each character has a position number starting from 0.

let word = "Code";
console.log(word[0]); // 'C'
console.log(word[1]); // 'o'
console.log(word[2]); // 'd'
console.log(word[3]); // 'e'

// --------------------------- STRING PROPERTIES --------------------------- //
console.log(word.length); // Output: 4

// --------------------------- STRING METHODS --------------------------- //
let sentence = "    Javascript is Stunning & Stunning   ";
console.log("Original:", sentence);

// ✅ toUpperCase() - Converts to uppercase
console.log(sentence.toUpperCase());

// ✅ toLowerCase() - Converts to lowercase
console.log(sentence.toLowerCase());

// ✅ trim() - Removes spaces from both ends
console.log(sentence.trim());

// ✅ trimStart() - Removes spaces only from start
console.log(sentence.trimStart());

// ✅ trimEnd() - Removes spaces only from end
console.log(sentence.trimEnd());

// --------------------------- EXTRACTION METHODS --------------------------- //
// ✅ slice(start, end) - Extracts part of string; supports negative indexes
const language1 = sentence.slice(-10, -1);
console.log("Slice Output:", language1);

// ✅ substring(start, end) - Similar to slice but does NOT accept negative indexes
console.log("Substring Output:", sentence.substring(4, 14));

// 🔍 Slice vs Substring
// slice(-5) → Works with negative indexes (counts from end)
// substring(-5) → Treats negatives as 0 (starts from beginning)

// --------------------------- REPLACING STRINGS --------------------------- //
// ✅ replace() - Replaces FIRST occurrence
console.log(sentence.replace("Stunning", "Powerful"));

// ✅ replaceAll() - Replaces ALL occurrences
console.log(sentence.replaceAll("Stunning", "Powerful"));

// --------------------------- SPLITTING STRINGS --------------------------- //
// ✅ split() - Converts string into array based on separator
console.log(sentence.trim().split(" "));
// Example Output: ["Javascript", "is", "Stunning", "&", "Stunning"]

// --------------------------- CONCATENATION --------------------------- //
// ✅ concat() - Combines multiple strings
let result = sentence.trim().concat(". Let us learn it.");
console.log(result);

// You can also use + or template literals:
let combined = `${firstName} ${lastName} loves ${sentence.trim()}`;
console.log(combined);

// --------------------------- SEARCHING --------------------------- //
// ✅ includes() - Checks if substring exists → returns true/false
console.log(sentence.includes("is")); // true

// ✅ indexOf() - Gets first occurrence index
console.log(sentence.indexOf("Stunning")); // Index of first "Stunning"

// ✅ lastIndexOf() - Gets last occurrence index
console.log(sentence.lastIndexOf("Stunning")); // Index of last "Stunning"

// ✅ search() - Similar to indexOf but supports regex
console.log(sentence.search("Stunning"));

// --------------------------- CHARACTER ACCESS --------------------------- //
// ✅ charAt(index) - Returns character at specific index
console.log(sentence.charAt(4));

// ✅ charCodeAt(index) - Returns Unicode of character
console.log(sentence.charCodeAt(4)); // Unicode of 'J' → 74

// --------------------------- CHECKING START / END --------------------------- //
// ✅ startsWith()
console.log(sentence.trim().startsWith("Javascript")); // true

// ✅ endsWith()
console.log(sentence.trim().endsWith("Stunning")); // true

// --------------------------- REPEATING STRINGS --------------------------- //
// ✅ repeat(count)
console.log("Stunning".repeat(3)); // Output: StunningStunningStunning

// --------------------------- TEMPLATE LITERALS ADVANTAGE --------------------------- //
// Multiline strings and variable embedding made easy:
let product = "Laptop";
let price = 85000;
let description = `
Product: ${product}
Price: ₹${price}
Offer: ${price > 50000 ? "Premium Device" : "Budget Friendly"}
`;
console.log(description);

// --------------------------- SUMMARY --------------------------- //
// 🧠 Key Takeaways:
// 1️⃣ Strings are immutable and index-based.
// 2️⃣ You can perform multiple operations: extraction, search, replace, split, etc.
// 3️⃣ Template literals are the most powerful form for dynamic strings.
