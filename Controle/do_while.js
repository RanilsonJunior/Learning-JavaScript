function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1; //Caso fosse o while não entraria, por que o while olha primeiro a condição.

do {
    opcao = getInteiroAleatorioEntre(-1, 10) //A diferença com o while é que primeiro ele faz a operação, para depois ver se deu -1.
    console.log(`Opção escolhida ${opcao}`);
} while (opcao != -1)

console.log(`Até a proxima!!!!!`);

let numero = 0;

do {
    console.log(`É ${numero}`);
    numero++;
} while ( numero <= 10)

console.log(`Acabou!!!!!`);