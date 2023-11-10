//*Node <-> COMMAND JS
//todo:  exports.nombre = nombre 
// const exportGral = require("./main.js")
// console.log("--> ", exportGral) // -->  { nombre: 'Luciano' }

// const {nombre} = require("./main.js")
// console.log("--> ", nombre) // -->  'Luciano'

//todo: exports = nombre 
// const exportGral = require("./main.js")
// console.log("--> ", exportGral) // -->  {}


//todo: module.exports = { nombre }
// const exportGral = require("./main.js")
// console.log("--> ", exportGral) // -->  { nombre: 'Luciano' }

//todo: module.exports = { nombre }
// const {nombre} = require("./main.js")
// console.log("--> ", nombre) // -->  'Luciano' 

//todo: module.exports = nombre
const exportGral = require("./main.js")
console.log("--> ", exportGral) // -->   'Luciano'

