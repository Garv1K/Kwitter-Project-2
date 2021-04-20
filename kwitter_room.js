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
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom() 
    { room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
       }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row; 
    }); }); }
    
    


getData();


    function redirectToRoomName(name) 
    { console.log(name);
       localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"; }

     function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }