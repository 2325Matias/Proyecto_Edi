/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


//script para que las contraseñas coincidan en el registro
function validateForm() {
    var password1 = document.getElementById("exampleInputPassword1").value;
    var password2 = document.getElementById("exampleInputPassword2").value;

    if (password1 !== password2) {
        alert("Las contraseñas no coinciden. Por favor, vuelve a ingresarlas.");
        return false;
    }

    return true;
}
