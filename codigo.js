document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');

    var validarNombre = function () {
        var nombre = formulario.querySelector('#nombreapellido');
        var errorNombre = document.getElementById('error-nombre');
        if (nombre.value.trim() === '') {
            errorNombre.textContent = "Completar el campo Nombre y Apellido";
            return false;
        } else {
            errorNombre.textContent = "";
        }
        return true;
    };

    var validarCorreo = function () {
        var correo = formulario.querySelector('#correoelectronico');
        var errorCorreo = document.getElementById('error-correo');
        var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (correo.value.trim() === '') {
            errorCorreo.textContent = "Completar el campo Correo Electrónico";
            return false;
        } else if (!regexCorreo.test(correo.value.trim())) {
            errorCorreo.textContent = "Correo Electrónico no válido";
            return false;
        } else {
            errorCorreo.textContent = "";
        }
        return true;
    };

    var validarTelefono = function () {
        var telefono = formulario.querySelector('#telefono');
        var errorTelefono = document.getElementById('error-telefono');
        var regexTelefono = /^(\d{3}\s?\d{7})$/;
        if (telefono.value.trim() === '') {
            errorTelefono.textContent = "Completar el campo Teléfono";
            return false;
        } else if (!regexTelefono.test(telefono.value.trim())) {
            errorTelefono.textContent = "Teléfono no válido";
            return false;
        } else {
            errorTelefono.textContent = "";
        }
        return true;
    };

    var validarMensaje = function () {
        var mensaje = formulario.querySelector('#mensaje');
        var errorMensaje = document.getElementById('error-mensaje');
        if (mensaje.value.trim() === '') {
            errorMensaje.textContent = "Completar el campo Mensaje";
            return false;
        } else {
            errorMensaje.textContent = "";
        }
        return true;
    };

    var validar = function () {
        return validarNombre() &&
            validarCorreo() &&
            validarTelefono() &&
            validarMensaje();
    };

    formulario.addEventListener("submit", handleSubmit);

    async function handleSubmit(event) {
        event.preventDefault();
        if (validar()) {
            try {
                const form = new FormData(formulario);
                const response = await fetch(formulario.action, {
                    method: formulario.method,
                    body: form,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    formulario.reset();
                    var mensajeExito = document.getElementById('mensaje-exito');
                    mensajeExito.style.display = 'block';
                } else {
                    console.error("Error al enviar el formulario: " + response.statusText);
                }
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
            }
        }
    }
});




