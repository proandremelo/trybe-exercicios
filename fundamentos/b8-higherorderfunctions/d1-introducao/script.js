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

///// 3 /////

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkNota = (rightAnswers, studentAnswers, callback) => {
    let nota = 0;
    rightAnswers.forEach((element, index) => {
        nota += callback(element, studentAnswers[index]);
    });
    if(nota < 0) return 0;
    return nota;
};

const checkResposta = (n1, n2) => {
    if (n1 === n2) {
        return 1;
    }
    if (n2 === 'N.A') {
        return 0;
    }
    return -0.5;
}

console.log(checkNota(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResposta));