//let dobro = function (a) {
//    return 2 * a;
//}

let dobro = (a) => { // Não tem nome, tem que ser atrelada a uma variavel.
    return 2 * a;
}

console.log(dobro(10));

dobro = a => 2 * a 
// Não precisa utilizar os parenteses '()' no parametro 'a' quando tiver só um parametro.
// Quando tirar as chaves '{}' o RETURN está implícito.
console.log(dobro(Math.PI));



let ola = function () {
    return 'Olá'
}

ola = () => 'olá';
ola = _ => 'olá'; //possui um parametro

console.log(ola());