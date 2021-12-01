const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log(`Foi aprovado com a nota ${nota}`);
    } else {
        console.log(`Foi reprovado com a nota ${nota}`);
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('epa!'); //tomar cuidado, como a string 'epa!' não é >= que 7 ele vai para o else. Dando como reprovado.


