const custo = 100;
const valorDeVenda = 200;
let imposto = custo * 0.2;
let custoTotal = custo + imposto;
let lucro = valorDeVenda - custoTotal;

if(custo < 0 || valorDeVenda < 0){
    console.log('[ERRO] : Valores inválidos');
}

console.log('Lucro Final: ' + (lucro * 1000));