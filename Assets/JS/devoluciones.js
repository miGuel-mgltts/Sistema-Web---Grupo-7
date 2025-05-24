let filaEditando = null;

function registrarDevolucion() {
  const codigo = document.getElementById('codigo').value.trim();
  const nombre = document.getElementById('nombre').value.trim();
  const cantidad = document.getElementById('cantidad_devuelta').value.trim();
  const motivo = document.getElementById('motivo').value.trim();
  const fecha = document.getElementById('fecha_devolucion').value.trim();
  const responsable = document.getElementById('responsable').value.trim();

  if (!codigo || !nombre || !cantidad || !motivo || !fecha || !responsable) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (filaEditando) {
    // Si estamos editando, actualiza la fila
    filaEditando.cells[0].textContent = codigo;
    filaEditando.cells[1].textContent = nombre;
    filaEditando.cells[2].textContent = motivo;
    filaEditando.cells[3].textContent = cantidad;
    filaEditando.cells[4].textContent = fecha;
    filaEditando.cells[5].textContent = responsable;

    filaEditando = null;
    document.querySelector('.btn').textContent = "Registrar Devolución";
  } else {
    // Si es nueva, agrega la fila
    const tabla = document.getElementById('tabla-devoluciones').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    nuevaFila.insertCell(0).textContent = codigo;
    nuevaFila.insertCell(1).textContent = nombre;
    nuevaFila.insertCell(2).textContent = motivo;
    nuevaFila.insertCell(3).textContent = cantidad;
    nuevaFila.insertCell(4).textContent = fecha;
    nuevaFila.insertCell(5).textContent = responsable;

    const celdaAcciones = nuevaFila.insertCell(6);

    const btnEditar = document.createElement('button');
    btnEditar.className = "btn btn-editar";
    btnEditar.textContent = "Editar";
    btnEditar.onclick = function () {
      editarFila(nuevaFila);
    };
    celdaAcciones.appendChild(btnEditar);

    const btnEliminar = document.createElement('button');
    btnEliminar.className = "btn btn-eliminar";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function () {
      const confirmar = confirm("¿Estás seguro de que deseas eliminar esta devolución?");
      if (confirmar) {
        tabla.deleteRow(nuevaFila.rowIndex - 1);
      }
    };
    celdaAcciones.appendChild(btnEliminar);
  }

  limpiarFormulario();
}

function editarFila(fila) {
  filaEditando = fila;

  document.getElementById('codigo').value = fila.cells[0].textContent;
  document.getElementById('nombre').value = fila.cells[1].textContent;
  document.getElementById('motivo').value = fila.cells[2].textContent;
  document.getElementById('cantidad_devuelta').value = fila.cells[3].textContent;
  document.getElementById('fecha_devolucion').value = fila.cells[4].textContent;
  document.getElementById('responsable').value = fila.cells[5].textContent;

  document.querySelector('.btn').textContent = "Guardar Cambios";
}

function limpiarFormulario() {
  document.getElementById('codigo').value = "";
  document.getElementById('nombre').value = "";
  document.getElementById('motivo').value = "";
  document.getElementById('cantidad_devuelta').value = "";
  document.getElementById('fecha_devolucion').value = "";
  document.getElementById('responsable').value = "";
}
// ... tus funciones anteriores como registrarDevolucion(), editarFila(), etc.

document.querySelector('.btn-filtrar').addEventListener('click', function (e) {
  e.preventDefault(); // Previene recarga del formulario

  const filtroCodigo = document.getElementById('filtro_codigo').value.trim().toLowerCase();
  const filtroMotivo = document.getElementById('filtro_motivo').value;

  const filas = document.querySelectorAll('#tabla-devoluciones tbody tr');

  filas.forEach(fila => {
    const codigo = fila.cells[0].textContent.toLowerCase();
    const motivo = fila.cells[2].textContent;

    const coincideCodigo = !filtroCodigo || codigo.includes(filtroCodigo);
    const coincideMotivo = !filtroMotivo || motivo === filtroMotivo;

    fila.style.display = (coincideCodigo && coincideMotivo) ? '' : 'none';
  });
});

// Ocultar la primera fila de ejemplo automáticamente
window.addEventListener('DOMContentLoaded', () => {
  const tabla = document.getElementById('tabla-devoluciones');
  const primerFila = tabla.querySelector('tbody tr');
  if (primerFila) primerFila.style.display = 'none';
});
