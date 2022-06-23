//////////////////// 1 ////////////////////

// let resultado = 10;

// for (let index = 10; index > 1; index--) {
//     resultado *= index-1;
// }

// console.log(resultado);


//////////////////// 2 ////////////////////

// let word = 'tryber';
// let invertedWord = [];

// for (const letter of word) {
//     invertedWord.unshift(letter);
// }

// console.log(invertedWord.join(''));

//////////////////// 3 ////////////////////

            ///// MAIOR /////
            
            // let array = ['java', 'javascript', 'python', 'html', 'css'];
            // let maiorIndice = 0;
            // let maiorTamanho = 0;
            
            // for (let index = 0; index < array.length; index++) {
            //     if (array[index].length > maiorTamanho ) {
            //         maiorIndice = index;
            //         maiorTamanho = array[index].length;
            //     }
                
            // }

            // console.log(array[maiorIndice]);

            ///// MENOR /////

            let array = ['java', 'javascript', 'python', 'html', 'css'];
            let menorIndice = 0;
            let menorTamanho = 999999999999999999;
            
            for (let index = 0; index < array.length; index++) {
                if (array[index].length < menorTamanho ) {
                    menorIndice = index;
                    menorTamanho = array[index].length;
                }
                
            }

            console.log(array[menorIndice]);

//////////////////// 4 ////////////////////


