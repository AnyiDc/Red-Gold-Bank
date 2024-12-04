import { validacion } from "../../../controllers/ControllerCreditos.js"; // Ajusta la ruta si es necesario

// Añadir el evento de submit para validar el formulario
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();  // Evitar que el formulario se recargue
  validacion();  // Llamar a la función de validación
});
