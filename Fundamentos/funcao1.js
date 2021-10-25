// Funcao sem retorno

function imprimirSoma(a,b) {
    console.log(a+b);
}

imprimirSoma(6,10);
imprimirSoma(2); //como só tem 1 número ele vai somar 2 + undefined, que vai dar 'Not a Number'
imprimirSoma(20,1,2,3,4,5); //só vai pegar os dois primeiros números, e os outros não vai fazer nada. 
imprimirSoma(); //como não tem nada vai dar 'Not a Number'

// Funcao com retorno

function soma (a, b = 5) { //quando o valor não for passado, por padrão (que nos colocamos) ele vai ser '5'.
    return a + b
}

console.log(soma(2,7));
console.log(soma(1));