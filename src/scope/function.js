//Function que declara una variable y que le asigna el valor 'Ana'.
//Se muestra el valor con un console.log
//Se hace una validacion con un IF, si sea igual en valor y tipo a 'Ana' y string
//Si se ucmple la validación se saluda a 'Ana'

function greeting() {
    let userName='Ana';
    console.log(userName);

    if(userName==='Ana'){
       console.log(`Hello ${userName}!`);
    }
    //Se usa triple igualdad xq se valida valor y tipo
}

//Ejecutar function
greeting();

//Si se trata de llamar a la variable userName fuera de la function: no es posible acceder a ella.
//Reference error. Not defined.
console.log(userName);