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
 msg=document.getElememtById("msg").value;
firebase.dadabase().ref(room_name).push({
name:user_name,
	message:msg,
	like
});
	documemt.getElememtById("msg").value="";
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
        console.log(firebase_message_id);
        console.log(message_data);
//Inicie a programar aqui


          
//Programe até aqui
        name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtidas: "+ like +"</span></button><hr>";
        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
      } 
    });  
  }); 
}

getData();

function updateLike(message_id)
{
  console.log("clicou no botão curtir - " + message_id);
  //Inicie a programar aqui


  //Programe até aqui
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
	like : updated_likes  
  });
}

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
