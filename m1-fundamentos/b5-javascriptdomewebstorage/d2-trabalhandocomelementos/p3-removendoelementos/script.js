// function removendoElementos() {
//   let filhosDoPai = document.querySelector("#pai");
// //   console.log(filhosDoPai.childNodes);

//   for (let index = filhosDoPai.children.length - 1; index >= 0; index--) {
//     // console.log(filhosDoPai.children.item(index).nodeType + ' - ' + filhosDoPai.children.item(index).id );
//     // if (filhosDoPai.children.item(index).nodeType !== 1) {
//     //     filhosDoPai.children.item(index).remove()
//     // }
//     if (filhosDoPai.children.item(index).id === "elementoOndeVoceEsta") {
//         filhosDoPai.children.item(index).children.item(index).remove();
//         filhosDoPai.firstChild.remove()
//     } else {
//       filhosDoPai.children.item(index).remove();
//     }
//   }
// }

// function removendoElementos() {
//     let filhosDoPai = document.querySelector("#pai");
//   //   console.log(filhosDoPai.childNodes);
//     let nosDoPai = filhosDoPai.childNodes;
//     for (let index = nosDoPai.length - 1; index >= 0; index--) {
//       // console.log(filhosDoPai.children.item(index).nodeType + ' - ' + filhosDoPai.children.item(index).id );
//     //   if (nosDoPai[index].nodeType !== 1) {
//     //       nosDoPai[index].remove()
//     //   }
//       if (nosDoPai[index].id === "elementoOndeVoceEsta") {
//           nosDoPai[index].lastChild.remove();
//           filhosDoPai.firstChild.remove()
//       } else {
//         nosDoPai[index].remove();
//       }

      
    
//     }
//   }





function removendoElementos(){
    let nosDoPai = document.querySelector('#pai').childNodes;
    let elementosDoPai = document.querySelector('#pai').children;
    let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

    for (const no of nosDoPai) {
        // console.log(no);
        if (no.nodeType !== 1) {
            no.remove();
        }
    }

    for (const elemento of elementosDoPai) {
        if (elemento.id !== 'elementoOndeVoceEsta') {
            elemento.remove();
        }
    }

    elementoOndeVoceEsta.children[1].remove()
    elementosDoPai[1].remove()


}






// console.log(document.querySelector("#pai").childNodes);
// console.log(document.querySelector("#pai").childNodes);
removendoElementos();
