function tratarErroELancar(erro) {
    throw new Error('Foi achado um erro!!!') //O que vai aparecer quando acontecer um erro.
}

function imprimirNomeGrito(obj) {
    try { //caso ocorra um erro
        console.log(obj.name.toUpperCase()+ '!!!!!') 
    } catch (e) { //Se acontecer um erro vai chamar a função.
        tratarErroELancar(e)
    } finally {
        console.log('FINAL'); //mesmo que funcione ou de errado, vai aparecer.
    }
}

const obj = {name: 'Ranilson'}
imprimirNomeGrito(obj)