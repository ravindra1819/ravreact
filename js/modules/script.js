export const userName = "RavindraReddy";

export const userEmail = "ravindrareddy.sanivarapu@gmail.com";

 function greet(){
    console.log(`Hello ${userName}`);
}


function getUserDetails(){
    console.log(`${userName} and ${userEmail}`); 
}

export const userEmailRegexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export {getUserDetails};

export default greet;