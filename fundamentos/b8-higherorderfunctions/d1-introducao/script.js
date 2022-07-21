//////// 1 ////////

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), 
      id2: callback('Luiza Drumond'), 
      id3: callback('Carla Paiva'), 
    }
    return employees;
  };

const novoEmpregadoContratado = (nome) => {
    return {
        nomeCompleto: nome, email:`${nome.toLowerCase().split(" ").join("_")}@trybe.com`,
    }
};

console.log(newEmployees(novoEmpregadoContratado));;

//////// 2 ////////

const resultadoSorteio = (numeroApostado, callback) => {
    const numeroSorteado = Math.round((Math.random() * 4)) + 1;
    console.log(numeroSorteado);
    if(callback(numeroSorteado, numeroApostado)){
        return 'Parabéns, você ganhou!';
    }
    return 'Tente Novamente';
}

const checkAposta = (n1, n2) => {
    if (n1 === n2) {
        return true;
    } 
    return false;
}

console.log(resultadoSorteio(3, checkAposta));

