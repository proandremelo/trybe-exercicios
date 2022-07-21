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