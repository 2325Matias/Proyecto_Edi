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