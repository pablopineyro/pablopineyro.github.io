// Add your code here
// Declara una variable llamada myName
var myName;
// Inicializa myName con un valor adecuado
myName = "Pablo";
// Declara una variable llamada myAge e inicializa con un valor en la misma línea
var myAge = 19;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);