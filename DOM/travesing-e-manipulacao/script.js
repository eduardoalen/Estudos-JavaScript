const menu = document.querySelector('.menu');

console.log(menu.outerHTML); // todo o html do elemento

console.log(menu.innerHTML); // html interno

console.log(menu.innerText); // texto, sem tags

const h1 = document.querySelector('h1');

// h1.innerText = '<p>Teste</p>' //coloca como texto
// h1.innerHTML = '<p>Teste</p>' //rederiza como tag html
h1.outerHTML = '<p>Teste</p>' //substitui pela tag

