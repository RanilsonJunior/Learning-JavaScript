const [a] = [10] //criando um array, ele fica do lado direito
console.log(a);

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8] //usando o operador de destruturação, ele fica do lado esquerdo.
console.log(n1, n3, n5, n6);

const [ , [ ,nota, nota1] ] = [[, 8, 8], [9, 6, 8]]
console.log(nota, nota1);

//no primeiro array do lado esquerdo do 'nota', como está vazio ele fala para ignorar ele, que seria o '8, 8'. No 'nota' tem do lado esquedo uma virgula, quer dizer para ignorar o primeiro elemento, que seria o '9' e depois mostrar o segundo elemento que seria o '6' e depois o terceiro que seria o '8'. Dentro das variaveis 'nota' e 'nota1'.