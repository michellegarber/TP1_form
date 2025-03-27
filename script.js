function confirmarContraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var contraseña2 = document.getElementById("contraseña2").value;
    
    var errorMessage = document.getElementById("error-message");
    submitBtn = document.getElementById("submit-btn");

    if (contraseña === contraseña2 && contraseña.length >= 8) {
        errorMessage.style.display = "none";
        submitBtn.disabled = false;
    } else {
        errorMessage.style.display = "block"; 
        submitBtn.disabled = true; 
    }
}
function confirmarFormulario() {
    alert('Formulario enviado!');
}

