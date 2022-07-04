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
