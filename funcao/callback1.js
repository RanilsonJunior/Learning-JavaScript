const linguagens = ['HTML', 'CSS', 'JavaScript', 'SASS', 'React']; // Aqui são os eventos do callback. Toda vez que ele encontra um novo elemento, que seria o array, ele chama o callback.

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

linguagens.forEach(imprimir);

linguagens.forEach(function (titulo){ // Está pegando só o nome, criando uma function direto quando chamado.
    console.log(titulo);
});

linguagens.forEach(titulo => console.log(titulo)); //resumido