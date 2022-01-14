function Teste (nome, idade) {
    this.outroNome = nome;
    this.outraIdade = idade;
}

let meuTeste = new Teste('Ranilson', 27);

console.log(meuTeste);



let pessoa = {
    nome1: 'ranilson',
    idade1: 27,
    falar() {
        console.log(`Oi, tudo bem?`);
    },
    pegandoIdade: function() {  // this está pegando todo o objeto.
        console.log(`Meu nome é ${this.nome1} e tenho ${this.idade1} anos.`);
    },
    aniversario: function() {
        this.idade1 += 1; 
    }
}

console.log(pessoa.idade1);
pessoa.falar();

// Seria a mesma coisa que falar nome.pessoa()
pessoa.pegandoIdade();

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade1);
pessoa.pegandoIdade();
