// AGREGAR FACTURA
function agregarFactura() {
  const codigo = document.getElementById('codigoVentas').value.trim();
  const cliente = document.getElementById('cliente').value.trim();
  const ruc = document.getElementById('ruc').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const codigoProd = document.getElementById('codigoProd').value.trim();
  const cantidad = document.getElementById('cantidad').value.trim();
  const fecha = document.getElementById('fecha').value;

  if (!codigo || !cliente || !ruc || !direccion || !telefono || !codigoProd || !cantidad || !fecha) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const tabla = document.getElementById('tabla-ventas').getElementsByTagName('tbody')[0];
  const nuevaFila = tabla.insertRow();

  nuevaFila.insertCell(0).textContent = codigo;
  nuevaFila.insertCell(1).textContent = cliente;
  nuevaFila.insertCell(2).textContent = ruc;
  nuevaFila.insertCell(3).textContent = direccion;
  nuevaFila.insertCell(4).textContent = telefono;
  nuevaFila.insertCell(5).textContent = codigoProd;
  nuevaFila.insertCell(6).textContent = cantidad;
  nuevaFila.insertCell(7).textContent = fecha;

  const celdaAcciones = nuevaFila.insertCell(8);

  // Botón Editar
  const btnEditar = document.createElement('button');
  btnEditar.className = "btn btn-editar";
  btnEditar.textContent = "Editar";
  btnEditar.onclick = function () {
    document.getElementById('codigoVentas').value = nuevaFila.cells[0].textContent;
    document.getElementById('cliente').value = nuevaFila.cells[1].textContent;
    document.getElementById('ruc').value = nuevaFila.cells[2].textContent;
    document.getElementById('direccion').value = nuevaFila.cells[3].textContent;
    document.getElementById('telefono').value = nuevaFila.cells[4].textContent;
    document.getElementById('codigoProd').value = nuevaFila.cells[5].textContent;
    document.getElementById('cantidad').value = nuevaFila.cells[6].textContent;
    document.getElementById('fecha').value = nuevaFila.cells[7].textContent;

    tabla.deleteRow(nuevaFila.rowIndex - 1);
  };
  celdaAcciones.appendChild(btnEditar);

  // Botón Eliminar
  const btnEliminar = document.createElement('button');
  btnEliminar.className = "btn btn-eliminar";
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = function () {
    const confirmar = confirm("¿Estás seguro de eliminar esta factura?");
    if (confirmar) {
      tabla.deleteRow(nuevaFila.rowIndex - 1);
    }
  };
  celdaAcciones.appendChild(btnEliminar);

  // Limpiar formulario
  document.getElementById('formulario').reset();
}

// FILTRAR FACTURAS POR CÓDIGO
document.addEventListener('DOMContentLoaded', function () {
  const btnFiltrar = document.querySelector('.btn-filtrar');

  btnFiltrar.addEventListener('click', function (e) {
    e.preventDefault();

    const filtro = document.getElementById('filtro_ventas').value.trim().toLowerCase();
    const filas = document.querySelectorAll('#tabla-ventas tbody tr');

    filas.forEach(fila => {
      const codigo = fila.cells[0].textContent.trim().toLowerCase();
      if (codigo.includes(filtro) || filtro === "") {
        fila.style.display = "";
      } else {
        fila.style.display = "none";
      }
    });
  });
});
// Función para limitar la cantidad de dígitos en campos numéricos
function limitarDigitos(idCampo, maxDigitos) {
    const input = document.getElementById(idCampo);
    input.addEventListener('input', function () {
        if (this.value.length > maxDigitos) {
            this.value = this.value.slice(0, maxDigitos);
        }
    });
}

// Aplicar límites específicos por campo
limitarDigitos('codigoVentas', 6);   
limitarDigitos('ruc', 13);           
limitarDigitos('telefono', 10);      
limitarDigitos('codigoProd', 6);     
limitarDigitos('cantidad', 2);       

