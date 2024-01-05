var pessoa = {
    nome: 'Eduardo',
    idade: 21
}

console.log(pessoa.nome);

// var quadrado = {
//     lados: 4,
//     area: function(lado) {
//         return lado * lado;
//     },
//     perimetro: function(lado) {
//         return this.lados * lado;
//     }
// }
var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.PI);
console.log(Math.random());

var height = 200;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        console.log(height, this.height);
        return this.height / 2;
    }
}

var bg = menu.backgroundColor; 

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
    console.log('Escondii');
}

console.log(menu);
console.log(menu.metadeHeight());

console.log(menu.hasOwnProperty('color')); //retorna true ou false

console.log('Eduaaa'.length);


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoais = {
    nome: 'Eduardo',
    sobrenome: 'Alencar',
    altura: 1.80,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
console.log(dadosPessoais.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;
console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  const cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'Latir';
        } else {
            return 'Nada';
        }
    }
  }
console.log(cachorro.latir('mulher'));


var nome = 'Eduardo';
nome.replace('do', 'dinho'); // 'Eduardinho'

nome.charAt(1); // 'd'
  