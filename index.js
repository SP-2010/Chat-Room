import {InsertData} from  "/workspaces/Chat-App/firebase.js";
function submit() {
    var message = document.getElementById("message");
    var value = message.value;
    console.log("Submitted:", value);
    message.value = "";
    
    var messageList = document.getElementById("message-list");
    var newParagraphHTML = '<p class="message-text">'+ value + '</p>';
    messageList.innerHTML += newParagraphHTML;
    InsertData();
}

var message = document.getElementById("message");

message.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit();
    }
});