let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares = 0;

for (const number of numbers) {
    if (number % 2 !== 0) {
        valoresImpares++;
    }
}

if (valoresImpares > 0) {
    console.log(valoresImpares);
} else {
    console.log('Nenhum valor encontrado!');
}