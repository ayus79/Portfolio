// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzxWNXNtFbROUwSUCHRqzQ7uTxzcfhmKc",
    authDomain: "portfolio-7923.firebaseapp.com",
    projectId: "portfolio-7923",
    storageBucket: "portfolio-7923.appspot.com",
    messagingSenderId: "292288523087",
    appId: "1:292288523087:web:b0a017c09c67c3c360b33a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//access database collection
const db = firestore.collection("formData");

//get submit form
let submitButton = document.getElementById("button");

//create event listener for form submission
submitButton.addEventListener("click", (e) => {
  //prevent default form submission
  e.preventDefault();

  // get form value
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  //save form Data to firebase
  db.doc()
    .set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then(() => {
      window.alert("Form submitted successfully");
    })
    .catch((error) => {
      window.alert(error);
    });

    //clear form
    document.getElementById("contact-form").reset();
});


  