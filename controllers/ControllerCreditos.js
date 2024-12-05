import { usuarios } from "../models/ModelCreditos.js";

export function validacion() {
  let Cedula = String(document.getElementById("cedula").value.trim());
  let Referencia = String(document.getElementById("referencia").value.trim());

  // Verificar los valores ingresados
  console.log("Cédula ingresada:", Cedula);
  console.log("Referencia ingresada:", Referencia);

  // Buscar al usuario en la lista
  const usuario = usuarios.find(
    (user) =>
      String(user.cedula).trim() === Cedula &&
      String(user.referencia).trim() === Referencia
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
          const timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);

          // Limpiar el intervalo al cerrar el popup
          Swal.getPopup().addEventListener("close", () => {
            clearInterval(timerInterval);
          });
        }
      },
      willClose: () => {
        // Guardar los datos del usuario en sessionStorage
        sessionStorage.setItem("usuarioActivo", JSON.stringify(usuario));
        // Redirigir a la página de pasarela de pagos
        window.location.href = "/views/pages/pasarelaPagos.html";
      },
    });
  } else {
    // Si el usuario no es encontrado, mostrar un mensaje de error
    Swal.fire({
      title: "Error",
      text: "Usuario y/o referencia incorrectos.",
      icon: "error",
    });
  }
}
