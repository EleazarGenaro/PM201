//Arreglo con productos iniciales. 
let inventario = [
    { nombre: "Café Americano", precio: 35, cantidad: 10 },
    { nombre: "Capuccino", precio: 40, cantidad: 8 },
    { nombre: "Chocolate Abuelita", precio: 40, cantidad: 15 },
    { nombre: "Concha de Vainilla", precio: 10, cantidad: 20 },
    { nombre: "Dona de Chocolate", precio: 12, cantidad: 10 },
];

// Referencias a los elementos del HTML
const formulario = document.getElementById('formularioProducto');
const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const inputCantidad = document.getElementById('cantidad');
const inputIndex = document.getElementById('indexProducto');
const btnGuardar = document.getElementById('btnGuardar');
const tablaCuerpo = document.getElementById('listaProductos');

//FUNCIÓN PARA LISTAR
function listarProductos() {
    // Limpiamos la tabla para que no se dupliquen al redibujar
    tablaCuerpo.innerHTML = "";

    // Recorremos el array y creamos una fila por cada objeto
    inventario.forEach((producto, index) => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad} unidades</td>
            <td>
                <button class="btn-editar" onclick="cargarDatosFormulario(${index})">Editar</button>
                <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        `;
        tablaCuerpo.appendChild(fila);
    });
}

//FUNCIÓN PARA AGREGAR O EDITAR
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const nombre = inputNombre.value;
    const precio = parseFloat(inputPrecio.value);
    const cantidad = parseInt(inputCantidad.value);
    const index = inputIndex.value;

    if (index === "") {
        inventario.push({ nombre, precio, cantidad });
    } else {
        inventario[index] = { nombre, precio, cantidad };
        btnGuardar.textContent = "Agregar Producto"; 
        inputIndex.value = "";
    }

    formulario.reset(); // Limpia los campos del formulario
    listarProductos();  // Renderiza la tabla actualizada en pantalla
});

//FUNCIÓN PARA ELIMINAR
function eliminarProducto(index) {
    inventario.splice(index, 1);
    listarProductos();
}

//FUNCIÓN AUXILIAR PARA EDITAR
function cargarDatosFormulario(index) {
    const producto = inventario[index];
    
    inputNombre.value = producto.nombre;
    inputPrecio.value = producto.precio;
    inputCantidad.value = producto.cantidad;
    inputIndex.value = index; // Guarda la posición del producto que estamos editando
    
    btnGuardar.textContent = "Actualizar Producto";
}

// Carga la lista inicial de los productos. 
listarProductos();