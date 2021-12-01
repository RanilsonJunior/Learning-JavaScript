const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log(`Primeiro: valor é ${nota}.`);
            break/*Caso não tenha o BREAK mesmo colocando para entrar no case 10, ele ira entrar e depois entrar nos outros a baixo, mesmo não sendo chamando*/
        case 9:
            console.log(`Segundo: valor é ${nota}.`);
            break
        case 8: case 7:
            console.log(`Terceiro: valor é ${nota}.`);
            break
        case 6: case 5: case 4:
            console.log(`Quarto: valor é ${nota}.`);
            break
        case 3: case 2: case 1:
            console.log(`Quinto: valor é ${nota}.`);
            break
        case 0: 
            console.log(`Sexto: valor é ${nota}.`);
            break
        default:
            console.log(`Número inválido!`);  /*Caso não entre em nenhum case irar entrar nesse*/
    }
}

imprimirResultado(8);
imprimirResultado(5);
imprimirResultado(1);
imprimirResultado(0);
imprimirResultado();
imprimirResultado(17);
imprimirResultado(-32);
imprimirResultado(5.7); /*Entrou nesse porque o 'Math.floor' arrendonda os números par baixo*/