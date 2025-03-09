
const text = "Hi, I'm Vishwanatham Poojitha";
let index = 0;
const speed = 100; // Speed of typing (milliseconds per letter)

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("typing-text").style.borderRight = "none"; // Remove cursor after typing
    }
}

window.onload = typeWriter;

// Initialize Firebase
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1lW9fIlFNP9JVCZDg1m50BMVbKdRofn0",
    authDomain: "portfolio-contact-form-be75f.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-be75f-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-be75f",
    storageBucket: "portfolio-contact-form-be75f.appspot.com",
    messagingSenderId: "675094820847",
    appId: "1:675094820847:web:b5678f627e0c3b1e83e81a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Form submission
document.getElementById("submitBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let successMsg = document.getElementById("successMsg");

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Save data to Firebase Realtime Database
    saveMessage(name, email, message);

    // Show success message
    successMsg.style.display = "block";
    successMsg.innerText = "Message sent successfully!";

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

// Function to save data to Firebase
function saveMessage(name, email, message) {
    const messagesRef = ref(database, "contactForm"); // Store data under "contactForm"
    push(messagesRef, {
        name: name,
        email: email,
        message: message
    });
}

// Function to validate email
function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}
