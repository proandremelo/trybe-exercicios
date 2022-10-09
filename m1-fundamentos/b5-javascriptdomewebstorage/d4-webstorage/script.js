let aplicar = document.querySelector("#aplicar");
let salvar = document.querySelector("#salvar");
let body = document.body;
let main = document.querySelector("main");

aplicar.addEventListener("click", apply);
salvar.addEventListener("click", save);

function apply() {
  let corDeFundo = document.querySelector("#cor-de-fundo input").value;
  let corDoTexto = document.querySelector("#cor-do-texto input").value;
  let tamanhoFonte = document.querySelector("#tamanho-fonte input").value;
  let tipoFonte = document.querySelector("#tipo-fonte input").value;
  let espacamento = document.querySelector("#espacamento input").value;

  body.style.backgroundColor = corDeFundo;
  main.style.color = corDoTexto;
  main.style.fontSize = tamanhoFonte;
  main.style.fontFamily = tipoFonte;
  main.style.lineHeight = espacamento;
}

function save() {
  let settings = {
    corDeFundo: document.querySelector("#cor-de-fundo input").value,
    corDoTexto: document.querySelector("#cor-do-texto input").value,
    tamanhoFonte: document.querySelector("#tamanho-fonte input").value,
    tipoFonte: document.querySelector("#tipo-fonte input").value,
    espacamento: document.querySelector("#espacamento input").value,
  };
  localStorage.setItem("settings", JSON.stringify(settings));
}

window.onload = function () {
  if (localStorage.getItem("settings")) {
    let settings = JSON.parse(localStorage.getItem("settings"));
    body.style.backgroundColor = settings.corDeFundo;
    main.style.color = settings.corDoTexto;
    main.style.fontSize = settings.tamanhoFonte;
    main.style.fontFamily = settings.tipoFonte;
    main.style.lineHeight = settings.espacamento;
  }
};
