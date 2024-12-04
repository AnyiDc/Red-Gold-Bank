import { usuarios } from "../models/ModelLogin.js";

document.getElementById("btn_iniciarsesion").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Capturar valores del formulario
    const loginUsuario = document.getElementById("nombreLogin").value;
    const loginContrasena = document.getElementById("contraseniaLogin").value;

    // Validar campos
    if (!validarCampos(loginUsuario, loginContrasena)) return;

    // Procesar login
    login(loginUsuario, loginContrasena);
});

function validarCampos(username, password) {
    if (!username || !password) {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    if (username.length < 3) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
        return false;
    }
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    return true;
}

function login(username, password) {
    const usuarioValido = usuarios.find(
        (user) =>
            username.toLowerCase() === user.nombre.toLowerCase() &&
            password === user.contrasena
    );

    if (usuarioValido) {
        alert(`Bienvenido: ${usuarioValido.nombre}`);
        // Redireccionar al usuario después de un inicio de sesión exitoso
        window.location.href = "./views/Pages/userInterfaz.html";
    } else {
        alert("Usuario y/o contraseña incorrectos o no existen.");
    }
}

// Corregir la parte de la función de registro
document.getElementById("btn_registrarme").addEventListener("click", function (event) { 
    registro(event);
});

function registro(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let registroNombre = document.getElementById("registroNombre").value;
    let registroDocumento = document.getElementById("registroDocumento").value;
    let registroCorreo = document.getElementById("registroEmail").value;
    let registroContrasena = document.getElementById("registroClave").value;
    let registroConfirmar = document.getElementById("registroClave").value; 
  
    if (registroContrasena !== registroConfirmar) {
        alert("Error", "Las contraseñas no coinciden.", "error");
        return;
    }

    // Crear un nuevo registro de usuario
    let newRegistro = {
        nombre: registroNombre,
        documento: registroDocumento,
        correo: registroCorreo,
        contrasena: registroContrasena,
    };

    // Aquí puedes agregar la lógica para guardar el nuevo usuario (en un array o en la base de datos)
    usuarios.unshift(newRegistro);  // Agregar usuario al principio del array

    // Ocultar formulario de registro y mostrar login
    document.getElementById("formulario_registro").style.display = "none";
    document.getElementById("login").style.display = "flex";

    console.log(usuarios); 

    // Mensaje de éxito
    alert(`¡Registrado! El usuario ${registroNombre} ha sido registrado con éxito.`);
}