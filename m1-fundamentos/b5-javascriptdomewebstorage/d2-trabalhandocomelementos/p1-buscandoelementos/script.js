/// 1 ///
let ondeVcEsta = document.querySelector('#elementoOndeVoceEsta');

/// 2 ///
let pai = ondeVcEsta.parentElement.style.backgroundColor = 'red';

/// 3 ///
let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho';

/// 4 ///
let primeiroFilho = document.querySelector('#pai').firstElementChild;

/// 5 ///
let primeiroFilho2 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

/// 6 ///
let atencao = document.querySelector('#elementoOndeVoceEsta').nextSibling;

/// 7 ///
let terceiroFilho = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

/// 8 ///
let terceiroFilho2 = document.querySelector('#pai').childNodes[5];
