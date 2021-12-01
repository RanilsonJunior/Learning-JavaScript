const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//O 'break' influençia(funciona) no switch, for e while. Ele também vai agir do código mais próximo dele(do tipo switch,for e while)

for (x in num) { //O 'x' é o índice do array
    if (x == 5) { //Quando chegar no índice 5 ele irar parar.
        break //Quando chegar no índice 5 ele irar parar e sair do laço.
    }
    console.log(`${x} = ${num[x]}`);
}

//O 'continue' influençia(funciona) o for e while. Ele também vai agir do código mais próximo dele(do tipo for e while)
for (y in num) {
    if (y == 5) {
        continue //Quando chega no índice 5 ele não irar mostrar e vai pular ele, continuando o laço.
    }
    console.log(`${y} = ${num[y]}`);
}