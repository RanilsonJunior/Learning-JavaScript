let numero1 = Number (prompt('Digite o primeiro número:'));

while (numero1 < 1 || numero1 > 10) {
    numero1 = Number (prompt('Digite o primeiro número:'));   
}

let numero2 = Number (prompt('Digite o segundo número:'));

while (numero2 < 1 || numero2 > 10) {
    numero2 = Number (prompt('Digite o segundo número:'));    
}

let soma = numero1 + numero2;

alert(`O resultado da soma é: ${soma}`)