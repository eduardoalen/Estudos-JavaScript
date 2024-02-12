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
    console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);