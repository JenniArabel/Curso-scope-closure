const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //Esto es una funcion interna, es una funcion anidada. Aquí ya tenemos un closure.
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();

//El ámbito léxico significa que la accesibilidad de las variables está determinada por la posición de las mismas dentro
//de los ámbitos anidados.