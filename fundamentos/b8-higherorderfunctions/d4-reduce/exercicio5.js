const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) => {
        curr.split('').forEach(letter => (letter === 'a' || letter === 'A') ? acc++ : acc);
        return acc;
    } ,0)
  }

  console.log(containsA());