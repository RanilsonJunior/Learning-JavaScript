// função em JS é First-Class Object (Citizens)
// Hígher-order function



//Criar de forma literal
function fun1 () {

}

//Armazenar em uma variavel
const fun2 = function () {

}; //quando for em uma variavel no final tem que terminar em ';'.

//Armazenar em um array
const array = [function (a, b) {
    return a + b
}]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa!'}
console.log(obj.falar());

//Passar uma função como parametro
function run (fun) {
    fun()
}

run(fun)

function fun() {
    console.log('Executando.....');
}

// ou run(function () { console.log('executando....')})


// Uma função pode retorna/conter uma função
function soma (a,b) {
    return function (c) {
        console.log(a+b+c);
    }
}

soma(5,5)(5);
const cinco = soma(2,2);
cinco(3);


