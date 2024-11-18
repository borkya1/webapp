/* login.js */

console.log('Login script loaded');
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
