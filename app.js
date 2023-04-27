import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCwT8cFvG8VFnDUQF1BMcl-zyfEndCj-20",
    authDomain: "chat-app-sp18.firebaseapp.com",
    projectId: "chat-app-sp18",
    storageBucket: "chat-app-sp18.appspot.com",
    messagingSenderId: "734288420822",
    appId: "1:734288420822:web:853ba2c62d37441c534e77",
    databaseURL: "https://chat-app-sxp18-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
firebase.initializeApp(firebaseConfig);

var msgno = 1;
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const submitButton = document.getElementById("submit-bttn");
const readButton = document.getElementById("read-bttn");
var message = document.getElementById("message");
var messageList = document.getElementById("message-list");
var messagenumber;
var actualmessage;
var newParagraphHTML;

firebase.database().ref('message-number/').on('value', (sanpshot) => {
    messagenumber = sanpshot.val()['count'];
});

//message find
firebase.database().ref('messages/').on('value', (sanpshot) => {
    newParagraphHTML = "";
    actualmessage = sanpshot.val()['msg' + parseInt(messagenumber)]['message'];
    if (messageCount > 0) {
        console.log(messageCount);
        for (let i = 1; i <= messageCount; i++) {
            newParagraphHTML += '<p class="message-text">' + sanpshot.val()['msg' + parseInt(i)]['message'] + '</p>';
        }
        messageList.innerHTML = newParagraphHTML;
    } else {
        console.log("no messages are there yet!");
    }
});


submitButton.addEventListener("click", function () {
    var message = document.getElementById("message");
    var value = message.value;
    console.log("Submitted:", value);


    //First increment the message count
    messagenumber = parseInt(messagenumber) + 1;
    set(ref(db, "message-number/"), {
        count: messagenumber
    })
        .then(() => {
            console.log("Data stored successfully!");
        })
        .catch((error) => {
            console.error("Failed to store data:", error.message);
            alert("Failed to store data: " + error.message);
        });


    //Set the message in "msg"+Count
    set(ref(db, "messages/msg" + messagenumber), {
        message: message.value
    })
        .then(() => {
            console.log("Data stored successfully!");
        })
        .catch((error) => {
            console.error("Failed to store data:", error.message);
            alert("Failed to store data: " + error.message);
        });


});

message.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitButton.click();
    };
});


var messageCount;
firebase.database().ref('message-number/').on('value', (sanpshot) => {
    messageCount = sanpshot.val()['count'];
    parseInt(messageCount);

});