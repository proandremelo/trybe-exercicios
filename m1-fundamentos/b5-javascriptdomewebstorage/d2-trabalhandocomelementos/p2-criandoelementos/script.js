/// 1 ///
// let elementoOndeVcEsta = document.querySelector('#elementoOndeVoceEsta');
// let irmaoOndeVcEsta = document.createElement('div');
// irmaoOndeVcEsta.id = 'irmaoOndeVcEsta'
// elementoOndeVcEsta.insertAdjacentElement('afterend' ,irmaoOndeVcEsta);

/// 2 ///
// let elementoOndeVcEsta = document.querySelector('#elementoOndeVoceEsta');
// let filhoOndeVcEsta = document.createElement('div');
// filhoOndeVcEsta.id = 'filhoOndeVcEsta';
// elementoOndeVcEsta.appendChild(filhoOndeVcEsta);

/// 3 ///
// let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
// let filhoPFF = document.createElement('div');
// filhoPFF.id = 'filhoPFF';
// primeiroFilhoDoFilho.appendChild(filhoPFF);

/// 4 ///
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoPFF = document.createElement('div');
filhoPFF.id = 'filhoPFF';
primeiroFilhoDoFilho.appendChild(filhoPFF);
let terceiroFilho = filhoPFF.parentElement.parentElement.nextElementSibling;