function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicaao) {
    resultado = capitalInicial * ( taxaDeJuros/100) * tempoDeAplicaao;
    return console.log(resultado);
}

jurosSimples(2000, 10, 2)



function jurosComposto (capitalInicial, taxaDeJuros, tempoDeAplicaao) {
    resultado = capitalInicial * (1 + (taxaDeJuros/100)) ** tempoDeAplicaao;
    return console.log(resultado); 
}

jurosComposto(1400, 7, 2)





function teste(valor) {
    resu = valor/100
    return console.log(resu);
}

teste(5);