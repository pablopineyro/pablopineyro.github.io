// Add your code here

let myName = 'Default'; //Cambiarlo de const a let permite que el nombre funcione
myName = 'Chris';

let myAge = 42; //Al borrar las comillas deja de leerlo como String

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);