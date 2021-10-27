let nume1 = 1;
let nume2 = 2;

nume1++
console.log(nume1);

--nume1
console.log(nume1);

console.log(++nume1 === nume2--); /*Fato interessante nesse caso ira dar true, por que no 'nume1' o ++ estava na frente então ele vale 2, já no nume2 o -- estava no final, então o JavaScript lê PRIMEIRO A VARIAVEL E DEPOIS TIRA DELE. Se colocar o -- na frente então vai dar FALSE.*/