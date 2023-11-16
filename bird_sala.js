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

document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "bird_page.html";
}

function getData() 
{  
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
        { 
            childKey  = childSnapshot.key;
            Room_names = childKey;
            //Comece a programar 
            console.log("Nome da sala: " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Programe até aqui
        });
    });
}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "bird_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
