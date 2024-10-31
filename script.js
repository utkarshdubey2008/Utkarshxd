// Simple script to display a welcome message in the console
console.log("Welcome to my portfolio!");

// Fetching message from the backend API
fetch('/api/message')
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Log the message from the backend
    })
    .catch(error => console.error('Error fetching message:', error));
