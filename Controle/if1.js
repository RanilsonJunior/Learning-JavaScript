function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1); //Como é falso ee não aparece.
soBoaNoticia(7);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`É verdade... ${valor}`);
    }
}

//Falso
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(''); //uma string vazia.
seForVerdadeEuFalo(0);

//Verdadeiro
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(4);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('texto');
seForVerdadeEuFalo([]); //um array vazio.
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({}); //um objeto vazio.