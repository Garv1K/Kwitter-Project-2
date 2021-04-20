var firebaseConfig = {
    apiKey: "AIzaSyCk0xqlBhTfjig6ZZn8ImN07BXqdkkVtCk",
    authDomain: "kwitter-project-5c6ab.firebaseapp.com",
    databaseURL: "https://kwitter-project-5c6ab-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5c6ab",
    storageBucket: "kwitter-project-5c6ab.appspot.com",
    messagingSenderId: "692986137086",
    appId: "1:692986137086:web:f8e1d98e612eb31662d8af"
  };
 
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name  : user_name,
              message : msg,
              like : 0
        });

        document.getElementById("msg").value= "";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();