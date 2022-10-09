let btnEnviar = document.querySelector("#enviar");
let btnLimpar = document.querySelector("#limpar");

btnEnviar.addEventListener("click", function (evt) {
  evt.preventDefault();
});

btnLimpar.addEventListener("click", function (evt) {
  document.querySelector("form").reset();
});
