import { usuarios } from "../models/ModelSoporte.js";

export function soporte() {
  let registroNombre = document.getElementById("nombre").value.trim();
  let registroCorreo = document.getElementById("email").value.trim();
  let registroAsunto = document.getElementById("asunto").value.trim();

  // Validar los datos ingresados contra los datos en el array
  const encontrado = usuarios.some((usuario) => {
    return (
      registroNombre === usuario.nombre &&
      registroCorreo === usuario.correo &&
      registroAsunto === usuario.asunto
    );
  });

  if (encontrado) {
    Swal.fire({
      title: `Bienvenido, ${registroNombre}`,
      text: "Validación exitosa.",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = "/views/pages/viewCredito.html";
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Datos incorrectos o no encontrados.",
      icon: "error",
    });
  }
}
