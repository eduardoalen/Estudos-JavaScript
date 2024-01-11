// const oculos = document.getElementById('oculos');
// console.log(oculos); // imprime a tag que tem o id oculos

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection); // imprime uma lista de elementos que tem essa classe

// console.log(gridSection.length);

// console.log(gridSection[0]); // pega o primeiro elemento da lista de classes

// const contato = document.getElementsByClassName('grid-section contato'); // lista a tag que tem a classe grid-section e contato
// console.log(contato);

const ul = document.getElementsByTagName('ul');

// Pega sempre o primeiro elemento do html
const oculos = document.querySelector('.oculos');

const contato = document.querySelector('#contato');

const ultimoItem = document.querySelector('.oculos-lista li:last-child'); // pegar o ultimo li que tiver no html

const linkInternos = document.querySelector('[href^="https://"]');
// ↑ pega todo elemento que tiver href que começa com https...
const primeiroUL = document.querySelector('ul');

// Busco dentro do ul apenas
const navItem = primeiroUL.querySelector('li');

const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.oculos-lista img');

console.log(gridSection[1]); //retorna o segundo elemento