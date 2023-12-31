document.getElementById('MateriasId').addEventListener('change', function () {
    var selectedValue = this.value;

    // Ocultar todos los grupos de checkboxes
    document.querySelectorAll('.checkbox-group').forEach(function (group) {
        group.style.display = 'none';
    });

    // Mostrar el grupo de checkboxes correspondiente a la opción seleccionada
    var selectedGroup = document.getElementById('checkboxes-' + selectedValue);
    if (selectedGroup) {
        selectedGroup.style.display = 'block';
    }
});

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