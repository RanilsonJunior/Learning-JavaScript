function Pessoa (first, last) { // Não é uma regra, mas e utilizado letra maiuscula na primeira letra.
    this.first = first;
    this.last = last;
    // A palavra 'this.last' o last significa { last: 'Saraiva ou Moraes' }, você trocando o primeiro last por exemplo 'ultimo' irá sair assim { ultimo: 'Saraiva ou Moraes'} .
}

const full1 = new Pessoa ('Ranilson', 'Saraiva');
const full2 = new Pessoa ('Luiza', 'Moraes'); // Basicamente quando é utilizando a palavra 'NEW', ela cria um objeto vazio, pega os elementos 'THIS' da função 'Pessoa' como foi escrito, e sem precisar do retun joga na nova variavel que você criou 'full1'.

console.log(full1);
console.log(full2);
console.log(full1.last);
console.log(full2.last);

console.log(typeof Pessoa); // 'Pessoa' é igual a uma função.
console.log(typeof full1); // Quando utiliza o 'new' ele vira u objeto.