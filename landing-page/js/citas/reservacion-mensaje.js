function enviarReservacion() {
    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var detalles = document.getElementById("detalles").value;

    // Verificar si todos los campos obligatorios están llenos
    if (nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
        alert("Por favor, completa todos los datos.");
        return;
    }

    // Construir el enlace de WhatsApp con los datos
    var mensaje = "Reservación%20realizada:%0A%0ANombre:%20" + encodeURIComponent(nombre) + "%0AFecha:%20" + encodeURIComponent(fecha) + "%0AHora:%20" + encodeURIComponent(hora) + "%0ADetalles:%20" + encodeURIComponent(detalles);

    var numeroTelefono = '7751171930';
    var enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + mensaje;

    // Abrir el enlace de WhatsApp en una nueva ventana
    window.open(enlaceWhatsApp, '_blank');

    // Mostrar el alert
    alert("Reservación realizada, espera la validación de tu cita por WhatsApp");

    // Resetear el formulario
    document.querySelector('#formularioReservacion').reset();
}
