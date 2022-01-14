let numero = 10;

function numero1() {
    let numero = 20; // Ele vai pegar esse, por que pelo escopo léxico ele está mais perto
    // return numero2 ou pode colocar aqui
    function numero2() {
        return numero;
    }
    return numero2
}

const teste = numero1(); // Como a função numero1 retorna uma função(que seria o numero2), o const teste retém a função numero2.
console.log(teste());
console.log(numero1()()); // Para funcionar tem que locar assim, está chamando a função numero1 e depois chamando a função dentro do numero1, que seria a numero2.