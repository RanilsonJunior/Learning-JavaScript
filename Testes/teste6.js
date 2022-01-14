// Exercício 01
// const nome = 'ranilson';
// const numero1 = 1030;
// const numero2 = '1030';
// const numero3 = Number ('1030');
// const verdade = true;

// console.log(typeof nome);
// console.log(typeof numero1);
// console.log(typeof numero2);
// console.log(typeof numero3);
// console.log(typeof verdade);



// Exercício 02
// const idade = 16;

// if (idade >= 18) {
//     console.log('Maior de idade, pode entrar!');
// } else {
//     console.log('Menor de idade, não pode entrar!');
// }



// Exercício 03
// const nome = 'Ranilson';

// if (nome === 'Ranilson') {
//     console.log(`Oi ${nome}`);
// } else {
//     console.log('O nome não e válido');
// }



// Exercício 04
// const base = 5;
// console.log(Math.pow(2,2));
// console.log(Math.pow(3,2));
// console.log(Math.pow(18,2));
// console.log(Math.pow(base,2));



// Exercício 05
// const velocidade = 120;

// if (velocidade >= 80) {
//     console.log(`VELOCIDADE ${velocidade}!!! você ultrapaço o número permitido.`);
// } else {
//     console.log(`VELOCIDADE ${velocidade}!!! velocidade baixa.`);
// }

// Exercício 06
// const idade = 5;
// const cnh = false;

// if (idade >= 18 &&  cnh == false) {
//     console.log(`Você tem mais de 18 anos mas a CNH é ${cnh}`);
// } else if (idade >= 18 && cnh == true) {
//     console.log(`Você tem mais de 18 anos e a CNH é ${cnh}`);
// } else  {
//     console.log(`Você tem menos de 18 anos e a CNH é ${cnh}`);
// }



// Exercício 07
// let num = 0;

// while (num <= 10) {
//     console.log(`${num}`);
//     num++;
// }




// Exercício 08
// for (let i = 100; i >= 50; i--) { // Inicia no '100' e termina no '50'.
//     console.log(i);
// }




// Exercício 09
for (let i = 0; i <= 50; i++){
    if (i % 2 == 0){  // Seria se o 'resto' do 'i' dividido por '2' for igual a '0'.
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é Ímpar`);

    }
} 