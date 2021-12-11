const raiz1 = function (n) {
    return n ** 0.5;
};

console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));

const raiz2 = (n) => n ** 0.5;


console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));







function parImpar (n) {
    if (n%2 == 0) {
        return `O número de ${n} é Par!`
    } else {
        return `O número de ${n} é Impar!`
    }
}

resultado = parImpar(5)

console.log(resultado);







const x = function (numero) {
   resultado = numero*2
    return `O ${numero} multiplicado por 2 dá ${resultado}.`
}

console.log(x(2));
console.log(x(6));
console.log(x(37));
console.log(x(1));





const y = function (fatorial) {
    resultado = fatorial*4*3*2*1
    return `O fatorial de 5 é ${resultado}`
}

console.log(y(5));
