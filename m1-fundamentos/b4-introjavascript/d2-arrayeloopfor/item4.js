let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (const number of numbers) {
  soma += number;
}

let mediaAritmetica = soma / numbers.length;

if (mediaAritmetica > 20) {
  console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}
