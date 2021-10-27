// novo recurso do ES2015

const pessoa = {
    nome: 'Ranilson',
    idade: 26,
    endereco: {
        rua: 'rua da UFPE',
        numero: 1030,
    }
}

const {nome, idade} = pessoa; //O que está dentro da chave você quer pegar, o que está depois do igual é onde está dentro para pegar.
console.log(nome, idade);

const {nome: no, idade: ida} = pessoa /*Aqui fala para fazer a mesma coisa do de cima, mas colocar na variavel 'no' e 'ida'.*/
console.log(no, ida);

const {endereco: {rua, numero,cep} } = pessoa /*A mesma coisa do primeiro só que primeiro e entra no 'pessoa' primeiro e depois no 'endereco' para pegar os objetos*/
console.log(rua,numero,cep);