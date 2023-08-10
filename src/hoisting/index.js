var nameOfDog; //Valor undefined
console.log(nameOfDog); //El resultado es undefined xq al momento de llamar esa variable, todavia no se le asignaba un valor o ni siquiera ha sido declarada.

var nameOfDog = 'Elmo';
console.log(nameOfDog); //Aquí ya tiene un valor declarado





var elmo; //Se elevó como undefined, sin valor
function nameOfCat(){
    console.log(`El mejor gato es ${elmo}`);
} //Pasa a elevarse, pero sigue sin valor, sigue undefined xq todavía no se accede a la asigancion de 'Elmito'.

nameOfCat(); //Este valor aunque no esté asignado o aunque no tengamos nuestra fx, también se elevó y luego sirve como llamado

function nameOfCat(){
    console.log(`El mejor gato es ${elmo}`);
}

var elmo = 'Elmito'; //Esta declaración se elevó.
