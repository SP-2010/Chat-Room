import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "domain",
  databaseURL: "db-url",
  projectId: "project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "messaging-sender-id",
  appId: "app-id"
}
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
    }
});


submitButton.addEventListener("click", function () {
    var message = document.getElementById("message");
    var value = message.value;


    //First increment the message count
    messagenumber = parseInt(messagenumber) + 1;
    set(ref(db, "message-number/"), {
        count: messagenumber
    })
        .then(() => {
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
