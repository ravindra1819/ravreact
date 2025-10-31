// Web Storage API :

// Both localStorage and sessionStorage are part of the Web Storage API in Js.
// They allow us to store data directly in the browser as key value pairs without using a database or cookies.
// They are like the browser's built-in mini database, but with small differences in lifetime and scope.

// Why ?
// When we build applications, sometimes we need to save the data temporarliy or permanently on the client side for example :

    // Save a logged-In user's token.
    // Remember theme (dark/light) preference.
    // Store cart items in an eCommerce site.
    // Keep form data if the page reloads.

// Instead of calling API's or storing data on the server every time, we use local or session storage to store directly in the user's browser.



// Local Storage Code examples :

// Save the data :

localStorage.setItem("userName", "VamseeKrishna");

// Retrieve Data :

const user = localStorage.getItem("userName");
console.log(user);

// Remove Item :
localStorage.removeItem("userName");

// clearEverything :

localStorage.clear();

// ThemePrefernce : 

localStorage.setItem("theme", "Dark");
document.body.classList.add(localStorage.getItem("theme"));

// Even after you close and reopen the browser, the theme stays dark.

// Session Storage example :

// Save Data :

sessionStorage.setItem("otp", "378282");

// Retrieve Data :

console.log(sessionStorage.getItem("otp"));

// Auto clears when the tab is closed.