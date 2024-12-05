import { usuarios } from "../models/ModelPersonas.js";
// console.log(usuarios);

export function personas(){
let registroNombre = document.getElementById("nombre").value;
  let registroId = document.getElementById("identificacion").value;
  let registroCorreo = document.getElementById("correo").value;
  let registroCelular = document.getElementById("celular").value;
  let registroMotivo = document.getElementById("motivo").value;
  let registroValor= document.getElementById("valor").value;
  usuarios.some(function (index)
   {
    if(registroNombre==index.nombre && registroId==index.identificacion && registroCorreo==index.correo && registroCelular==index.celular && registroMotivo==index.motivo && registroValor==index.valor){
        Swal.fire({
            title: "Enviado: " + index.nombre,
            html: "Será redireccionado en: <b></b> milliseconds.",
            timer: 6000,
            icon: "success",
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 5000);
            },
            willClose: () => {
              clearInterval(timerInterval);
              window.location.href = "";
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  })
}
