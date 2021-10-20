const escola = 'coder'; //sempre começa no 0,1,2,3 e 4...
const sentimento = 'Eu';
const quem = 'de você ';
const aprendendo = 'Aprendendo php com o curso, gosto de php.';
const nome = 'Ranilson de Andrade Saraiva Júnior';
const email = 'ranilsonjunior2@gmail.com';

console.log(escola.charAt(4)); //mostra o que tem no indice número 4.
console.log(escola.charAt(7)); //mostra o que tem no indice número 7 (como não tem nada, não aparece nada).
console.log(escola.charCodeAt(3)); //mostra o que tem no indice número 3 (utilia a tabela unicode)
console.log(escola.indexOf('r')); //mostra se tem a letra ou número em STRING no texto.
console.log(escola.substring(2)); //fala que só vai mostrar do indice 2 para frente.
console.log(escola.substring(0,2)); //primeira linha vi mostra do indice 0 pra frente, quando chegar no indice 2 ele não vai mostrar o segundo indice para frente (Forma resumida vá do indice 0 e me de 2 caracteres).
console.log(sentimento,'gosto',quem.concat(escola).concat('!'));//serve para concatenar, colocando direto a variavel.
console.log(escola.replace('o',3)); //a letra 'o' vai ser trocada pela letra 'y'.
console.log(aprendendo.replace(/php/g,'Java Script')); //todas as palavras escritas 'php' vão ser trocadas por 'Java Script'.

console.log('Ana,Maria,Pedro'.split(',')); //coverte para um array, com ele pegando a virgula.
console.log(nome.split(' ',3)); //vai pegar o que tiver espaço e quando cheagar no terceiro espaço vai parar.
console.log(email.split('@',1)); // quando chegar no '@' ira parar.
console.log(aprendendo.split(/[\s,]+/));