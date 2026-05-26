const productos = [
    { nombre: "Cafe Americano", precio: 35, categoria: "Bebida", cantidad: 20, promo: false },
    { nombre: "Capuccino", precio: 40, categoria: "Bebida", cantidad: 15, promo: false },
    { nombre: "Chocolate Abuelita", precio: 40, categoria: "Bebida", cantidad: 10, promo: false },
    { nombre: "Concha de Vainilla", precio: 10, categoria: "Postre", cantidad: 30, promo: false },
    { nombre: "Dona de Chocolate", precio: 12, categoria: "Postre", cantidad: 25, promo: false }
];
let indiceEditar = -1;

function sincronizarStorage() { localStorage.setItem("productos_cafeteria", JSON.stringify(productos)); if(typeof mostrarMenuCliente === 'function') mostrarMenuCliente(); }
function mostrar(lista) {
    const tabla = document.getElementById("tablaProductos"); tabla.innerHTML = "";
    lista.forEach((p, i) => {
        tabla.innerHTML += `<tr><td class="small">${p.nombre}</td><td class="small">$${p.precio}</td><td class="small">${p.categoria}</td><td class="small fw-bold">${p.cantidad}</td><td><button class="btn btn-warning btn-sm py-0" onclick="editarProducto(${i})">✏️</button> <button class="btn btn-danger btn-sm py-0" onclick="eliminarProducto(${i})">🗑️</button></td></tr>`;
    });
}
function listarProductos() { mostrar(productos); }
function guardarProducto() { /* (Misma lógica tuya) */ const n=document.getElementById("nombre").value, p=Number(document.getElementById("precio").value), c=document.getElementById("categoria").value, q=Number(document.getElementById("cantidad").value); if(indiceEditar===-1) productos.push({nombre:n,precio:p,categoria:c,cantidad:q,promo:false}); else { productos[indiceEditar]={nombre:n,precio:p,categoria:c,cantidad:q,promo:false}; indiceEditar=-1; } sincronizarStorage(); document.getElementById("nombre").value=""; document.getElementById("precio").value=""; document.getElementById("cantidad").value=""; listarProductos(); }
function editarProducto(i) { document.getElementById("nombre").value=productos[i].nombre; document.getElementById("precio").value=productos[i].precio; document.getElementById("categoria").value=productos[i].categoria; document.getElementById("cantidad").value=productos[i].cantidad; indiceEditar=i; }
function eliminarProducto(i) { productos.splice(i, 1); sincronizarStorage(); listarProductos(); }
function buscarBaratos() { mostrar(productos.filter(p => p.precio <= 15)); }
function buscarCaros() { mostrar(productos.filter(p => p.precio >= 40)); }
window.addEventListener('DOMContentLoaded', () => { listarProductos(); sincronizarStorage(); });

// =========================================================
// RÚBRICA: PROMESAS VISUALES EN LA COCINA
// =========================================================

function prepararPedidoCocina(pedido) {
    return new Promise((resolve, reject) => {
        // Tarda 4 segundos en resolver qué pasó en la cocina
        setTimeout(() => {
            const probabilidad = Math.random();
            if (probabilidad > 0.4) resolve(`Terminado con éxito.`);
            else if (probabilidad > 0.2) reject(`Error al preparar.`);
            else reject(`Falta ingrediente.`);
        }, 4000); 
    });
}

function procesarOrdenVisualCocina(pedido) {
    const monitor = document.getElementById("monitor-cocina");
    const vacio = document.getElementById("estado-vacio-cocina");
    if (vacio) vacio.remove(); // Quita el mensaje de "Sin pedidos"
    
    const idCard = "orden-" + pedido.idUnico;
    
    // 1. INYECTA LA TARJETA VISUAL CON SPINNER (Procesando)
    monitor.innerHTML = `
        <div id="${idCard}" class="alert alert-dark shadow-sm p-2 mb-0 d-flex align-items-center small border">
            <div class="spinner-border spinner-border-sm text-secondary me-2" role="status"></div>
            <span><strong>${pedido.nombre}</strong>: Elaborando...</span>
        </div>
    ` + monitor.innerHTML;

    // 2. CONSUME LA PROMESA (.then y .catch)
    prepararPedidoCocina(pedido)
        .then(mensajeExito => {
            document.getElementById(idCard).className = "alert alert-success shadow-sm p-2 mb-0 small border border-success";
            document.getElementById(idCard).innerHTML = `✅ <strong>${pedido.nombre}</strong>: ${mensajeExito}`;
        })
        .catch(mensajeError => {
            let colorClase = mensajeError.includes("ingrediente") ? "alert-warning border-warning" : "alert-danger border-danger";
            let icono = mensajeError.includes("ingrediente") ? "🥛" : "🔥";
            document.getElementById(idCard).className = `alert ${colorClase} shadow-sm p-2 mb-0 small border`;
            document.getElementById(idCard).innerHTML = `${icono} <strong>${pedido.nombre}</strong>: ${mensajeError}`;
        });
}