// 'use strict'
// function mostrarCarro() {
//     var carro = 'fusca'
//     console.log(carro);
// }

// mostrarCarro();

// if (true) {
//     const carro1 = 'gol';
//     console.log(carro1);
// }
// // console.log(carro1); // dar erro quando a variavel é let ou const


// // for (var i = 0; i< 10; i++) {
// //     console.log(`Numero ${i}`);
// // }

// // console.log(i); // 10

// // for (let i = 0; i< 10; i++) {
// //     console.log(`Numero ${i}`);
// // }

// // console.log(i); // dar erro pois com o let não é possivel pegar fora do for

// const semana = 'Sexta';
// // semana = 'Quinta'; // dar erro

// const data = {
//     ano: 2018,
//     mes: 'Dezembro',
// }

// // data = 'Olaa' // Dar erro

// data.ano = 2024; // é possivel mudar o valor dos atributos
// data.dia = 25; // é possivel adicionar atributos




// Por qual motivo o código abaixo retorna com erros?
// {
//     var cor = 'preto';
//     const marca = 'Fiat'; //
//     let portas = 4; //
//   }
//   console.log(cor, marca, portas);
  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  