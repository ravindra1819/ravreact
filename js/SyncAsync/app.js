// Synchronous Javascript :

    // console.log("1");
    // console.log("2");
    // console.log("3");

// Asynchronous Javascript :

    console.log("1");

    setTimeout(()=>{
        console.log("2");
    }, 1000);

    console.log("3");
    

// Callback vs Callback Hell :  

// Callback :

function orderFood(food, callback){
    console.log(`Ordering ${food} from restaurant......`);
    setTimeout(()=>{
        console.log(`${food} is ready!`);
        callback();
    },2000);
}

function serveFood(){
    console.log("Serving food to customer");
}

orderFood("Pizza", serveFood);

// Callback Hell :

orderFood("Burger", ()=>{
    orderFood("Fries", ()=>{
        orderFood("Coke", ()=>{
            console.log("All food items are served!");
        });
    });
});

// Problem with Callback Hell : 
// 1. Hard to read and maintain
// 2. Difficult to handle errors
// 3. Inversion of control

// Promises :

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// States of Promises :
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Syntax of Promise :

     const promise = new Promise((resolve, reject)=>{
        let success = true; // Simulating success or failure
        if(success){
            resolve("Data fetched successfully!");
        }else{
            reject("Error fetching data!");
        }
     }); 


     promise.then((message)=>{console.log(message)}).catch((error)=>{console.log(error)});


    //  Promise Chaining :

    function order(food){
        return new Promise((resolve, reject)=>{
            console.log(`Ordering ${food} from restaurant......`);
            setTimeout(()=>{
                console.log(`${food} is ready!`);
                resolve(food);
            },1000);
        });
    }

    order("Pizza")
    .then(food => order("Fries"))
    .then(food => order("Coke"))
    .then(()=>{
        console.log("All food items are served!");
    }).catch((error)=>{});

    // For the above example, if any order fails, we can catch the error at the end of the chain, do the task for the above error handling. 

// API Inroduction :

// Fetch API : 

// Async Await :