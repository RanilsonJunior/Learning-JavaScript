function rand(min = 1000, max = 10000) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}


function palavra1() {
    setTimeout(function() {
        console.log('Palavra1');
    }, rand());
}

function palavra2() {
    setTimeout(function() {
        console.log('Palavra2');
    }, rand());
}

function palavra3() {
    setTimeout(function() {
        console.log('Palavra3');
    }, rand());
}

palavra1();
palavra2();
palavra3();
