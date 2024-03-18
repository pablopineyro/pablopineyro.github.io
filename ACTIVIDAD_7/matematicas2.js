// Final result should be 4633.33
// Add/update your code here

let result = (7 + 13) / (9 + 7); //Parentesis agregados para que de el resultado correcto
let result2 = 100 / (2 * 6);

result *= result2 //Se multiplican aqui result y result2 actualizando el valor de result

let finalResult = result.toFixed(2); //Formateo del resultado a dos decimales

let finalNumber = Number(finalResult); //Conversion de finalResult a tipo number

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);