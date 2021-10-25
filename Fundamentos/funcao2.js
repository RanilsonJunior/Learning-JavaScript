// Armazenando um funcao em uma variavel.

const imprimirSoma = function (a,b) { //isso seria uma funcao anonima, por que você não deu um nome para ela.
    console.log(a+b);
}

imprimirSoma(2,3);

// Armazenando uma funcao arrow em uma variavel.

const soma = (a,b=1) => {
   return a+b; 
}

console.log(soma(2,5));
console.log(soma(2));

// Retorno implícito

const subtracao = (a,b) => a-b
console.log(subtracao(8,5));