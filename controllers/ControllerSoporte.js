import { usuarios } from "../models/ModelUsuario.js";

export function login() {
  let loginUsuario = document.getElementById("nombreLogin").value;
  let loginContrasena = document.getElementById("contraseniaLogin").value;
  console.log(usuarios);
  usuarios.some(function (index) {
    // console.log(index)
    if (loginUsuario == index.usuario && loginContrasena == index.contrasena) {
      let timerInterval;
      Swal.fire({
        title: "Bienvenido: " + index.nombre,
        html: "Será redireccionado en: <b></b> milliseconds.",
        timer: 4000,
        icon: "success",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          window.location.href = "/views/pages/viewCredito.html";
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario y/contraseña incorrecto o no existe",
        icon: "error",
      });
    }
  });
}

export function register() {
  let registroNombre = document.getElementById("registroNombre").value;
  let registroDocumento = document.getElementById("registroDocumento").value;
  let registroCorreo = document.getElementById("registroEmail").value;
  let registroContrasena = document.getElementById("registroClave").value;
  let registroConfirmar = document.getElementById("registroClave").value;
  let newRegistro = {
    nombre: registroNombre,
    usuario: registroDocumento,
    correo: registroCorreo,
    contrasena: registroContrasena,
    confirmar: registroConfirmar,
  };
  usuarios.unshift(newRegistro);
  document.getElementById("formulario_registro").style.display = "none";
  document.getElementById("Login").style.display = "flex";
  console.log(usuarios);
}