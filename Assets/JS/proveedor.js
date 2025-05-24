function agregarProveedor() {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const direccion = document.getElementById('direccion').value.trim();

    if (nombre === "" || telefono === "" || email === "" || direccion === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const tabla = document.getElementById('tabla-proveedores').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    nuevaFila.insertCell(0).textContent = nombre;
    nuevaFila.insertCell(1).textContent = telefono;
    nuevaFila.insertCell(2).textContent = email;
    nuevaFila.insertCell(3).textContent = direccion;

    const celdaAcciones = nuevaFila.insertCell(4);
    const btnEditar = document.createElement('button');
    btnEditar.className = "btn btn-editar";
    btnEditar.textContent = "Editar";

    celdaAcciones.appendChild(btnEditar);

    const btnEliminar = document.createElement('button');
    btnEliminar.className = "btn btn-eliminar";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function () {
        const confirmar = confirm("¿Estás seguro de que deseas eliminar este registro?");
        if (confirmar) {
            tabla.deleteRow(nuevaFila.rowIndex - 1);
        }
    };

    celdaAcciones.appendChild(btnEliminar);

    // Limpiar campos
    document.getElementById('nombre').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('email').value = "";
    document.getElementById('direccion').value = "";
}
    

    
