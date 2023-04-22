// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCwT8cFvG8VFnDUQF1BMcl-zyfEndCj-20",
  authDomain: "chat-app-sp18.firebaseapp.com",
  projectId: "chat-app-sp18",
  storageBucket: "chat-app-sp18.appspot.com",
  messagingSenderId: "734288420822",
  appId: "1:734288420822:web:853ba2c62d37441c534e77",
  databaseURL: "https://chat-app-sp18-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function submitme() {
    alert("hello");
    var message = document.getElementById("message");
    var value = message.value;
    console.log("Submitted:", value);
    message.value = "";
    
    var messageList = document.getElementById("message-list");
    var newParagraphHTML = '<p class="message-text">'+ value + '</p>';
    messageList.innerHTML += newParagraphHTML;

    set(ref(db, "messages"), {
        name: "sai",
        message: "Hello"
      })
      .then(() => {
        console.log("Data stored successfully!");
      })
      .catch((error) => {
        console.error("Failed to store data:", error.message);
        alert("Failed to store data: " + error.message);
      });
};

var message = document.getElementById("message");

message.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitme();
    }
});
