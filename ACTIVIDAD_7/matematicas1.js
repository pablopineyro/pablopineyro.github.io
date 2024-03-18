let finalResult;

let evenOddResult;

// Add your code here

let num1 = 2;
let num2 = 4;
let num3 = 10;
let num4 = 2;
let sum = num1+num2;
let difference = num3-num4;
finalResult = sum*difference; //Almacena el resultado de la multiplicacion en finalResult
evenOddResult = finalResult%2 //Verifica que finalResult sea par

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);