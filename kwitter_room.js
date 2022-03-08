var firebaseConfig = {
      apiKey: "AIzaSyC5YYTabjhtVhQnEqEHaa2M0kHwrVmXCks",
      authDomain: "kwitter-app-main.firebaseapp.com",
      databaseURL: "https://kwitter-app-main-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-main",
      storageBucket: "kwitter-app-main.appspot.com",
      messagingSenderId: "121495964357",
      appId: "1:121495964357:web:364385404103296e40beac"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    my_name = localStorage.getItem("user_name");
   document.getElementById("WELCOME").innerHTML += "Welcome " + my_name;

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
     
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div></hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_msg_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_msg_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_main.html";
}