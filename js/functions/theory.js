// Function : 
// A function in js is a block of reusable code that performs a specific task when it is invoked or called.
// You can define once and reuse many times throughout your code.


// Why functions :

// Avoid repetition - dry principle write once, use many times.
// Modular Structure - Split code into logical blocks.
// Maintainability - easier to debug, test and scaleup.
// Reusability - used across files and modules.



// Creating a car object
const car = {
    // Properties (Data about the car) : How object looks like
    brand: "Tesla",
    model: "Model S",
    color: "Red",
    speed: 0,
    isEngineOn: false,

    // Methods (Actions the car can perform) : What an object can do
    startEngine: function() {
        if (!this.isEngineOn) {
            this.isEngineOn = true;
            console.log(`${this.brand} ${this.model} engine started!`);
        } else {
            console.log("Engine is already running.");
        }
    },

    accelerate: function(increaseBy) {
        if (this.isEngineOn) {
            this.speed += increaseBy;
            console.log(`Accelerated to ${this.speed} km/h.`);
        } else {
            console.log("Start the engine before accelerating!");
        }
    },

    stopCar: function() {
        if (this.speed > 0) {
            this.speed = 0;
            console.log("Car has stopped.");
        } else {
            console.log("Car is already stationary.");
        }
    }
};

// Props :

console.log(car.brand);

// Testing the car object
car.startEngine();   // Engine starts
car.accelerate(60);  // Accelerate the car
car.stopCar();       // Stop the car


// Function Declarations :  a function defined using the function keyword followed by a name.

    function functionName(){
        console.log(`This task will be completed`);
    }

    functionName(); // function call

// Function Expressions : a function stored inside a variable or const.

    const variableName = function(){
        console.log(`This is function expression`);
    }

    variableName(); // function call