var numero = 1;
{ //o javascript olha primeiro o escopo menor (que seria. O de bloco '{}'. Outro nome seria escopo interno) para depois ver o de fora.
    let numero = 2;
    console.log(`dentro = ${numero}`);
}  
console.log(`fora = ${numero}`);


// var = escopo global e escopo de função.
// let = escopo global, escopo de função e escopo de bloco.