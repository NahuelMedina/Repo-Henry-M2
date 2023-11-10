// todo:export default function rest (a, b) {}
// import queQuiera from "./index.js"
// console.log(queQuiera) // --> f rest()

// todo:export function rest (a, b) {} export data export otra
//! import queQuiera from "./index.js"
//! console.log(queQuiera) // --> ROMPE

// todo:export function rest (a, b) {} export data export otra
import { data, rest } from "./index.js";
console.log(data, rest); // --> { info: [ 1, 2, 3 ] } [Function: rest]

import yTomamosElDefault from "./index.js";
console.log(yTomamosElDefault); // --> { a: [] }
