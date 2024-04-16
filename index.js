
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    validarNombre(nombre)
    validateEmail(email);
    validarTelefono(telefono);
});

function validarNombre(nombre) {
    if (nombre > 20) {
    }
    console.log("nombre excede los 20 caracteres");
}

function validateEmail(email) {
    

}

function validarTelefono(telefono) {
}










