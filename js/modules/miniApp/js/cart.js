// cart.js
let cart = [];

export function addToCart(id, products) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}

export function setupCart() {
  const cartModal = document.getElementById("cartModal");
  const viewCartBtn = document.getElementById("viewCartBtn");
  const closeCart = document.getElementById("closeCart");

  viewCartBtn.addEventListener("click", () => {
    document.getElementById("cartItems").innerHTML = cart
      .map((item) => `<li>${item.name} - ₹${item.price}</li>`)
      .join("");
    cartModal.style.display = "flex";
  });

  closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}
