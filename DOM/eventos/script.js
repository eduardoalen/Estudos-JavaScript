// const img = document.querySelector('img');

// function callback(event) {
//     console.log(event);
// }

// img.addEventListener('click', callback);


// const animaisLista = document.querySelector('.oculos-lista');

// function executarCallback(event) {
//     const currentTarget = event.currentTarget; // referente ao item selecionado (ul)
//     const target = event.target; // onde o clique ocorreu (img)
//     const type = event.type; // tipo do evento que ocorreu (click)
// }

// animaisLista.addEventListener('click', executarCallback);


// const linkExterno = document.querySelector('a[href^="https"]');

// function handleLinkExterno(event) {
//     event.preventDefault();
//     console.log(this); // vai retornar o elemento a
//     // retorna a mesma coisa se fosse o event.currentTarget
// }

// // linkExterno.addEventListener('click', handleLinkExterno);

// const h1 = document.querySelector('h1');

// function callback(event) {
//     console.log(event.type, event);
// }

// // h1.addEventListener('mouseenter', callback); // executar só na primeira vez que você passa o mouse 
// // // window.addEventListener('mousemove', callback); // executa a função a cada movimento que você der no elemento

// // window.addEventListener('scroll', callback);
// // window.addEventListener('resize', callback);
// //Como adicionar a atalhos para facilitar a navegação do seu site (teclas do teclado)

// function handleKeyboard(event) {
//     if(event.key === 'r') {
//         document.body.classList.toggle('rosa');
//     }
// }

// window.addEventListener('keydown', handleKeyboard);

// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//     console.log(event.target.getAttribute('src')); 
//     // retorna o valor do src do elemento clicado
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', handleImg);
// });




// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const linksInterno = document.querySelectorAll('a[href^="#"]');

// function manipulaClass(event) {
//     event.preventDefault();

//     linksInterno.forEach((link) => {
//         link.classList.remove('ativo');
//     })
//     event.target.classList.add('ativo');
// }

// linksInterno.forEach((link) => {

//     link.addEventListener('click', manipulaClass);

// });



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll('body *');

// function mostrarElemento(event) {
//     event.preventDefault();
//     console.log(event.currentTarget);
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', mostrarElemento);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos = document.querySelectorAll('body *');

// function mostrarElemento(event) {
//     event.preventDefault();
//     console.log(event.currentTarget);
//     // console.log(event.currentTarget.remove());
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', mostrarElemento);
// });


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentaTexto(event) {
    console.log(event.key);
    if(event.key === 't') {
        // document.documentElement: eu estou falando com o HTML
        document.documentElement.classList.toggle('textomaior');
        };
    }

window.addEventListener('keydown', aumentaTexto);