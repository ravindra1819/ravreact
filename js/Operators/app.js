// =======================
// 1. E-Commerce Discount Calculation
// =======================
function calculateFinalPrice(price, discountPercent, taxPercent) {
    let discountedPrice = price - (price * discountPercent / 100);
    let finalPrice = discountedPrice + (discountedPrice * taxPercent / 100);

    finalPrice = Math.round(finalPrice * 100) / 100;

    return finalPrice >= 0 ? finalPrice : 0;
}

console.log("Final Price:", calculateFinalPrice(1000, 10, 5)); // 945


// =======================
// 2. User Authentication and Access Control
// =======================
function canAccessDashboard(user) {
    if ((user.role === "admin" || user.role === "superuser") 
        && user.isActive === true 
        && user.lastLoginDays <= 30) {
        return true;
    }
    return false;
}

console.log("Access:", canAccessDashboard({ role: "admin", isActive: true, lastLoginDays: 10 })); // true
console.log("Access:", canAccessDashboard({ role: "user", isActive: true, lastLoginDays: 5 })); // false


// =======================
// 3. Inventory Stock Management
// =======================
let stock = 5;

function placeOrder(quantity) {
    if (stock >= quantity) {
        stock -= quantity;
        console.log(`Order placed for ${quantity}. Remaining stock: ${stock}`);
    } else {
        console.log(`Not enough stock! Available: ${stock}`);
    }
}

placeOrder(2); // Order placed for 2. Remaining stock: 3
placeOrder(4); // Not enough stock! Available: 3


// =======================
// 4. Feature Flag / Environment Check
// =======================
function isFeatureEnabled(featureFlag) {
    return (typeof featureFlag !== "undefined" && featureFlag === true) 
        ? "Feature Enabled" 
        : "Feature Disabled";
}

let darkModeFlag = true;
console.log(isFeatureEnabled(darkModeFlag)); // Feature Enabled

let betaFlag;
console.log(isFeatureEnabled(betaFlag)); // Feature Disabled


// =======================
// 5. Bitwise Operations in Permissions System
// =======================
const PERM_READ = 1;
const PERM_WRITE = 2;
const PERM_DELETE = 4;

let userPermissions = PERM_READ | PERM_WRITE;

function hasPermission(userPerms, perm) {
    return (userPerms & perm) === perm;
}

console.log("Can Read?", hasPermission(userPermissions, PERM_READ));   // true
console.log("Can Write?", hasPermission(userPermissions, PERM_WRITE)); // true
console.log("Can Delete?", hasPermission(userPermissions, PERM_DELETE)); // false
