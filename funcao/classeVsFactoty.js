class Pessoa { // Classe
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    
    }
}

const p1 = new Pessoa('Ranilson')
p1.falar()

const criarPessoa = nome2 => { //Factory, diferente da classe ele não precisa utilizar o 'this'.
    return {
        falar: () => console.log(`Teste 2, meu nome é ${nome2}`)
    }
}

const p2 = criarPessoa('Luiza');
p2.falar();