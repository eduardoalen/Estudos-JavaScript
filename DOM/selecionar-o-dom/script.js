// const oculos = document.getElementById('oculos');
// console.log(oculos); // imprime a tag que tem o id oculos

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection); // imprime uma lista de elementos que tem essa classe

// console.log(gridSection.length);

// console.log(gridSection[0]); // pega o primeiro elemento da lista de classes

// const contato = document.getElementsByClassName('grid-section contato'); // lista a tag que tem a classe grid-section e contato
// console.log(contato);

// const ul = document.getElementsByTagName('ul');

// // Pega sempre o primeiro elemento do html
// const oculos = document.querySelector('.oculos');

// const contato = document.querySelector('#contato');

// const ultimoItem = document.querySelector('.oculos-lista li:last-child'); // pegar o ultimo li que tiver no html

// const linkInternos = document.querySelector('[href^="https://"]');
// // ↑ pega todo elemento que tiver href que começa com https...
// const primeiroUL = document.querySelector('ul');

// // Busco dentro do ul apenas
// const navItem = primeiroUL.querySelector('li');

// const gridSection = document.querySelectorAll('.grid-section');
// const listas = document.querySelectorAll('ul');
// const titulos = document.querySelectorAll('.titulo');
// const fotosAnimais = document.querySelectorAll('.oculos-lista img');

// console.log(gridSection[1]); //retorna o segundo elemento


// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// primeiroUL.classList.add('grid-section');

// // console.log(gridSectionHTML);
// // console.log(gridSectionNode);

// gridSectionNode.forEach(function(item, index){
//     console.log(index, item);
// });


// // transforma em Array
// const arrayGrid = Array.from(gridSectionHTML);

// arrayGrid.forEach(function(item){
//     console.log(item);
// })


// Retorne no console todas as imagens do site
const imagens1 = document.querySelectorAll('img');
console.log(imagens1);
const imagens2 = document.getElementsByTagName('img');
console.log(imagens2);

// Retorne no console apenas as imagens que começaram com a palavra imagem no nome do arquivo
const imagens3 = document.querySelectorAll('img[src^="img/imagem"]')

// Selecione todos os links internos (onde o href começa com #)
const linkInternos = document.querySelectorAll('[href^="#"');

// Selecione o primeiro h2 dentro de .animais-descricao
const tituloH2 = document.querySelectorAll('.oculos-descricao h2');
tituloH2[0];

// Selecione o último p do site
// const ultimoItem = document.querySelector('.oculos-lista li:last-child'); // pegar o ultimo li que tiver no html
const paragrafo = document.querySelectorAll('p');
const ultimoP = paragrafo[paragrafo.length - 1];
console.log(ultimoP)

