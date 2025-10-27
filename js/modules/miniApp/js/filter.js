// filter.js
export function setupFilter(products, renderProducts, addToCart) {
  const categoryFilter = document.getElementById("categoryFilter");
  categoryFilter.addEventListener("change", (e) => {
    const category = e.target.value;
    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);
    renderProducts(filtered, addToCart);
  });
}
