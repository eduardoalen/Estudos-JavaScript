const menuu = document.querySelector('.menu');

menuu.classList.replace('ativo', 'inativo');

menuu.classList.contains('ativo'); // true ou false 

menuu.classList.toggle('ativo'); // adiciona/remove a classe

menuu.classList.remove('ativo');

menuu.classList.add('ativo', 'azul');

if(menuu.classList.contains('azul')) {
  menuu.classList.add('possui-azul');
} else {
  menuu.classList.add('nao-possui-azul');
}


const menu = document.querySelector('.menu');

// substitui todas as classes pela classe ativo, teste e azul
menu.className = 'ativo teste azul'

// Adicionar uma nova classe, sem remover as que já existem
menu.className = menu.className + ' vermelho';
// ou
// menu.className += ' vermelho'

console.log(menu.className);

const oculos = document.querySelector('.oculos');

console.log(oculos.attributes.class);

console.log(oculos.attributes.id);

console.log(oculos.attributes['data-texto']);
