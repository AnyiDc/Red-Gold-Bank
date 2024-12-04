import { expresionesRegulares } from "../../../helpers/expresionesRegulares.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
});

function validarFormulario(e) {
  switch (e.target.name) {
    case "cedula":
      validarCampo(expresionesRegulares.cedula, e.target, "cedula");
      break;
    case "referencia":
      validarCampo(expresionesRegulares.referencia, e.target, "referencia");
      break;
  }
}

function validarCampo(expresion, input, mensajeId) {
  const mensaje = document.getElementById(mensajeId);

  if (expresion.test(input.value)) {
    input.classList.add("correcto");
    input.classList.remove("incorrecto");
    if (mensaje) mensaje.textContent = "";
  } else {
    input.classList.add("incorrecto");
    input.classList.remove("correcto");
    if (mensaje) mensaje.textContent = "Por favor, ingrese un valor válido.";
  }
}
