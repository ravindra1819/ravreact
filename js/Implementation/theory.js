// ======================================================
// Implementation of JavaScript - Theory Notes
// ======================================================

// JavaScript can be implemented in 3 ways:
// 1. Inline JavaScript
// 2. Internal JavaScript
// 3. External JavaScript

// ------------------------------------------------------
// 1. Inline JavaScript
// ------------------------------------------------------
// - Written directly inside an HTML tag using event attributes
//   like onclick, onmouseover, etc.
// - Example:
//   <button onclick="alert('Hello!')">Click Me</button>
// - Pros: Very quick for small tests.
// - Cons: Hard to maintain, mixes HTML & JS, not reusable.
// ------------------------------------------------------


// ------------------------------------------------------
// 2. Internal JavaScript
// ------------------------------------------------------
// - Written inside <script> tags within the HTML file.
// - Usually placed before the closing </body> tag.
// - Example:
//   <script>
//     document.getElementById("btn").onclick = function() {
//       alert("Button clicked!");
//     }
//   </script>
// - Pros: Keeps JS separate from element tags, more organized.
// - Cons: Still tied to a single HTML file, not reusable.
// ------------------------------------------------------


// ------------------------------------------------------
// 3. External JavaScript
// ------------------------------------------------------
// - Written in a separate .js file (e.g., app.js).
// - Linked to HTML using: <script src="app.js"></script>
// - Example:
//   // app.js
//   document.getElementById("btn").onclick = () => {
//     alert("Clicked from External JS");
//   };
// - Pros:
//   * Code is reusable across multiple pages.
//   * Easier to maintain.
//   * Browser caching improves performance.
// - Cons: Requires an extra HTTP request (but worth it).
// ------------------------------------------------------


// ======================================================
// Summary: Which one to use?
// ======================================================
// Inline   → Quick tests or very small scripts.
// Internal → Page-specific small projects.
// External → Professional projects (recommended).
// ======================================================
