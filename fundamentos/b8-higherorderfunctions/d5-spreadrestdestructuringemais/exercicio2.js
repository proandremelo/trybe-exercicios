const sum = (...params) => params.reduce((acc, curr) => acc + curr);

console.log(sum(1,5,7,4));