// main.js
import { products, renderProducts } from "./products.js";
import { setupSearch } from "./search.js";
import { setupFilter } from "./filter.js";
import { addToCart, setupCart } from "./cart.js";
import { setupAuth } from "./auth.js";

// App initialization
function init() {
  console.log("Modular Mini eCommerce Loaded ✅");
  renderProducts(products, (id) => addToCart(id, products));
  setupSearch(products, renderProducts, (id) => addToCart(id, products));
  setupFilter(products, renderProducts, (id) => addToCart(id, products));
  setupCart();
  setupAuth();
}

init();
