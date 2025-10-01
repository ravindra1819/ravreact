// Functions : Function is nothing but a block of code which performs a specific task when ever it is invoked or called.

function greet(name) {
    console.log(`Hello ${name}! Welcome back`);
}

greet("Vamsee");


// Checkout function with conditions
function checkOut(cartValue, stock, requestedQty, couponCode, user) {
    let result = {};

    // if - check product availability
    if (stock >= requestedQty) {
        result.stockStatus = "Available";
    } else {
        result.stockStatus = "Out of Stock";
        return result; // stops checkout if not available
    }

    // if-else -> apply coupon
    if (couponCode === "SAVE10") {
        result.discount = cartValue * 0.1;
        cartValue -= result.discount;
    } else {
        result.discount = 0;
    }

    // Else if ladder : shipping charges
    if (cartValue >= 5000) {
        result.shipping = 0;
    } else if (cartValue >= 1000) {
        result.shipping = 50;
    } else {
        result.shipping = 100;
    }

    // Switch : order status
    let orderStatus = "Pending";
    switch (orderStatus) {
        case "Pending":
            result.orderStatus = "Waiting for payment";
            break;
        case "Shipped":
            result.orderStatus = `Order shipped, on the way`;
            break;
        case "Delivered":
            result.orderStatus = `Delivered Successfully`;
            break;
        default:
            result.orderStatus = `Unknown Order status`;
    }

    // Ternary -> user message
    result.userMessage = user.isLoggedIn
        ? `Welcome back, ${user.name}`
        : `Welcome Guest, please logIn`;

    result.finalTotal = cartValue + result.shipping;

    return result;
}


// Multiple users array
let users = [
    { isLoggedIn: true, name: "VamseeKrishna", cartValue: 2000, stock: 5, requestedQty: 3, coupon: "SAVE10" },
    { isLoggedIn: false, name: "GuestUser", cartValue: 800, stock: 2, requestedQty: 1, coupon: "" },
    { isLoggedIn: true, name: "Anil", cartValue: 6000, stock: 10, requestedQty: 2, coupon: "SAVE10" },
    { isLoggedIn: true, name: "Ravi", cartValue: 1200, stock: 0, requestedQty: 1, coupon: "" }, // Out of stock case
];


// Run checkout for each user
users.forEach(user => {
    let result = checkOut(user.cartValue, user.stock, user.requestedQty, user.coupon, user);
    console.log(`\nCheckout result for ${user.name}:`);
    console.log(result);
});
