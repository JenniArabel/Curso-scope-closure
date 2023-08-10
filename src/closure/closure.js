//En JS se puede usar una function dentro de otra function. Funciones anidadas.
//Las closures proporcionan acceso al ámbito léxico


function greeting() {
    let username = 'Jenni'; //Declarar y asignar valor a una variable

    function displayUserName(){
        return `Hello ${username}`; //Accediendo a la variable
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //En este llamado se retorna la definicion de displayUserName
console.log(g()); //En este se ejecuta su valor. Por lo tanto accede a su ámbito léxico pero tambien recuerda el contexto
