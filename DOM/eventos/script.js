// const img = document.querySelector('img');

// function callback(event) {
//     console.log(event);
// }

// img.addEventListener('click', callback);


const animaisLista = document.querySelector('.oculos-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // referente ao item selecionado (ul)
    const target = event.target; // onde o clique ocorreu (img)
    const type = event.type; // tipo do evento que ocorreu (click)
}

animaisLista.addEventListener('click', executarCallback);


const linkExterno = document.querySelector('a[href^="https"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(this); // vai retornar o elemento a
    // retorna a mesma coisa se fosse o event.currentTarget
}

// linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function callback(event) {
    console.log(event.type, event);
}

// h1.addEventListener('mouseenter', callback); // executar só na primeira vez que você passa o mouse 
// // window.addEventListener('mousemove', callback); // executa a função a cada movimento que você der no elemento

// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
//Como adicionar a atalhos para facilitar a navegação do seu site (teclas do teclado)

function handleKeyboard(event) {
    if(event.key === 'r') {
        document.body.classList.toggle('rosa');
    }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target.getAttribute('src')); // retorna o elemento clicado
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});