console.log('Login script loaded');

// Add an event listener to handle form submission
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('Login form event listener added');
    } else {
        console.log('Login form not found');
    }
}

// Function to handle login
function handleLogin(event) {
    console.log('Login button clicked');
    event.preventDefault();
    const username = document.getElementById('username').value;
    console.log('Username entered:', username);
    const password = document.getElementById('password').value;
    console.log('Password entered:', password);
    
    if (username === 'admin' && password === 'password') {
        console.log('Redirecting to content.html');
        window.location.href = window.location.origin + window.location.pathname.replace('index.html', 'content.html');
    } else {
        alert('Invalid username or password');
    }
}
