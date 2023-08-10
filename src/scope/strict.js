'use strict';
pi = 3.1416; //Se asigna sin declarar
console.log(pi);
//SIN EL USO DE STRICT MODE:
//Lo que JS interpreta tras bambalinas es que se declaro pi con valor undefined y despues reasignó su valor.
//var pi;

//CON USO DE STRICT MODE --> DA ERROR PORQUE NO SE HA DECLARADO PI


//USO DE STRICT EN UNA FUNCION:
function myFuction(){
    'use strict'
    return pi = 3.1416;
}
console.log(myFuction())
//Con uso de strict da error xq no se ha declarado, sin strict mode da el resulto 3.1416;