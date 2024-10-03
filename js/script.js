// Add event listener to cart buttons
const cartButtons = document.querySelectorAll('.product-card button');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        console.log('Product added to cart');
    });
});

// Add event listener to navigation menu
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
// Smooth scrolling logic here
const section = document.querySelector(link.getAttribute('href'));
section.scrollIntoView({ behavior: 'smooth' });
});
});
