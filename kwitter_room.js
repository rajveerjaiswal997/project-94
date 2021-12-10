// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV9y7JN2th3MfKB2PBI1mLEUdJPIWljO8",
  authDomain: "project2-93.firebaseapp.com",
  projectId: "project2-93",
  storageBucket: "project2-93.appspot.com",
  messagingSenderId: "8044428900",
  appId: "1:8044428900:web:83a64e7827e12ead612971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();