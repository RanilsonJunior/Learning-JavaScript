const valores = [7.7, 8.9, 6.3, 9.2]; /*iniciasse no 0 depois 1,2,3... e por ae vai*/
console.log(valores[0], valores[3]);
console.log(valores[4]); /*caso você tente acessar um índice que não tenha nada declarado ele vai dar que o valor está indefinido*/

valores[4] = 10.1;
console.log(valores);

valores [6] = 13; /*fala que tem 1 item vazio no meio*/
console.log(valores); 

console.log(valores.length); /*fala quantos elementos a no array*/

valores.push ({id: 3}, false, null, 'teste', undefined); /*comando 'push' adiciona novos elementos no array. Ele aceita varios objetos como: OBJETO, BOOLEAN, VALOR NULO (null), UNDEFINED E STRING.*/
console.log(valores);

console.log(valores.pop()); /*retirar o último valor do array*/

delete valores[0]; /*nesse caso seria o array no índice '0'*/
console.log(valores); /*retira o array especificado*/

console.log(typeof valores); /*o array é do tipo object*/