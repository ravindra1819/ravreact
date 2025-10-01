// Conditional Statements : 
// Conditional Statements helps us to take certain decisions.
// CS are also known as Decision Making Statements.
// CS works based on boolean values.

// Why ?
// In real time apps, everything is based on decisions or conditions.

//  Ecommerce : Is the product in stock - Whether we should give free shipping
// Banking : Does the account have enough balance.

// Without CS, programs would behave the same way for every user and every situation.
// But businesses must adapt behaviour depending on conditions.
// That's why CS are decision making tools in the code.


// if - use when we need to run code only if the condition is true.
// Example :
    let stock = 0;

    if(stock === 0){
        console.log("out of stock");
    }

// if Else - Two possibe outcomes.

    let userLoggedIn = false;

    if(userLoggedIn){
        console.log("Welcome Back!");
    }else{
        console.log("Please login");
    }
// If Else ladder : Multiple conditions with one result.

    let cartValue = 2500;

    if(cartValue >= 5000){
        console.log(`Free Shipping`);
    }else if(cartValue >= 1000){
        console.log(`Shipping charges are : 50`);
    }else{
        console.log(`Shipping charges : 100`);
    }


// Switch - Clean way to check against many fixed options.

// Example : Order status handling.

let orderStatus = "Pending";

switch(orderStatus){

    case "Pending":
        console.log(`Order Placed, waiting for payment`);
        break;
    case "Shipped":
        console.log(`Order Shipped, on the way`);
        break;
    case "Devlivered":
        console.log(`Order delivered sucessfully`);
        break;
    default:
        console.log(`Unknown Order status`);
}



// Nested Conditions :

if (true && true) {
    console.log("Entered first if (true && true)");

    if (false) {
        console.log("Inside nested if (false)");
    } else {
        console.log("Inside else of (false)");

        if (true) {
            console.log("Inside nested if (true)");

            if (!true) {
                console.log("Inside if (!true)");
            } else {
                console.log("Inside else of (!true)");
            }
        } else {
            console.log("Inside else of (true)");
        }
    }
} else {
    console.log("Inside else of (true && true)");

    if (false) {
        console.log("Inside second outer else-if block");
    } else {
        console.log("Inside else of second block");

        if (true) {
            console.log("Inside inner if (true)");
        } else {
            console.log("Inside inner else of (true)");
        }
    }
}
