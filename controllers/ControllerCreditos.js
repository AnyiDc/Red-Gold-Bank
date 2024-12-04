import { usuarios } from "../models/ModelCreditos.js";


export function validacion() {
  let Cedula = String(document.getElementById("cedula").value.trim());
  let Referencia = String(document.getElementById("referencia").value.trim());

  // Agregar un console.log para verificar los valores
  console.log("Cédula ingresada:", Cedula);
  console.log("Referencia ingresada:", Referencia);

  // Verificación con los datos de los usuarios
  const usuario = usuarios.find(
    (user) => String(user.cedula).trim() === Cedula && String(user.referencia).trim() === Referencia
  );

  if (usuario) {
    Swal.fire({
      title: "Bienvenido: " + usuario.nombre,
      html: "Será redireccionado en: <b></b> milliseconds.",
      timer: 4000,
      icon: "success",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        if (timer) {
          let timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        window.location.href = "/views/pages/login.html";
      },
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Usuario y/o referencia incorrectos.",
      icon: "error",
    });
  }
}

