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
var msgno = 1;
var DBmsgno;
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const submitButton = document.getElementById("submit-bttn");
var message = document.getElementById("message");
submitButton.addEventListener("click", function () {
    alert(msgno);
    var message = document.getElementById("message");
    var value = message.value;
    console.log("Submitted:", value);

    var messageList = document.getElementById("message-list");
    var newParagraphHTML = '<p class="message-text">' + value + '</p>';
    messageList.innerHTML += newParagraphHTML;

    set(ref(db, "messages/msg" + msgno), {
        name: "sai",
        message: message.value
    })
        .then(() => {
            console.log("Data stored successfully!");
            msgno = msgno + 1;
        })
        .catch((error) => {
            console.error("Failed to store data:", error.message);
            alert("Failed to store data: " + error.message);
        });
    DBmsgno = msgno - 1;
    set(ref(db, "messageno/"), {
        messageno: DSmsgmo,
    });
}); // add this closing parenthesis

message.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitButton.click(); // call submit button click event
    }
});
