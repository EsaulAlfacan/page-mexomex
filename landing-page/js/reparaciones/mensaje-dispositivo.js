function enviarMensaje(categoria) {
    // Reemplaza el número con tu número de WhatsApp y el mensaje con el texto deseado
    var numeroWhatsApp = '7751171930';
    var mensaje = 'Hola, ' + categoria;

    // Construye el enlace de WhatsApp
    var enlaceWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(mensaje);

    // Redirige a la página de WhatsApp
    window.open(enlaceWhatsApp, '_blank');
}