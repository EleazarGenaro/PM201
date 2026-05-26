let contadorNotificaciones = 0;

function calcularCajaAutomatico() {
    const contenedorPedidosCaja = document.getElementById("contenedor-pedidos-caja");
    contenedorPedidosCaja.innerHTML = "";

    let pedidosEnCaja = JSON.parse(localStorage.getItem('bd_pedidos2')) || [];
    let pedidosCobrados = pedidosEnCaja.filter(p => p.precio > 0 && p.estado === "Pedido Entregado");

    if (pedidosCobrados.length === 0) {
        contenedorPedidosCaja.innerHTML = `<div class="text-center text-muted py-3 small">Esperando entregas confirmadas...</div>`;
        actualizarCamposTotales(0, 0, 0);
        return;
    }

    const totalGeneral = pedidosCobrados.reduce((suma, { precio }) => suma + Number(precio), 0);
    const subtotal = totalGeneral / 1.16;
    const iva = totalGeneral - subtotal;

    actualizarCamposTotales(subtotal, iva, totalGeneral);

    pedidosCobrados.forEach(({ nombre, precio }, index) => {
        contenedorPedidosCaja.innerHTML += `
            <div class="alert alert-secondary d-flex justify-content-between align-items-center py-2 mb-2 shadow-sm border">
                <span class="small text-dark"><strong>#${index + 1}</strong> ${nombre}</span>
                <span class="badge bg-dark fs-6">$${Number(precio).toFixed(2)}</span>
            </div>
        `;
    });
}

function actualizarCamposTotales(subtotal, iva, total) {
    document.getElementById("caja-subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("caja-iva").textContent = `$${iva.toFixed(2)}`;
    document.getElementById("caja-total").textContent = `$${total.toFixed(2)}`;
}

// RÚBRICA: FUNCIÓN QUE RECIBE CALLBACK
function notificarEstadoCaja(pedido, estado, funcionCallback) {
    let mensaje = estado === "listo" 
        ? `✅ ¡Ingreso Listo! Se cobró <strong>$${pedido.precio}</strong> por: ${pedido.nombre}`
        : `🚫 ¡Ingreso Abortado! Orden cancelada: ${pedido.nombre}`;
    
    let claseVisual = estado === "listo" ? "alert-success" : "alert-danger";

    calcularCajaAutomatico();
    
    // EJECUCIÓN DEL CALLBACK
    funcionCallback(mensaje, claseVisual);
}

// RÚBRICA: EL CALLBACK EN SÍ MISMO
function mostrarAlertaPantalla(mensaje, claseColor) {
    const contenedor = document.getElementById("contenedor-notificaciones");
    const badge = document.getElementById("badge-caja");
    
    // Limpia el mensaje de "Vacío"
    if(contenedor.innerHTML.includes("Sin notificaciones")) contenedor.innerHTML = "";

    // Incrementa la campana
    contadorNotificaciones++;
    badge.innerText = contadorNotificaciones;
    badge.style.display = "inline-block";

    // Inyecta el Toast visual
    const notificacion = `
        <div class="alert ${claseColor} py-2 mb-2 border shadow-sm small">
            ${mensaje}
            <div class="text-muted mt-1" style="font-size: 0.65rem;">🕒 Hace un instante</div>
        </div>
    `;
    contenedor.innerHTML = notificacion + contenedor.innerHTML;
}

function limpiarNotificacionesCaja() {
    contadorNotificaciones = 0;
    document.getElementById("badge-caja").style.display = "none";
}

window.addEventListener('DOMContentLoaded', calcularCajaAutomatico);