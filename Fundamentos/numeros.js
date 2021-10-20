const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Para saber se o número é um number inteiro
console.log(Number.isInteger(peso2)); // Para saber se o número é um number inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 +avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(3)); // toFixed serve para você falar quantas casas decimais vai querer depois da vírgula.


console.log(media.toString()); //toString serve para converter para string o number.

