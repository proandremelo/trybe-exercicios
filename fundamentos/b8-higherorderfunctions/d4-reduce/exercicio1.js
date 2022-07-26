const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// function flatten() {
//   return arrays.reduce((acc, curr) => {
//     for (const elem of curr) {
//       acc.push(elem);
//     }
//     return acc;
//   }, []);
// }

function flatten() {
  return arrays.reduce((acc, curr) => {
    curr.map(elem => acc.push(elem));
    return acc;
  }, []);
}

console.log(flatten());