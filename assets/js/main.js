$(document).ready(function () {
    // Función para crear corazones flotantes
    function createFloatingHeart() {
        const heart = $('<div class="floating-heart">❤</div>');
        // Posición aleatoria alrededor del sobre
        const valentinesDay = $('.valentines-day');
        const position = valentinesDay.offset();
        const width = valentinesDay.width();
        const height = valentinesDay.height();
        
        // Crear posición aleatoria alrededor del sobre
        const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        let startX, startY;
        
        switch(side) {
            case 0: // top
                startX = position.left + Math.random() * width;
                startY = position.top - 20;
                break;
            case 1: // right
                startX = position.left + width + 20;
                startY = position.top + Math.random() * height;
                break;
            case 2: // bottom
                startX = position.left + Math.random() * width;
                startY = position.top + height + 20;
                break;
            case 3: // left
                startX = position.left - 20;
                startY = position.top + Math.random() * height;
                break;
        }
        
        const translateX = (Math.random() - 0.5) * 100;
        
        heart.css({
            left: startX + 'px',
            top: startY + 'px',
            '--translate-x': translateX + 'px'
        });
        
        $('body').append(heart);
        
        // Eliminar el corazón después de la animación
        setTimeout(() => heart.remove(), 4000);
    }

    // Crear corazones cada 500ms
    const heartInterval = setInterval(createFloatingHeart, 500);

    // Mantener tu código original del clic
    $('.valentines-day').click(function () {
        clearInterval(heartInterval); // Detener la creación de corazones
        // Tu código original aquí...
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000,
                step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1;
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            });
        });
    });
});