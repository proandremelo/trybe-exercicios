function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

/// 1 ///
function populateCalendar() {
  let days = document.querySelector("#days");
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (const day in decemberDaysList) {
    let dayElement = document.createElement("li");
    dayElement.innerText = decemberDaysList[day];
    dayElement.className = "day";
    if (["24", "25", "31"].includes(dayElement.innerText)) {
      dayElement.className += " holiday";
    }
    if (["4", "11", "18", "25"].includes(dayElement.innerText)) {
      dayElement.className += " friday";
    }
    days.appendChild(dayElement);
  }
}

populateCalendar();

/// 2 ///
function criaBotaoFeriados(feriados) {
  let btn = document.createElement("button");
  btn.id = "btn-holiday";
  btn.innerText = feriados;
  document.body.children[3].appendChild(btn);
}

criaBotaoFeriados("Feriados");

/// 3 ///
function mudaFundoHoliday(color) {
  let holidays = document.querySelectorAll(".holiday");
  for (const day of holidays) {
    day.style.backgroundColor = color;
  }
}

let turnBtnHoliday = 0;
document.querySelector("#btn-holiday").addEventListener("click", function () {
  if (turnBtnHoliday % 2 == 0) {
    mudaFundoHoliday("rgb(255,64,83)");
  } else {
    mudaFundoHoliday("rgb(238,238,238)");
  }
  turnBtnHoliday++;
});

/// 4 ///
function criaBotaoSextaFeira(sextaFeira) {
  let btnSexta = document.createElement("button");
  btnSexta.id = "btn-friday";
  btnSexta.innerText = sextaFeira;
  document.querySelector(".buttons-container").appendChild(btnSexta);
}

criaBotaoSextaFeira("Sexta-Feira");

/// 5 ///
function modificaTextoSexta(sextaFeira) {
  let days = document.querySelector("#days").children;
  for (let index = 5; index <= 26; index += 7) {
    if (sextaFeira) {
      days[index].innerText = "Sexta-Feira";
    } else {
      days[index].innerText = index - 1;
    }
  }
}

let turnBtnFriday = 0;
document.querySelector("#btn-friday").addEventListener("click", function () {
  if (turnBtnFriday % 2 == 0) {
    modificaTextoSexta(true);
  } else {
    modificaTextoSexta(false);
  }
  turnBtnFriday++;
});

/// 6 ///
let elementDays = document.querySelectorAll(".day");
for (const day of elementDays) {
  day.addEventListener("mouseover", zoomIn);
  day.addEventListener("mouseout", zoomOut);
}

function zoomIn(evt) {
  evt.target.style.fontSize = "150%";
}

function zoomOut(evt) {
  evt.target.style.fontSize = "100%";
}

/// 7 ///
function adcionarTarefa(tarefa) {
  let elementoTarefa = document.createElement("span");
  elementoTarefa.innerText = tarefa;
  document.querySelector(".my-tasks").appendChild(elementoTarefa);
}

adcionarTarefa("cozinhar");

/// 8 ///
function adicionarLegenda(cor) {
  let legenda = document.createElement("div");
  legenda.style.backgroundColor = cor;
  document.querySelector(".my-tasks").appendChild(legenda);
}

adicionarLegenda("blue");

/// 9 ///
let turnClickTask = 0;
function selecionaTarefa() {
  let myTasks = document.querySelectorAll(".my-tasks div");
  for (const task of myTasks) {
    task.addEventListener("click", (evt) => {
      if(turnClickTask % 2 == 0){
        evt.target.className = 'task selected';
      } else{
        evt.target.className = 'task';
      }
      turnClickTask++;
    })
  }
}

selecionaTarefa();

/// 10 ///
let turnClickDay = 0;
for (const day of elementDays) {
  day.addEventListener("click", atribuiCorTarefa);
}
function atribuiCorTarefa(evt){

  if (window.getComputedStyle(evt.target).getPropertyValue('color') === 'rgb(119, 119, 119)') {
    evt.target.style.color = document.querySelector(".selected").style.backgroundColor;
  } else {
    evt.target.style.color = '#777';
  }
  
  // if (turnClickDay % 2 == 0) {
  //   evt.target.style.color = document.querySelector(".selected").style.backgroundColor;
  // } else{
  //   evt.target.style.color = 'rgb(119,119,119)';
  // }
  // turnClickDay++;
}
