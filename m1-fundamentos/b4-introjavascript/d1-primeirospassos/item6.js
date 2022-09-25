const pecaDoXadrez = 'toRre';

switch(pecaDoXadrez.toLowerCase()){
    case 'peao':
        console.log('Uma casa em qualquer direção');
        break;
    
    case 'cavalo':
        console.log('Anda em L');
        break;
    
    case 'bispo':
        console.log('Diagonal quantas casas quiser');
        break;
    
    case 'torre':
        console.log('Quantas casas quiser na vertical e horizontal');
        break;
    
    case 'rainha':
        console.log('Quantas casas quiser em qualquer direção');
        break;
    
    case 'rei':
        console.log('Uma casa em qualquer direção');
        break;

    default:
        console.log('[ERRO] : Peça inválida');
    
}