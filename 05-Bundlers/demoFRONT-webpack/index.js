
const {user} = require("./archivoB.js")
// import {user} from "./archivoB.js"

const root = document.getElementById("root")

const divContainer = document.createElement("div")
divContainer.id = "container"

const h2 = document.createElement("h2")

h2.innerHTML = user.nombre 
divContainer.appendChild(h2)

root.appendChild(divContainer)

