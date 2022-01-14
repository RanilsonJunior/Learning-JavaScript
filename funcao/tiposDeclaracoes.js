console.log(soma(5,5)); // A function declaration diferente da function expression vai ser lida primeira, mesmo colocando o log aqui em cima, o JavaScript lê primeiro a function declaration, para depois ver as outras coisas no código.

// console.log(sub(5,2)); // Vai dar erro, por que o JavaScript não lê function expression a cima do escopo da function.

// console.log(mult(5,2)); // Vai dar erro pelo mesmo motivo do erro da function declaration.



// Function declaration
function soma (x,y) {
    return x + y;
}

// Function expression (FUNÇÃO ANONIMA)
const sub = function (x,y) {
    return x - y;
}
console.log(sub(5,2)); // já aqui funciona por estar a baixo do escopo da function.


// Named function expression
const mult = function mult (x,y) {
    return x * y;
}

console.log(mult(5,5)); // já aqui funciona por estar a baixo do escopo da function.