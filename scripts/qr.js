$(document).ready(function() {
    // QR-CODE
    $('#qr').hover(function() {
        if (window.innerWidth >= 600) { // Проверка на десктоп
            $('.qr_code_mobile').attr('src', '../assets/qr-black.svg');
        }
    }, function() {
        if (window.innerWidth >= 600) { // Проверка на десктоп
            $('.qr_code_mobile').attr('src', '../assets/qr.svg');
        }
    });

    $('#qr').click(function() {
        if (window.innerWidth >= 600) { // Проверка на десктоп
            $('.qr_code_mobile').attr('src', '../assets/qr-gray.svg');
        }
    });

    $('#qr').focus(function() {
        if (window.innerWidth < 600) { // Проверка на мобильные устройства
            $('.qr_code_mobile').attr('src', '../assets/qr-black.svg');
        }
    });
});