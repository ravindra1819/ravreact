// search.js
export function setupSearch(products, renderProducts, addToCart) {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    renderProducts(filtered, addToCart);
  });
}
