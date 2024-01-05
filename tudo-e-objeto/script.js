var nome = 'Eduardo';
nomeMinusculo = nome.toLowerCase();

var altura = 1.8;
altura.toFixed(); // 2

altura.toString(); // '1.8'


function areaQuadrado(lado) {
    return lado * lado;
}
areaQuadrado.length; // 1

areaQuadrado.toString(); // 'function areaQuadrado(lado) { return lado * lado; }'

var btn = document.querySelector('.btn');
// btn.classList.add(ativo);

btn.addEventListener('click', function() {
    console.log('cliquei');
})

console.log(btn.classList);

// btn.classList.add(ativo);


// nomeie 3 propriedades ou métodos de strings
nome = 'Eduardo';
// fixed
// length
// slice


// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// addEventListener
// appendChild
// id
// innerHtml
// outerHtml
console.log(btn);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


