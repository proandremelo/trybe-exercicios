//////////////// 1 //////////////

// function verificaPalindrome(palavra) {
//   let tamanhoPalavra = palavra.length;
//   let metade1 = palavra.slice(0, Math.round(tamanhoPalavra / 2));
//   let metade2 = palavra.slice(Math.round(tamanhoPalavra / 2) - 1).split('').reverse().join('');
//   if (metade1 === metade2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('arara'));

//////////////// 2 //////////////

// function indexOfMaxValue(array){
//     return array.indexOf(Math.max(...array));
// }

// console.log(indexOfMaxValue([2, 3, 6, 47, 10, 1]));

//////////////// 3 //////////////

// function indexOfMinValue(array){
//     return array.indexOf(Math.min(...array));
// }

// console.log(indexOfMinValue([2, -3, 6, 47, 10, 1]));

//////////////// 4 //////////////

// function nameMaxLength(names){
//     let namesLength = [];
//     for (const name of names) {
//         namesLength.push(name.length);
//     }
//     return names[namesLength.indexOf(Math.max(...namesLength))];
// }

// console.log(nameMaxLength(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//////////////// 5 //////////////

// function inteiroQueMaisRepete(array){
//     let vezesQueAparecem = [];
//     for (let number of array) {
//         let count = 1;
//         for (const otherNumber of array) {
//             if(otherNumber === number){
//                 count++;
//             }
//         }
//         vezesQueAparecem.push(count);
//     }
//     return array[vezesQueAparecem.indexOf(Math.max(...vezesQueAparecem))];
// }

//////////////// 6 //////////////

function somaAte(numero){
    if (!Number.isInteger(numero)) {
        return 'Insira um número inteiro'
    }

    let somatorio = 0;

    for (let index = 1; index <= numero; index++) {
        somatorio += index;
    }
    return somatorio;
}

console.log(somaAte(5));

//////////////// 7 //////////////
