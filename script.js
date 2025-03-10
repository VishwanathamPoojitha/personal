
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyB1lW9fIlFNP9JVCZDg1m50BMVbKdRofn0",
    authDomain: "portfolio-contact-form-be75f.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-be75f-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-be75f",
    storageBucket: "portfolio-contact-form-be75f.appspot.com",
    messagingSenderId: "675094820847",
    appId: "1:675094820847:web:b5678f627e0c3b1e83e81a"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


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

    
    saveMessage(name, email, message);

    
    successMsg.style.display = "block";
    successMsg.innerText = "Message sent successfully!";

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);

    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});


function saveMessage(name, email, message) {
    const messagesRef = ref(database, "contactForm"); // Store data under "contactForm"
    push(messagesRef, {
        name: name,
        email: email,
        message: message
    });
}


function validateEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}


  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  window.onload = function() {
    if (window.innerWidth < 768) {
      document.getElementById("popup").style.display = "flex";

      
      document.getElementById("closeButton").addEventListener("click", closePopup);
    }
  };

