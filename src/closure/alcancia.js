//Ejercicio de alcancía

// function moneyBox(coins) { //Su argumento son las monedas
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`); //Mostrar cuanto tengo
// }

// moneyBox(5);
// moneyBox(5);
//Da como resultado siempre 5.

function moneyBox() { //Sin argumentos, una function comun
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`); 
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
//RESULTADO: Se suman 5, 10 y 25.

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);