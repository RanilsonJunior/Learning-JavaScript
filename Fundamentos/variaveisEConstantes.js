var a = 3;
let b = 4;

var a = 30;
 b = 40; // não pode chamar denovo (colocando o let no começo).

console.log(a,b);

a = 300;
b = 400;

console.log(a,b);

const c = 5; // não pode trocar o valor da variável
//c = 50;
console.log(c);