let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

///////////////// 1 //////////////////

// console.log('Bem Vinda, ' + info.personagem );

///////////////// 2 //////////////////

// console.log(info);

///////////////// 3 //////////////////

// for (const key in info) {
//   console.log(key);
// }

///////////////// 4 //////////////////

// for (const key in info) {
//   console.log(info[key]);
// }

///////////////// 5 //////////////////

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim",
// };

// for (const key in info) {
//   if (key === "recorrente" && info[key] === info2[key]) {
//     console.log("Ambos recorrentes");
//   } else {
//     console.log(info[key] + " e " + info2[key]);
//   }
// }

///////////////// 6 //////////////////

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

// console.log(
//   "O livro favorito de " +
//     leitor.nome +
//     " " +
//     leitor.sobrenome +
//     " se chama " +
//     leitor.livrosFavoritos[0].titulo
// );

///////////////// 7 //////////////////

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

console.log(leitor.livrosFavoritos);

///////////////// 8 //////////////////

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');