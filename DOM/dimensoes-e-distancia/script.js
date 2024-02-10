const section = document.querySelector('.oculos');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo com um scroll dentro dele

// const listaOculos = document.querySelector('.oculos-lista');

// listaOculos.clientWidth; // width + padding
// listaOculos.offsetWidth; // width + padding + border
// listaOculos.scrollWidth; // width total, mesmo com um scroll dentro dele

const listaOculos = document.querySelector('.oculos-lista');

listaOculos.offsetLeft; //canto esquerdo do elemento e canto esquerdo da página
listaOculos.offsetTop; // topo do elemento e topo da página


const primeiroh2 = document.querySelector('h2');

const rect = primeiroh2.getBoundingClientRect();

// console.log(rect);
// console.log(rect.y);
rect.height; // altura do elemento
rect.width; // largura do elemento
rect.bottom; // distancia entre a parte de baixo do elemento com o top da tela
rect.top;// distancia entre a parte de cima do elemento com o topo da tela
rect.left; // distancia entre a parte esqueda do elemento com o lateral esquerda da tela
rect.right; // distancia entre a parte direita do elemento com o lateral esquerda da tela
rect.x; // eixo do elemento
rect.y; // eixo do elemento

// console.log(
//     window.innerWidth, //largura da tela
//     window.outerWidth, // largura da tela independente do console aberto
//     window.innerHeight, // altura da janela
//     window.outerHeight, // soma a barra de endereço (não é muito utilizado)

//     window.pageYOffset, // distancia total do scroll vertical
//     window.pageXOffset // distancia total do scroll horizontal
// );

const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//     console.log('Tela menor que 600px');
// } else {
//     console.log('Tela maior que 600px');
// }


// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
// console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');

    let = soma = 0;
    imagens.forEach((item) => {
        soma = soma + item.offsetWidth;
    });
    // console.log(soma);
}

// executar essa função após a página carregar
window.onload = function () { 
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((item) => {
    if(item.offsetHeight >= 48 && item.offsetWidth >= 48){
        console.log(item, 'Atingiu o minimo recomendado')
    } else {
        console.log(item, 'Não atingiu o minimo recomendado')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const telaMenor = window.matchMedia ('(max-width: 720px)');

if(telaMenor.matches) {
    menu.classList.add('menu-mobile');
} else {
    console.log('tela de pc');
}