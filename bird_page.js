//LINKS DO FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyD999Sg7egW0rsT4iXqRooSp5UuA0gqjIo",
    authDomain: "bird-3997d.firebaseapp.com",
    databaseURL: "https://bird-3997d-default-rtdb.firebaseio.com",
    projectId: "bird-3997d",
    storageBucket: "bird-3997d.appspot.com",
    messagingSenderId: "84168879833",
    appId: "1:84168879833:web:46b91f6c14e090ddccd8c8"
  };

//inicializar o Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() 
{ 
  firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose") 
      {
        firebase_message_id = childKey;
        message_data = childData;
//Inicie a programar aqui


          
//Programe até aqui
      } 
    });  
  }); 
}

getData();
