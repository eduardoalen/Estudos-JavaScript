// const menuu = document.querySelector('.menu');

// menuu.classList.replace('ativo', 'inativo');

// menuu.classList.contains('ativo'); // true ou false 

// menuu.classList.toggle('ativo'); // adiciona/remove a classe

// menuu.classList.remove('ativo');

// menuu.classList.add('ativo', 'azul');

// if(menuu.classList.contains('azul')) {
//   menuu.classList.add('possui-azul');
// } else {
//   menuu.classList.add('nao-possui-azul');
// }


// const menu = document.querySelector('.menu');

// // substitui todas as classes pela classe ativo, teste e azul
// menu.className = 'ativo teste azul'

// // Adicionar uma nova classe, sem remover as que já existem
// menu.className = menu.className + ' vermelho';
// // ou
// // menu.className += ' vermelho'

// // console.log(menu.className);

// // const oculos = document.querySelector('.oculos');

// // console.log(oculos.attributes.class);

// // console.log(oculos.attributes.id);

// // console.log(oculos.attributes['data-texto']);

// const img = document.querySelector('img');

// img.removeAttribute('alt');

// img.hasAttribute('alt'); //true ou false


// img.setAttribute('alt', 'É um ôculos');

// img.getAttribute('src');
// console.log(img.getAttribute('src')); // pegar o valor do src


// const oculos = document.querySelector('.oculos');

// oculos.className; // string com o nome das classes
// oculos.className = 'azul'; // substitui completamente a string
// oculos.className += ' vermelho'; // Adiciona vermelho a strign



// Adicione a classe ativo a todos os itens do menu
const itemMenu = document.querySelectorAll('.menu a');

itemMenu.forEach((item) => {
  item.classList.add('ativo');
  // console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
for(let i = 1; i < itemMenu.length; i++) {
  itemMenu[i].classList.remove('ativo');
}

itemMenu.forEach((item) => {
  console.log(item);
});

// // Verifique se as imagens possuem o atributo alt
// const img = document.querySelectorAll('img[src^="img/imagem"]');

// img.forEach((item) => {
//   console.log(item.hasAttribute('alt'));
//   if(item.hasAttribute('alt') === false) {
//     item.setAttribute('alt', 'É um óculos');
//   }
// });

// img.forEach((item) => {
//   console.log(item.hasAttribute('alt'));
// });

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https"]');

linkExterno.setAttribute('href', 'https://www.google.com/');
console.log(linkExterno);