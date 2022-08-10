const uppercase = require('./exercicio7');

describe('Teste exercício 7', (done) => {
    test('recebe nome minúsculo e retorna maiúsculo', (done) => {
        function callback(result){
            expect(result).toBe('A');
            done();
        }
        uppercase('a', callback);
    })
});