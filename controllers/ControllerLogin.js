import { usuarios } from "../models/ModelUsuario.js";

document.getElementById("btn_iniciarsesion").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Capturar valores del formulario
    const loginUsuario = document.getElementById("nombreLogin").value;
    const loginContrasena = document.getElementById("contraseniaLogin")
    // Validar campos
    if (!validarCampos(loginUsuario, loginContrasena)) return;

    // Procesar login
    login(loginUsuario, loginContrasena);
});

function validarCampos(username, password) {
    if (!username || !password) {
        Swal.fire("Error", "Por favor, complete todos los campos.", "error");
        return false;
    }
    if (username.length < 3) {
        Swal.fire("Error", "El nombre de usuario debe tener al menos 3 caracteres.", "error");
        return false;
    }
    if (password.length < 6) {
        Swal.fire("Error", "La contraseña debe tener al menos 6 caracteres.", "error");
        return false;
    }
    return true;
}

function login(username, password) {
    const usuarioValido = usuarios.some((user) => {
        if (username === user.usuario && password === user.contrasena) {
            // Usuario válido encontrado
            Swal.fire({
                title: "Bienvenido: " + user.nombre,
                html: "Será redireccionado en: <b></b> milliseconds.",
                timer: 4000,
                icon: "success",
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    window.location.href = "/views/pages/viewCredito.html";
                },
            });
            return true; // Detener el ciclo al encontrar un usuario válido
        }
    });

    // Si ningún usuario es válido
    if (!usuarioValido) {
        Swal.fire({
            title: "Error",
            text: "Usuario y/o contraseña incorrectos o no existen.",
            icon: "error",
        });
    }
}

export function registro() {
  let registroNombre = document.getElementById("register-nombre").value;
  let registroUsuario = document.getElementById("register-usuario").value;
  let registroCorreo = document.getElementById("register-correo").value;
  let registroContrasena = document.getElementById("register-contrasena").value;
  let registroConfirmar = document.getElementById("register-confirmar").value;
  let newRegistro = {
    nombre: registroNombre,
    usuario: registroUsuario,
    correo: registroCorreo,
    contrasena: registroContrasena,
    confirmar: registroConfirmar,
  };
  usuarios.unshift(newRegistro);
  document.getElementById("form-register").style.display = "none";
  document.getElementById("form-login").style.display = "flex";
  console.log(usuarios);
}