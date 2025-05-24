// AGREGAR
function agregarProducto() {
  const codigo = document.getElementById('codigo').value.trim();
  const nombre = document.getElementById('nombre').value.trim();
  const categoria = document.getElementById('categoria').value.trim();
  const stock = document.getElementById('stock').value.trim();
  const precioVenta = document.getElementById('precio_venta').value.trim();

  if (!codigo || !nombre || !categoria || !stock|| !precioVenta) {
    alert("Por favor, complete todos los campos.");
    return;
  }


  const tabla = document.getElementById('tabla-productos').getElementsByTagName('tbody')[0];
  const nuevaFila = tabla.insertRow();

  nuevaFila.insertCell(0).textContent = codigo;
  nuevaFila.insertCell(1).textContent = nombre;
  nuevaFila.insertCell(2).textContent = categoria;nuevaFila.insertCell(3).textContent = parseFloat(precioVenta).toLocaleString('es-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
  nuevaFila.insertCell(4).textContent = stock;

  const celdaAcciones = nuevaFila.insertCell(5);
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
    document.getElementById('codigo').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('categoria').value = "";
    document.getElementById('stock_inicial').value = "";
    document.getElementById('precio_Compra').value = "";
    document.getElementById('precio_venta').value = "";

}
