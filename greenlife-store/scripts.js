let cart = [];
let totalItems = 0;
let totalCost = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  totalItems++;
  totalCost += price;
  document.getElementById('cart-count').textContent = totalItems;
}

function checkout() {
  alert('Checkout Coming Soon!');
}

function continueShopping() {
  location.href = 'products.html';
}

window.onload = function () {
  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-cost').textContent = totalCost;
};
