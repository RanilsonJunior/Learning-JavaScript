function triangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
       return console.log(`${lado1}, ${lado2} e ${lado3} São iguais equilátero`);
    } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
       return console.log('Dois lados iguais isósceles');
    } else {
       return console.log('Escalenos');
    }    
}

triangulo(2, 2, 2);
triangulo(2, 3, 3);
triangulo(2, 3, 4);
