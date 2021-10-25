 // parnome/valor
 const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = `falla`; // contexto léxico 2
    return saudacao
} 

// objetos são grupos anilhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradoura: 'rua muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);