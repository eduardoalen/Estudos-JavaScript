// // const imgs = document.querySelectorAll('img');
// // console.log(imgs);

// // let i = 0;
// // imgs.forEach(function(item, index, array){
// //     // console.log(item, index, array);
// // });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// // console.log(titulos);
// // console.log(titulosArray);

// titulosArray.forEach(function(item){
//     console.log(item);
// });


// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//     console.log(item, index);
// });

// imgs.forEach(function() {
//     console.log(i++);
// });

// imgs.forEach(() => console.log(i++));



// Mostre no console cada parágrado do site
const listaParagrafos = document.querySelectorAll('p');
listaParagrafos.forEach((paragrafo) => {
    console.log(paragrafo);
})

// Mostre o texto dos parágrafos no console
listaParagrafos.forEach((paragrafo) => {
    console.log(paragrafo.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));

