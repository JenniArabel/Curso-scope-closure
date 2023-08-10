//Variables
var a; // Declarando
var b = 'b'; // Declarando y asignando
b = 'bb'; // Reasignando
var a = 'aa'; // Redeclarando


//Global Scope
var fruit = 'Apple'; // Global

console.log(fruit); //Llamar a la variable global

function bestFruit(){
    console.log(fruit); //Llamar a la variable global
}

bestFruit(); //Ejecutar funcion


//Declarar una variable global por accidente, TENER CUIDADO!
function countries(){
    country = 'Colombia'; //Varible global sin ser declarada. Si se le declarara con var, const o let, no sería global.
    console.log(country);
}
countries();
console.log(country);
//Arroja como resultado 2 veces Colombia