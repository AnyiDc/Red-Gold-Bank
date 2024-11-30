export const expresionesRegulares = {
    nombre: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{5,30}$/,
    usuario: /^[a-z]{4,10}$/,
    contrasenia:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\+?\d{1,4}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    direccion: /^[A-Za-z0-9\s,]+$/,
    cedula:/^\d{5,15}$/
    
};