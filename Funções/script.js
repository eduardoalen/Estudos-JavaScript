// function areaQuadrado (lado) {
//     return lado * lado;
// }
// console.log(areaQuadrado(5))

// function pi() {
//     return 3.14;
// }
// var total = 5 * pi();
// console.log(total);

// // peso e altura são os parâmetros
// function imc(peso, altura) {
//     const imc = peso / (altura * altura);
//     return imc;
// }
// console.log(imc(63, 1.80));

// function corFavorita(cor) {
//     if(cor === 'azul') {
//         return 'Eu gosot do céu';
//     }else if(cor === 'verde'){
//         return 'Eu gosto de mato';
//     } else {
//         return 'Eu não gosto de cores';
//     }
// }

// function cliquei(){
//     console.log('Cliquei');
// }

// addEventListener('click', cliquei);
//   // A função possui dois argumentos
//   // Primeiro é a string 'click'
//   // Segundo é uma função anônima


//   function imc2(peso, altura) {
//     const imc = peso / (altura * altura);
//     console.log(imc);
// }
// console.log(imc2(100, 1.60));


// function terceiraIdade (idade) {
//     if (typeof idade !== 'number') {
//         return 'Por favor preencha um número';
//     } else if(idade >= 60) { 
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(terceiraIdade('oii'));


// function faltaVisitar(paisesVisitados) {
//     const totalPaises = 193;
//     return `Faltam vistar ${totalPaises - paisesVisitados} países`;
// }


// var profissao = 'Design'

// function dados() {
//     var nome = 'Eduardo';
//     var idade = 28;
//     function outroDados(){
//         var endereco = 'Valparaiso';
//         var idade = 30;
//         return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//     }
//     return outroDados();
// }

// console.log(dados());



// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
    if(!!valor === true) {
        return 'O valor é verdadeiro';
    } else {
        return 'O valor é falso';
    }
}
var num = 'oii';
console.log(verificaValor(num));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(7));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `Meu nome é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Eduardo', 'Alencar'));

// Crie uma função que verifica se um número é par
function verificaNumero(numero) {
    if (typeof numero === 'number') {
        if ((numero % 2) === 0) {
            return `O numero ${numero} é par`;
        } else {
            return `O numero ${numero} é impar`
        }
    }else {
        return `O valor informado não é um número`;
    }
}
console.log(verificaNumero(81));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(valor) {
    return typeof valor;
}
console.log(tipoDado(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function nome() {
    console.log('Eduardo Alencar');
}
addEventListener('scroll', nome);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisita (paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisita(20));
console.log(jaVisitei(20));