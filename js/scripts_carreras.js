function toggleCheckboxes(checkbox) {
    // Obtener todos los checkboxes excepto el de "Ninguno"
    var checkboxes = document.querySelectorAll('[name^="ninguno"], [name^="INFD"], [name^="Bicentenario"], [name^="Pueblos"], [name^="Progresar"], [name^="AUH"], [name^="docente"], [name^="Envion"], [name^="Argentina"], [name^="Ellas"]');

    // Habilitar o deshabilitar checkboxes según si "Ninguno" está seleccionado
    checkboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.disabled = checkbox.checked;
            cb.checked = false; // Desmarcar otros checkboxes si "Ninguno" está seleccionado
        }
    });
}
