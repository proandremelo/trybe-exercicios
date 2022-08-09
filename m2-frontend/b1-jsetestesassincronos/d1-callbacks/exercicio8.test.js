// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio8');


describe('A função getPokemonDetails', (done) => {
    // it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    //     function callback(error, message){
    //         if (error) {
    //             expect(error).toThrow('Não temos esse pokémon para você :(');
    //             done();
    //         }
    //     };
        
    //     getPokemonDetails('asdasd', callback);
    // });

  it('retorna um pokémon que existe no banco de dados', () => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas';
    function callback(error, message){
      if (message) {
        expect(message).toBe(expectedString);
        done();
      }
    };
    
    getPokemonDetails('Charmander', callback);
  });
});