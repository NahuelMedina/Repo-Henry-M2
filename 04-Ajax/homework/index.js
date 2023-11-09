const URL = "http://localhost:5000/amigos";
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
  $.get(`${URL}`, (data) => {
    friendList.innerHTML = "";
    data.map((element) => {
      friendList.innerHTML += `<li id=${element.id}>${element.name}</li>`;
    });
  });
}

function getIdFriend() {
  $.get(`${URL}`, (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Number(input.value)) {
        input.value = "";
        return (printerFriend.innerHTML = `El amigo encontrado es: ${data[i].name}`);
      }
    }
    input.value = "";
    printerFriend.innerHTML = "Error";
  });
}

function deleteFriend() {
  if (friendList.children.length) {
    for (let i = 0; i < friendList.children.length; i++) {
      if (friendList.children[i].id === inputDelete.value) {
        inputDelete.value = "";
        friendList.removeChild(friendList.children[i]);
        return (messajeDelete.innerHTML = "Amigo eliminado con exito!");
      }
    }
    inputDelete.value = "";
    messajeDelete.innerHTML = "No se encontro ese amigo";
  } else {
    inputDelete.value = "";
    messajeDelete.innerHTML = "No hay amigos que eliminar";
  }
}

//creo un eventos para los distintos tipos de acciones
buttonSeeFriends.addEventListener("click", getFriends);
searchButton.addEventListener("click", getIdFriend);
deleteButton.addEventListener("click", deleteFriend);
