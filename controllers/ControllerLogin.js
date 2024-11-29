import { expresionesRegulares } from "../helpers/expresionesRegulares.js";


let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", validar);

}

function validar(e) {

    console.log(e.target.name)
    switch (e.target.name) {
        case "nombreLogin":
               if(expresionesRegulares.nombre.test(e.target.value))
                {
                    console.log("Nombre válido")
                } else {
                    console.log("Nombre inválido")
                }
            break;
        case "contraseniaLogin":
            if(expresionesRegulares.contrasenia.test(e.target.value))
            {
                console.log("Contraseña válida")
            } else {
                console.log("Contraseña inválida")
            }
            break;
        case "recuperarclave":
            if(expresiones.contrasenia.test(e.target.value))
            {
                console.log("Contraseña válida")
            }else{
                console.log("Contraseña inválida")
            }
            break;
        case "nombreRegistro":
            if(expresionesRegulares.nombre.test(e.target.value)){
                console.log("Nombre válido")
            }else{
                console.log("Nombre inválido")
                
            }
            break;

        case "registroDocumento":
            break;

        case "correoRegistro":
            break;
        case "contraseniaRegistro":
            break;



        default:
            console.log("no hay campo")

    }
}