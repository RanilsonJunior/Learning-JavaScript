function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida ${opcao}`);
}

console.log(`Até a proxima!!!!!`);


let numero = 0;

while ( numero <= 10) {
    console.log(`É ${numero}`);
    numero++;
}

console.log(`Acabou!!!!!`);