let shoppingCart = {
  items: [],
  total: 0
};
function addToCart(itemId) {
  let item = document.getElementById(itemId);
  let itemName = item.querySelector('.name').textContent;
  let itemPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
  let itemQuantity = parseInt(item.querySelector('.select-style').value);

  let newItem = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity
  };

  shoppingCart.items.push(newItem);
  updateShoppingCart();
}
function updateShoppingCart() {
  let cartList = document.querySelector('.listCard');
  let cartTotal = document.querySelector('.total');
  cartList.innerHTML = '';
  shoppingCart.total = 0;

  for (let i = 0; i < shoppingCart.items.length; i++) {
    let item = shoppingCart.items[i];
    let itemTotal = item.price * item.quantity;
    shoppingCart.total += itemTotal;

    let li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity} - $${itemTotal.toFixed(2)}`;
    cartList.appendChild(li);
  }

  cartTotal.textContent = `$${shoppingCart.total.toFixed(2)}`;
}

