// --------------------
// 🧠 EVENT LOOP CONCEPT — TEACHING SCRIPT
// --------------------

// STEP 1: INTRODUCTION
// JavaScript is single-threaded — it runs one task at a time on the call stack.
// But we still do async things (setTimeout, fetch, Promises).
// The Event Loop is what makes this possible.

// STEP 2: COMPONENTS
// 1️⃣ Call Stack        → Executes synchronous code line-by-line.
// 2️⃣ Web APIs          → Browser handles async work like timers, fetch, DOM events.
// 3️⃣ Microtask Queue   → High priority async callbacks (Promise.then, queueMicrotask).
// 4️⃣ Macrotask Queue   → Lower priority callbacks (setTimeout, setInterval, fetch).
// 5️⃣ Event Loop        → Keeps checking if Call Stack is empty, then moves queued tasks.

// STEP 3: EXECUTION ORDER
// 1. Run all synchronous code first (Call Stack).
// 2. Async tasks go to Web APIs.
// 3. When done, callbacks move to queues.
// 4. Event Loop:
//    - If stack is empty → run ALL microtasks first.
//    - Then run ONE macrotask.
//    - Repeat forever.

// --------------------
// 🧩 DEMO USING ANIMATED VERSION
// --------------------

// 1️⃣ Click: setTimeout(0)
// - Moves to Web APIs.
// - After 0ms → moves to Callback (Macrotask) Queue.

// 2️⃣ Click: Promise.then(...)
// - Goes straight to Microtask Queue.

// 3️⃣ Click ▶ Play
// - Event Loop starts moving tasks.
// - Watch carefully: Promise (microtask) runs before setTimeout (macrotask).
// console.log("Microtasks always run before Macrotasks!");

// 4️⃣ Click: fetch("/api")
// - Appears in Web APIs for 1 second.
// - When done → moves to Macrotask Queue.
// - After macrotask executes → creates another Promise.then() → Microtask.
// console.log("Fetch callback runs, then fetch.then microtask runs!");

// 5️⃣ Click: Run sync work (500ms)
// - Adds a heavy synchronous task to Call Stack.
// - During this time, all other queues wait.
// console.warn("Long sync task blocks the Event Loop!");

// --------------------
// 🧭 KEY TAKEAWAYS
// --------------------
// ✅ JS is single-threaded, but async via Web APIs.
// ✅ Event Loop checks if Call Stack is empty.
// ✅ Microtasks (Promises) always run before Macrotasks (setTimeout).
// ✅ Blocking code pauses everything.
// ✅ This model keeps JavaScript responsive and efficient.

// --------------------
// 🧩 DEMO SUMMARY COMMANDS (for teaching flow)
// --------------------
// 1. Click: setTimeout(0)
// 2. Click: Promise.then(...)
// 3. Click: ▶ Play
// 4. Observe micro → macro order
// 5. Click: fetch("/api")
// 6. Click: Run sync work (500ms)
// 7. Click: ♻ Reset and repeat
