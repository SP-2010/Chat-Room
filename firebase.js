// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, update, remove } from "firebase/database";
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

function InsertData(){
  set(ref(db, "messages"),{
    Name:"sai",
    Message:"Hello"
  })
  .then(()=>{
    alert("data stored succesfully!!");
  })
  .catch((error)=>{
    alert("Unsuccesful error: "+error);
  });
}