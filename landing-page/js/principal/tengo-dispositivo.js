document.getElementById('tengo-dispositivo').addEventListener('click', function () {
    // Reemplaza 'Tu mensaje predefinido aquí' con tu mensaje deseado
    var mensaje = encodeURIComponent('Hola, tengo un dispositivo descompuesto que quiero reparar.');

    // Reemplaza '1234567890' con el número de teléfono al que deseas enviar el mensaje
    var telefono = '7751171930';

    // Abre la ventana de WhatsApp con el mensaje predefinido
    window.open('https://wa.me/' + telefono + '?text=' + mensaje, '_blank');
});
