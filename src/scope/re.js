//REASIGNAR UN VALOR
var lastName = 'Arabel'; //Declarar y asignar un valor a una variable
lastName = 'Vera'; //Reasignar un valor
console.log(lastName);

var name = 'Jenni'; //Declarando y asignando
var name = 'Jennifer'; //Reasignación y redeclaración
console.log(name);

//¿Qué pasa con LET y CONST?
let fruit = 'Apple'; //Declarando y asignando
fruit = 'Kiwi'; //Con let si se puede reasignar un valor

let fruit = 'Banana'; //No se puede redeclarar (Variable block-scoped)

const animal = 'dog'; //Declarando y asignando
animal = 'cat'; // No se puede reasignar porque los valores de las variables const son fijos
const animal = 'snake'; //No se puede redeclarar con el mismo nombre
console.log(animal);

//Const no significa que siempre se va a mantener el mismo valor, en caso de arreglos y objetos si se puede:
const vehicles = [];
vehicles.push('car'); //Método push para ingresar un valor
console.log(vehicles);

vehicles.pop(); //Método pop para sacar o vaciar
console.log(vehicles);