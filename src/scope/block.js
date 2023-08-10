//Surge con ECMAScript 6, con las palabras reservadas const y let, para dejar de usar var.
//Un bloque es todo lo que está dentro de {}

function fruits(){
    if(true){
        var fruit1 = 'Apple'; //Function Scope
        let fruit2 = 'Kiwi'; //Block Scope
        const fruit3 = 'Banana'; //Block Scope

        console.log(fruit2); //Forma correcta de llamar a las variables de block scope
        console.log(fruit3);
    }
    //Qué pasa si quiero fuera del bloque acceder a ellas?
    console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);
    //Como resultado muestra 'Apple', y luego da error con el 2do elemento y deja de ejecutar.
    //Se puede acceder al primero porque funciona como una function scope, se puede acceder a ella aunque esté dentro de un bloque.
    //Da error con los otros 2 elementos porque no se puede acceder a ellas fuera de su bloque IF.
}

fruits();