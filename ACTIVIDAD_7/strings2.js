const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here

const quoteLength = quote.length; //Obtiene longitud de la cita
const index = quote.indexOf(substring); //Busca posicion del indice donde aparece substring en quote y la almacena en index
const revisedQuote = quote.slice(0, index) + substring + '.'; //Recorta la cita

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);