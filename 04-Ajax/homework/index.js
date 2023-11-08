// elementos de la lista de amigos
let friendList = document.querySelector("#lista");
let buttonSeeFriends = document.querySelector("#boton");

//elementos para buscar amigos
let input = document.querySelector("#input");
let printerFriend = document.querySelector("#amigo");
let searchButton = document.querySelector("#search");

// elementos para eliminar amigos
let inputDelete = document.querySelector("#inputDelete");
let deleteButton = document.querySelector("#delete");
let messajeDelete = document.querySelector("#success");

function getFriends() {
  $.get("http://localhost:5000/amigos", (data) => {
    friendList.innerHTML = "";
    data.map((element) => {
      friendList.innerHTML += `<li id=${element.id}>${element.name}</li>`;
    });
  });
}

function getIdFriend() {
  $.get(`http://localhost:5000/amigos`, (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Number(input.value)) {
        return (printerFriend.innerHTML = `El amigo encontrado es: ${data[i].name}`);
      }
    }
    printerFriend.innerHTML = "Error";
  });
}

function deleteFriend() {
  if (friendList.children.length) {
    for (let i = 0; i < friendList.children.length; i++) {
      if (friendList.children[i].id === inputDelete.value) {
        friendList.removeChild(friendList.children[i]);
        return (messajeDelete.innerHTML = "Amigo eliminado con exito!");
      }
    }
    messajeDelete.innerHTML = "No se encontro ese amigo";
  } else return (messajeDelete.innerHTML = "No hay amigos que eliminar");
}

//creo un eventos para los distintos tipos de acciones
buttonSeeFriends.addEventListener("click", getFriends);
searchButton.addEventListener("click", getIdFriend);
deleteButton.addEventListener("click", deleteFriend);
