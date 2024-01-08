// // window.alert('Isso mesmo'); // window é um objeto global, então eu poderia colocar alert('Isso mesmo') que também irá funcionar

// const href = window.location.href;
// console.log(href);

// if(href === 'http://127.0.0.1:5500/DOM/o-que-e-o-dom/') {
//     console.log('É igual');
// }

// const h1Selecionada = document.querySelector('h1');

// const h1Classes = h1Selecionada.classList;

// h1Selecionada.classList[0]; // 1 para segunda classe, 2 para a terceira...

// const titulo = document.querySelector('h1');

// titulo.innerText;
// titulo.id;
// titulo.offsetHeight;

// function callbackh1() {
//     console.log('Clicou em ', titulo.innerText);
// }

// titulo.addEventListener('click', callbackh1);


// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');
console.log(ativo);

// Retorne a linguagem do navegador
const linguagem = navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);
