
// products.js
export const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 12000 },
  { id: 2, name: "Laptop", category: "electronics", price: 55000 },
  { id: 3, name: "T-Shirt", category: "fashion", price: 499 },
  { id: 4, name: "Headphones", category: "electronics", price: 2500 },
  { id: 5, name: "Jeans", category: "fashion", price: 1299 },
];

export function renderProducts(list = products, addToCart) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button data-id="${p.id}" class="addToCartBtn">Add to Cart</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".addToCartBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      addToCart(id);
    });
  });
}
