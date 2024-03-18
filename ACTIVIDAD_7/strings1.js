// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap ";
const quoteEnd = "but by the seeds that you plant."; //La otra mitad

const finalQuote = quoteStart + quoteEnd; //Se juntan las citas para que quede completa

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);