// PasarelaController.js
import { usuarios } from "../models/ModelCreditos.js";

export function procesarPasarela() {
    // Buscar un usuario en el modelo (primer ejemplo)
    const usuario = usuarios[0];

    if (usuario) {
        // Actualizar elementos HTML con los datos del modelo
        document.querySelector('.elemento-referencia').textContent = usuario.referencia;
        document.querySelector('.elemento-cedula').textContent = usuario.cedula;
        document.querySelector('.elemento-nombre').textContent = usuario.nombre;
        
        // Total fijo o podrías hacer algo más dinámico
        const total = 4200.00;
        document.querySelector('.elemento-total').textContent = `COP ${total.toFixed(2)}`;
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', procesarPasarela);