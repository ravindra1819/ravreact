// Hoisting :
// During the compilation phase, JavaScript moves the declarations of variables and functions to the top of their containing scope before executing the code.


// Example :

console.log(userName);
var userName = "Alice";


// Internal, Js does this :

var userName;
console.log(userName);
userName = "Alice";

// Initializing an app using hoisting

// initializeApp(); // Works because of hoisting

// var appName = "MyApp";

// function initializeApp() {
//     console.log("App Name:", appName);
//     setUpDBConnection();
//     loadUserSettings();
// } 

// Scope :
// Scope determines the accessibility of variables and functions in different parts of the code. 


// Lexical Scoping :
// Lexical scoping means that the scope of a variable is determined by its position in the source code not where it is called. Inner functions have access to variables defined in their outer functions.


// Example :

function outerFunction() {
    var outerVar = "I am from outer function";

    function innerFunction() {
        var innerVar = "I am from inner function";
        console.log(innerVar); // Accessing inner function's variable
        console.log(outerVar); // Accessing outer function's variable
    }
    // console.log(innerVar); // Error: innerVar is not defined

    innerFunction();
}

outerFunction(); // Outputs: I am from outer function


// Closures :
// A closure is created when an inner function retains access to its outer function's variables even after the outer function has finished executing.

// Example :


function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const incrementCounter = makeCounter();

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());

// In this example, the inner function returned by makeCounter forms a closure that retains access to the count variable even after makeCounter has completed execution.

// This allows the inner function to increment and return the count value each time it is called.


// Authentication Token Example using Closure :


function createTokenManager(){
    let token = null;


    function setToken(newToken){
        token = newToken;
    }

    function getToken(){
        return token ? token : "No token set";
    }

    return {
        setToken,
        getToken
    };
}

// used in server.js

const userTokenManager = createTokenManager();

userTokenManager.setToken("abc123xyz");
console.log(userTokenManager.getToken()); // Outputs: abc123xyz

const adminTokenManager = createTokenManager();

console.log(adminTokenManager.getToken()); // Outputs: No token set
adminTokenManager.setToken("adminToken456");
console.log(adminTokenManager.getToken()); // Outputs: adminToken456



// In this example, createTokenManager creates a closure that encapsulates the token variable. The setToken and getToken functions have access to this variable, allowing controlled access to the token value.


// Example 2 :

function setUpCart(){
    // let cartItems = [];

    let cartCount = 0;

    document.getElementById("addBtn").addEventListener('click', ()=>{
        cartCount++;
        document.getElementById("cartCount").innerText = cartCount;
        console.log(cartCount);
    });
}

setUpCart();