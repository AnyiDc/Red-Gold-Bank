// Sign Up Switch Function
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