// Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate user credentials
    if (email === 'user@example.com' && password === 'password123') {
        // Login successful, redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Login failed, display error message
        alert('Invalid email or password');
    }
});
