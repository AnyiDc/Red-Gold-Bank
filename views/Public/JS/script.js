function signIn() {
  // Oculta todos los formularios
  document.getElementById('Login').classList.remove('active');
  document.getElementById('forgetPassword').classList.remove('active');
  document.getElementById('formulario_registro').classList.remove('active');
  
  // Muestra el formulario de inicio de sesión
  document.getElementById('Login').classList.add('active');
}

function forgetPassword() {
  // Oculta todos los formularios
  document.getElementById('Login').classList.remove('active');
  document.getElementById('forgetPassword').classList.remove('active');
  document.getElementById('formulario_registro').classList.remove('active');
  
  // Muestra el formulario de recuperación de contraseña
  document.getElementById('forgetPassword').classList.add('active');
}

function formulario_registro() {
  // Oculta todos los formularios
  document.getElementById('Login').classList.remove('active');
  document.getElementById('forgetPassword').classList.remove('active');
  document.getElementById('formulario_registro').classList.remove('active');
  
  // Muestra el formulario de registro
  document.getElementById('formulario_registro').classList.add('active');
}

// Al cargar la página, muestra el formulario de inicio de sesión por defecto
document.addEventListener('DOMContentLoaded', (event) => {
  formulario_registro();
});