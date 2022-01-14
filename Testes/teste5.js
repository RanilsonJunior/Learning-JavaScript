const person = {
    firstName: 'Ranilson',
    lastName: 'Saraiva',
};

function fullName () {
    return `Meu primeiro nome é ${this.firstName}, e meu último é ${this.lastName}.` // Tem que colocar o 'THIS' para ele pegar do objeto.
}

const chamandoNome = fullName.bind(person); // Você está linkando a 'FUNÇÃO' 'fullName' no OBJETO 'person'.

console.log(chamandoNome());