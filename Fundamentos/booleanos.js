let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); /*caso coloque um '!' ele vira falso (inverte o que ele é) e caso coloque dois '!!' ele vira verdadeiro (o que ele é)*/ 

console.log('Os verdadeiros...');
console.log(!!3); /*um número sempre vai ser verdadeiro*/
console.log(!!-1); /*mesmo sendo negativo*/
console.log(!!' '); /*tem que ter o espaço*/
console.log(!!'texto'); /*caso tenha lago escrita ela é verdadeira*/
console.log(!![ ]); /*um array vazio, mesmo com ou sem espaço*/
console.log(!!{ }); /*um objeto literal vazio, mesmo com ou sem espaço*/
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...');
console.log(!!0); /*o zero sempre vai ser falso*/
console.log(!!-0); /*mesmo sendo negativo*/
console.log(!!''); /*string vazia sem espaço*/
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));

let nome = ''
console.log(nome || 'desconhecido');

