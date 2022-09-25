const salarioBruto = 3000;
let aliquotaINSS = 0;
let impostoDeRenda = 0;

if (salarioBruto < 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto > 1556.95 && salarioBruto < 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

console.log('aliquotaINSS: ' + aliquotaINSS);

let salarioBase = salarioBruto - aliquotaINSS;

console.log('salárioBase: ' + salarioBase);

if (salarioBase < 1903.98) {
    impostoDeRenda = 0;
} else if (salarioBase > 1903.98 && salarioBase < 2826.65) {
    impostoDeRenda = ( salarioBase * 0.075 ) - 142.80;
} else if (salarioBase > 2826.65 && salarioBase < 3751.05) {
    impostoDeRenda = ( salarioBase * 0.150 ) - 354.80;
} else if (salarioBase > 3751.05 && salarioBase < 4664.68) {
    impostoDeRenda = ( salarioBase * 0.225 ) - 363.13;
} else {
    impostoDeRenda = ( salarioBase * 0.275 ) - 869.36;
}

console.log('impostoDeRenda: ' + impostoDeRenda);

let salarioLiquido = salarioBase - impostoDeRenda;

console.log('Salário líquido: ' + salarioLiquido);