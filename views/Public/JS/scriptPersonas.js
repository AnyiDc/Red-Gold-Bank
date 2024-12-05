import { expresionesRegulares} from "../../../helpers/expresionesRegulares.js";
import { personas } from "../../../controllers/ControllerPersonas.js";

document.getElementById("enviar").addEventListener("click", personas)

let inputs=document.getElementsByTagName("input")
// console.log(inputs);

for(let index=0;index<inputs.length;index++){
    inputs[index].addEventListener("keyup",validarFormulario)
}

function validarFormulario(e){
    // console.log(e);

    switch(e.target.name){
        case "nombre":
            if(expresionesRegulares.nombre.test(e.target.value)){
                document.getElementById("nombre").classList.add("correcto")
                document.getElementById("nombre").classList.remove("incorrecto")
            }else{
                document.getElementById("nombre").classList.add("incorrecto")
                document.getElementById("nombre").classList.remove("correcto")
            }
        break;
        case "identificacion":
            if(expresionesRegulares.cedula.test(e.target.value)){
                document.getElementById("identificacion").classList.add("correcto")
                document.getElementById("identificacion").classList.remove("incorrecto")
            }else{
                document.getElementById("identificacion").classList.add("incorrecto")
                document.getElementById("identificacion").classList.remove("correcto")
            }
        break;
        case "correo":
            if(expresionesRegulares.correo.test(e.target.value)){
                document.getElementById("correo").classList.add("correcto")
                document.getElementById("correo").classList.remove("incorrecto")
            }else{
                document.getElementById("correo").classList.add("incorrecto")
                document.getElementById("correo").classList.remove("correcto")
            }
        break;
        case "celular":
            if(expresionesRegulares.telefono.test(e.target.value)){
                document.getElementById("celular").classList.add("correcto")
                document.getElementById("celular").classList.remove("incorrecto")
            }else{
                document.getElementById("celular").classList.add("incorrecto")
                document.getElementById("celular").classList.remove("correcto")
            }
        break;
        case "motivo":
            if(expresionesRegulares.motivo.test(e.target.value)){
                document.getElementById("motivo").classList.add("correcto")
                document.getElementById("motivo").classList.remove("incorrecto")
            }else{
                document.getElementById("motivo").classList.add("incorrecto")
                document.getElementById("motivo").classList.remove("correcto")
            }
        break;
        case "valor":
            if(expresionesRegulares.valor.test(e.target.value)&&(e.target.value)<=300000){
                document.getElementById("valor").classList.add("correcto")
                document.getElementById("valor").classList.remove("incorrecto")
            }else{
                document.getElementById("valor").classList.add("incorrecto")
                document.getElementById("valor").classList.remove("correcto")
            }
        break;
    }
}