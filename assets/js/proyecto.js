// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.

// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios
const priceBase = 250;
let comision = priceBase * 0.3;
let recargos = 0;
let recargoAge;
let recargoAgeWife;
let age;
let priceForChild;

// get year
let thisYear = new Date();
let today = thisYear.getFullYear();
let todayMonth = thisYear.getMonth();
let todayDay = thisYear.getDate();

////////////
// hide input age wife
let ageWifeTrue = document.getElementById("wifeTrue");
let agewifeFalse = document.getElementById("wifeFalse");

ageWifeTrue.addEventListener("click", () => {
  let ageWifeTrue = document.getElementById("wifeTrue").value;
  let ageWife = document.getElementById("ageWife");
  ageWife.style.display = "block";
});
agewifeFalse.addEventListener("click", () => {
  let ageWifeFalse = document.getElementById("wifeFalse").value;
  let ageWife = document.getElementById("ageWife");
  ageWife.style.display = "none";
});

/////////////////

// Hide input childs

let childTrue = document.getElementById("childTrue");
let childFalse = document.getElementById("childFalse");
let intChild = document.getElementById("intChild");
childTrue.addEventListener("click", () => {
  let int = intChild.value;
  intChild.style.display = "block";
});
childFalse.addEventListener("click", () => {
  intChild.style.display = "none";
});

////////
// Add event add get Data from form
let button = document.getElementById("button");

button.addEventListener("click", env => {
  let userName = document.getElementById("name").value;
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let ageW = document.getElementById("ageWife").value;
  let childC = document.getElementById("intChild").value;

  if (userName == "") {
    alert("no puedes dejar este campo vacio");
  }
  // calc age
  if (month > todayMonth || day > todayDay) {
    age = today - year - 1;
  } else if (month < todayMonth || (month == todayMonth && day == todayDay)) {
    age = today - year;
  }

  // conditional add price for userSelect:
  if (age <= 18 || age > 65) {
    console.log("lo sentimos no podemos asegurarlo");
    alert("lo sentimos pero no podemos asegurarlo");
  } else if (age == 19 || age <= 20) {
    console.log("no se le aplicaran cargos por edad");
    priceBase = 0;
    recargoAge = priceBase * 0;
  } else if (age == 21 || age <= 25) {
    recargoAge = priceBase * 0.01;
  } else if (age == 26 || age <= 30) {
    recargoAge = priceBase * 0.02;
  } else if (age == 31 || age <= 40) {
    recargoAge = priceBase * 0.05;
  } else if (age == 41 || age <= 50) {
    recargoAge = priceBase * 0.08;
  } else if (age == 51 || age <= 65) {
    recargoAge = priceBase * 0.12;
  } else if (age != 0) {
    alert("no puedes dejar los campos vacios");
  }

  // Add price for age wife
  if (ageWifeTrue.checked) {
    if (ageW == 20 || ageW < 30) {
      recargoAgeWife = priceBase * 0.01;
    } else if (ageW == 30 || ageW < 40) {
      recargoAgeWife = priceBase * 0.02;
    } else if (ageW == 40 || ageW < 50) {
      recargoAgeWife = priceBase * 0.03;
      document.write(recargoAgeWife);
    } else if (ageW == 50 || ageW < 70) {
      recargoAgeWife = priceBase * 0.05;
    } else if (ageW != 0) {
      alert("no puedes dejar este campo vacio");
    }
  } else {
    recargoAgeWife = priceBase * 0;
    console.log(recargoAgeWife);
  }

  // calc price for int child
  if (childTrue.checked) {
    priceForChild = priceBase * childC * 0.01;
  } else {
    priceForChild = priceBase * 0;
  }
  let total = priceBase + priceForChild + recargoAge + recargoAgeWife;
  // create element with data user
  const data = document.getElementById("data");
  const element = document.createElement("div");
  element.innerHTML = `
    <p>su nombre es ${userName}</p>
    <p>su fecha de nacimiento es ${day}-${month}-${year} </p>
    <p>su edad es ${age} </p>
    <p>la edad de tu esposa es de ${ageW}</p>
    <p>Tines ${childC} Hijos</p>
    <p>los recargos por edad son de  Q.${recargoAge} </p>
    <p>los recargos por su esposa Q.${recargoAgeWife} </p>
    <p>los recargos por sus hijos son de  Q.${priceForChild} </p>
    <p>el total de sus cargos es de Q.${total} </p>
  `;

  data.appendChild(element);

  // price for child

  env.preventDefault();
});
