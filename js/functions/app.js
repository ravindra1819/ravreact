
// Function Declaration :

// E-commerce Discount :

function calculateDiscount(price, percent){
    return price - (price * percent) / 100;
}

const phonePrice = calculateDiscount(5000,10);
console.log(phonePrice);
const laptopPrice = calculateDiscount(29999, 33);
console.log(Math.floor());
console.log(Math.ceil(laptopPrice));

// Ex : 2 - userValidation

function isUserValid(user){
    return user.email && user.password ? true : false;
}

console.log(isUserValid({email : "test@gmail.com", pwd : "123"}));
const userStatus = isUserValid({email : "test@gmail.com", password : "123"});
console.log(userStatus);



// Function expression Examples : 

// Example 1 :
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    sidebar.classList.remove("w-20");
    sidebar.classList.add("w-64");
    main.classList.remove("ml-20");
    main.classList.add("ml-64");
    toggleBtn.innerHTML = '<i data-lucide="chevron-left" class="text-white w-6 h-6"></i>';
  } else {
    sidebar.classList.remove("w-64");
    sidebar.classList.add("w-20");
    main.classList.remove("ml-64");
    main.classList.add("ml-20");
    toggleBtn.innerHTML = '<i data-lucide="chevron-right" class="text-white w-6 h-6"></i>';
  }

  lucide.createIcons(); // Re-render the arrow icon
});



const box = document.querySelector(".box");
console.log(box);
box.classList.add("box1");
console.log(box);
box.classList.remove("box1");
console.log(box);
box.classList.toggle("added");
box.classList.toggle("added");




