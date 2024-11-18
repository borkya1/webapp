/* login.js */
// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        window.location.href = 'content.html';
    } else {
        alert('Invalid username or password');
    }
}
