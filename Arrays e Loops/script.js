// var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

// for(var item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
//     if (videoGames[item] === 'PS4'){
//         break;
//     }
// }


// var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

// frutas.forEach(function(item, index, array) {
//     console.log(item, index, array); //nome da fruta, numero do index, lista completa do array
// })




// videoGames[0] // Switch
// videoGames[2] // Xbox

// videoGames.pop(); // Remove o ultimo item e retorna ele

// videoGames.push('3DS'); // Adiciona um item ao final do array

// videoGames.length;

// for (let numero = 0; numero < 10; numero++) {
//     console.log(numero);
// }

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }



// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anoCopas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (i = 0; i < anoCopas.length; i++) {
    console.log(`O Brasil ganhou a copa de ${anoCopas[i]}`);
}

anoCopas.forEach(function (item) {
    console.log(`..O Brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);