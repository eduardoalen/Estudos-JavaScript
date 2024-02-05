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
