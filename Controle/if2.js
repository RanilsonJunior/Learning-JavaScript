function teste1(num) {
    if(num > 7)  //caso tenha uma única sentença de código, pode deixar de colocar as chaves '{}', que ira funcionar.
        console.log(num);
    
    console.log('final');
}

teste1(6);
teste1(8);

function teste2(num2) {
    if(num2 > 7); { //cuidado com o ';' não usar com as estruturas de controle.
        console.log(num2);
    }
}

teste2(6);
teste2(8);