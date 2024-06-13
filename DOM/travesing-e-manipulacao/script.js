const menu = document.querySelector('.menu');

console.log(menu.outerHTML); // todo o html do elemento

console.log(menu.innerHTML); // html interno

console.log(menu.innerText); // texto, sem tags

const h1 = document.querySelector('h1');

// h1.innerText = '<p>Teste</p>' //coloca como texto
// h1.innerHTML = '<p>Teste</p>' //rederiza como tag html
h1.outerHTML = '<p>Teste</p>' //substitui pela tag

// const lista = document.querySelector('.oculos-lista');

// console.log(lista.parentElement); // tag pai do elemento
// console.log(lista.nextElementSibling); // proxima tag do elemento
// console.log(lista.previousElementSibling); // tag anterior do elemento

// console.log(lista.children); // retorna uma lista com as tags internas do elemento
// lista.children[0]; // acessar algum elemento

// lista.children[--lista.children,length]; // acessar o ultimo item
// console.log(document.querySelector('li:last-child'));// acessar o ultimo item

const lista = document.querySelector('.oculos-lista');

// console.log(lista.childNodes); //pega os nodes do uma tag 
// console.log(lista.previousSibling); //pega o node anterior da tag
//pega o primerio node, dentro da tag
console.log(lista.childNodes[0]); 
console.log(lista.firstChild); 