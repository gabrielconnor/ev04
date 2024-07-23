// Lista para almacenar los productos (Basicamente una base de datos interna)
let productos = [];

// Agregar productos
function agregarProducto(event) {
    event.preventDefault();
    const nombre = document.getElementById('productName').value.trim();
    const precio = document.getElementById('productPrice').value.trim();
    const cantidad = document.getElementById('productQuantity').value.trim();
  
    if (nombre && precio && cantidad) {
      productos.push({
        nombre: nombre,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad)
      });
      window.alert("Producto agregado exitosamente"); 
      mostrarListado();
  
      
      document.getElementById('productName').value = '';
      document.getElementById('productPrice').value = '';
      document.getElementById('productQuantity').value = '';
    } else {
      alert('Por favor completa todos los campos');
    }
  }

// Mostrar la tabla
function mostrarProductos() {
  const cuerpoTabla = document.getElementById('productTableBody');
  cuerpoTabla.innerHTML = '';

  productos.forEach((producto, index) => {
    const fila = `<tr>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td>${producto.cantidad}</td>
                    <td>
                      <button type="button" class="btn btn-warning btn-sm" onclick="editarProducto(${index})">Editar</button>
                      <button type="button" class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                    </td>
                  </tr>`;
    cuerpoTabla.innerHTML += fila;
  });
}

// Editar
function editarProducto(index) {
  const producto = productos[index];
  document.getElementById('editProductName').value = producto.nombre;
  document.getElementById('editProductPrice').value = producto.precio;
  document.getElementById('editProductQuantity').value = producto.cantidad;
  document.getElementById('editProductIndex').value = index; 

  $('#editProductModal').modal('show'); 
}

function guardarCambios() {
  const index = document.getElementById('editProductIndex').value;
  productos[index].nombre = document.getElementById('editProductName').value.trim();
  productos[index].precio = parseFloat(document.getElementById('editProductPrice').value.trim());
  productos[index].cantidad = parseInt(document.getElementById('editProductQuantity').value.trim());
  
  $('#editProductModal').modal('hide'); 
  mostrarProductos(); 
}

// Eliminar
function eliminarProducto(index) {
  if (confirm(`¿Estás seguro de que quieres eliminar el producto "${productos[index].nombre}"?`)) {
    productos.splice(index, 1);
    mostrarProductos(); 
  }
}


function mostrarListado() {
  document.getElementById('productForm').style.display = 'none';
  document.getElementById('productTable').style.display = 'block';
  mostrarProductos(); 
}

function mostrarFormularioCrear() {
    document.getElementById('productForm').style.display = 'block';
    document.getElementById('productTable').style.display = 'none';
  }

  function mostrarListado() {
    document.getElementById('productForm').style.display = 'none';
    document.getElementById('productTable').style.display = 'block';
    mostrarProductos(); 
  }

  mostrarFormularioCrear();