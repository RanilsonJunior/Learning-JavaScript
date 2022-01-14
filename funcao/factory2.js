function criarProduto(nome, preco, pais = 'brasil') {
    return {
        produto: nome, 
        preco, // Como o 'preco' já está no parametro então se quiser não precisa colocar ':' como no 'nome'.
        desconto: 0.1,
        pais
    }
}

console.log(criarProduto('notbook', 50));
console.log(criarProduto('televisão', 200));