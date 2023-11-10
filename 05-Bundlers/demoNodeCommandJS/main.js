//*Node <-> COMMAND JS

var nombre = "Luciano";
const sum = function (a, b) {
  return a + b;
};


// exports.nombre = nombre
//! exports = nombre // Pierde la referencia --> {}

// module.exports = {
//     nombre
// }

// module.exports = nombre;
//? pisa el objeto y da el nuevo valor

//TODO:

const EXPORTS = {};
//! EXPORTS = "nuevo valor"

var MODULE_EXPORTS = {};
MODULE_EXPORTS = "Luciano";


//TODO: Buena práctica
//* module.exports
//? exporto del archivo 2 o más var, funct, etc..
module.exports = {
    nombre,
    sum
}


//? exporto del archivo 1 var, o funct, etc..
// module.exports = sum


// IIEF
(function(){
  console.log("queeee")
}())
function dede(){
  console.log("queeee dede")
}
dede()