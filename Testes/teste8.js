let valorPi = Math.random; // Mostra um número radom.
console.log(valorPi()); // Vira uma função.

console.log(Math.PI); // Mostra o número PI.

let valor = 9.4472; // Arrendonda para cima ou para baixo.
console.log(Math.round(valor));

console.log('alfabeto'.toUpperCase()); // Deixa as palavras em maiusculo.

let mt=Math.SQRT1_2; // Raiz quadrada de 1 e meio.
console.log(mt);

console.log(Math.floor(9.8181881)); // Arredonda para baixo.

console.log(Math.min(1,2,-10,-50,5,30,15));

let aleatorio = Math.round(Math.random() * (10 - 1) +1)
console.log(aleatorio);

console.log(Math.sqrt(60));

console.log(Math.sign('20'));

console.log(Math.trunc(13.123));

let nome = 'ranilson';
console.log(nome.length);

console.log(nome[3]);

let frase = 'One piece melhor anime';
console.log(frase.indexOf('melhor'));

let tirar = frase.slice(10, 16)
console.log(tirar);

let maiusculo = frase.toUpperCase();
console.log(maiusculo);

let menusculo = frase.toLowerCase();
console.log(menusculo);

let nomeComEspaco = '      Ranilson       '
console.log(nomeComEspaco);
let tirarEspaco = nomeComEspaco.trim();
console.log(tirarEspaco);

let tags = 'PHP,JavaScript,HTML,CSS';
console.log(tags.split(','));

let frase2 = 'vai repetir a palavra agora agora'
console.log(frase2.lastIndexOf('agora'));
console.log(frase2.indexOf('agora'));

let a = 15;
let b = a.toString();
console.log(a);
console.log(b);
console.log(typeof (a));
console.log(typeof (b));