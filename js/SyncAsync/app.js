// Synchronous Javascript :

    // console.log("1");
    // console.log("2");
    // console.log("3");

// Asynchronous Javascript :

    // console.log("1");

    // setTimeout(()=>{
    //     console.log("2");
    // }, 1000);

    // console.log("3");
    

// Callback vs Callback Hell :  

// Callback :

// function serveFood(){
//     console.log("Serving food to customer");
// }

// function orderFood(food, callback){
//     console.log(`Ordering ${food} from restaurant......`);
//     setTimeout(()=>{
//         console.log(`${food} is ready!`);
//         callback();
//     },2000);
// }



// orderFood("Pizza", serveFood);

// Callback Hell :

// orderFood("Burger", ()=>{
//     orderFood("Fries", ()=>{
//         orderFood("Coke", ()=>{
//             console.log("All food items are served!");
//         });
//     });
// });

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

    //  const promise = new Promise((resolve, reject)=>{
    //     let success = true; // Simulating success or failure
    //     if(success){
    //         resolve("Data fetched successfully!");
    //     }else{
    //         reject("Error fetching data!");
    //     }
    //  }); 


    //  promise.then((message)=>{console.log(message)}).catch((error)=>{console.log(error)});


    //  Promise Chaining :

    // function order(food){
    //     return new Promise((resolve, reject)=>{
    //         console.log(`Ordering ${food} from restaurant......`);
    //         setTimeout(()=>{
    //             console.log(`${food} is ready!`);
    //             resolve(food);
    //         },1000);
    //     });
    // }

    // order("Pizza")
    // .then(food => order("Fries"))
    // .then(food => order("Coke"))
    // .then(()=>{
    //     console.log("All food items are served!");
    // }).catch((error)=>{});

    // For the above example, if any order fails, we can catch the error at the end of the chain, do the task for the above error handling. 


// Callback vs Promise - Summary :

// Feature                     callback                    Promise
// Syntax                       Nested                      Chain
// Error Handling               Difficult                   Easy with .catch()
// Readability                  Poor                        Clean
// Control Flow                 CallbackHell                Sequential Flow

// API Introduction :

// API stands for application programming interface.
// API acts a bridge between two software systems, allowing them to communicate and share data securely.

// Types of API's :

// Open / Public API's
// Private API
// Partner API
// Composite API's 

// Based on Structure or Design :

// Type                                 Description 

// Rest API (Most common)               Uses HTTP requests (GET, POST, PUT, DELETE).
// SOAP API                             Uses XML format and more strict structure.
// GraphQL API                          Lets client decide what data it needs.
// WebSocket API                        Used for real-time apps like chat or live score.

// Methods of API (HTTP Methods)

// Method               Description             Example
// GET                  Retrieve the data       Get user info
// POST                 Add new data            Creates new user
// PUT                  Update exisiting data   Updates user details
// DELETE               Remove data             Delete user
// PATCH                Partially update data   Update only email field

// Promises vs Fetch API

// Fetch :

// Fetch Method is modern built-in Javascript interface used to make HTTP requests to servers and fetch resources such as data, images, or JSON files from URL's.
// The Fetch() function is used  to make API calls.
// It returns a Promise that resolves to a Response object, which represents the response to the request.

// Syntax :

    // fetch(resource, options)
    // .then((response)=>{
    //     // Handle the response
    // })
    // .catch((error)=>{
    //     // Handle the error
    // });

    // resource : The URL of the data that you want to fetch.
    // Options : An object containing methods type, headers, and body. (Optional)
    // response : The response returned by fetch() is not the actual data itself, it's a response object that contains metadata and we need methods to extract the actual content. 

    // Common methods included in response :

        // response.json()  -> parses JSON data (****)
        // response.text()  -> returns respons as a plain text


// Fetch real time usage :

const userApiEndpoint = "https://dummyjson.com/users";

fetch(userApiEndpoint)
.then((response)=> response.json())
.then((data)=> {
    const teamContainer = document.getElementById("teamContainer");

    data.users.forEach((user)=>{
        let card = document.createElement('div');
        card.classList.add("userCard");

        card.innerHTML = 
        `
            <img src="${user.image}" alt="${user.firstName}">
            <h3>${user.firstName + user.lastName}</h3>
            <p>${user.role}</p>
        `;

        teamContainer.appendChild(card);
    })
})
.catch((error)=>{console.log(error)});

// Async Await :

const fetchUsers = async () => {
   try{
    const response = await fetch(userApiEndpoint)
    const data = await response.json();

    const teamMembers = document.getElementById("teamMembers");

    data.users.forEach((user)=>{
        let card = document.createElement('div');
        card.classList.add("userCard");

        card.innerHTML = 
        `
            <img src="${user.image}" alt="${user.firstName}">
            <h3>${user.firstName + user.lastName}</h3>
            <p>${user.role}</p>
        `;

        teamMembers.appendChild(card);
    });
   }catch(error){
    console.log(error);
   }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", fetchUsers);