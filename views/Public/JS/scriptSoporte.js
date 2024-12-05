import { expresionesRegulares } from "../../../helpers/expresionesRegulares.js";
// console.log(expresionesRegulares.nombre);
import { soporte } from "../../../controllers/ControllerSoporte.js";

document.getElementById("enviar").addEventListener("click", soporte);

let inputs=document.getElementsByTagName("input")
// console.log(inputs);

for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("keyup", validarFormulario);
  }

  function validarFormulario(e){
// console.log(e);
switch (e.target.name) {
    case "nombre":
        if(expresionesRegulares.nombre.test(e.target.value)){
            document.getElementById("nombre").classList.add("correcto")
            document.getElementById("nombre").classList.remove("incorrecto")
        }else{
            document.getElementById("nombre").classList.add("incorrecto")
            document.getElementById("nombre").classList.remove("correcto")
        }
    break;
    case "email":
        if(expresionesRegulares.correo.test(e.target.value)){
            document.getElementById("email").classList.add("correcto")
            document.getElementById("email").classList.remove("incorrecto")
        }else{
            document.getElementById("email").classList.add("incorrecto")
            document.getElementById("email").classList.remove("correcto")
        }
    break;
    case "asunto":
        if(expresionesRegulares.asunto.test(e.target.value)){
            document.getElementById("asunto").classList.add("correcto")
            document.getElementById("asunto").classList.remove("incorrecto")
        }else{
            document.getElementById("asunto").classList.add("incorrecto")
            document.getElementById("asunto").classList.remove("correcto")
        }
    break;

}

  }
