// Sample cart data
const cart = [
    { id: 1, product: 'Product 1', quantity: 2, price: 250 },
    { id: 2, product: 'Product 2', quantity: 1, price: 50 },
];

// Display cart items
const cartItems = document.getElementById('cart-items');
cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.product}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
        <td>$${item.quantity * item.price}</td>
<td><button class="remove-btn">Remove</button></td>
    `;
    cartItems.appendChild(row);
});

// Calculate totals
const subtotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
const tax = subtotal * 0.08;
const total = subtotal + tax;

document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
document.getElementById('total').textContent = `$${total.toFixed(2)}`;
// Remove item from cart logic
document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove item from cart logic here
        console.log('Item removed from cart');
    });
});

// Checkout logic
document.getElementById('checkout-btn').addEventListener('click', () => {
    // Checkout logic here
    console.log('Checkout initiated');
});
