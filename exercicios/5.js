function real(numeroReal) {
    valor = `R$ ${numeroReal.toFixed(2).replace('.',',')}`
    console.log(valor); 
}

real(0.1 + 0.2);