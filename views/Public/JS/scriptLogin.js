
function showForgetPassword() {
    document.getElementById("Login").style.display = "none";
    document.getElementById("forgetPassword").style.display = "block";
    document.getElementById("formulario_registro").style.display = "none";
}

function showformularioRegistro() {
    document.getElementById("Login").style.display = "none";
    document.getElementById("forgetPassword").style.display = "none";
    document.getElementById("formulario_registro").style.display = "block";
}

function showLogin() {
    document.getElementById("Login").style.display = "block";
    document.getElementById("forgetPassword").style.display = "none";
    document.getElementById("formulario_registro").style.display = "none";
}

window.showForgetPassword = showForgetPassword;
window.showformularioRegistro = showformularioRegistro;
window.showLogin = showLogin;

import { expresionesRegulares } from "/helpers/expresionesRegulares.js"


let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", validar);

}

function validar(e) {


    const input = e.target; // Campo actual
    const parent = input.closest('.inputBox'); // Encuentra el contenedor más cercano con clase 'inputBox'
    // const icon = parent.querySelector('.i'); // Encuentra el ícono dentro del contenedor

    console.log("evento en " + e.target.name  );
    if (!icon) {
        console.warn("No se encontró un elemento con la clase '.i' para el campo:", input.name);
        return;
    }

    switch (input.name) {
        
        case "nombreLogin":
            if (expresionesRegulares.nombre.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;

        case "contraseniaLogin":
            if (expresionesRegulares.contrasenia.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;

        case "recuperarclave":
            if (expresionesRegulares.cedula.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;

        case "registroNombre":
            if (expresionesRegulares.nombre.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;
        case "registroDocumento":
            if (expresionesRegulares.cedula.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;
        case "registroEmail":
            if (expresionesRegulares.correo.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;
        case "registroTelefono":
            if (expresionesRegulares.telefono.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;
        case "registroDireccion":
            if (expresionesRegulares.direccion.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;

        case "registroCedula":
            if (expresionesRegulares.cedula.test(input.value)) {
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;


        case "registroClave":
            if (expresionesRegulares.contrasenia.test(input.value)){
                icon.classList.add('correcto');
                icon.classList.remove('incorrecto');
            } else {
                icon.classList.add('incorrecto');
                icon.classList.remove('correcto');
            }
            break;

        default:
            console.log("Campo no reconocido:", input.name);
    }
}