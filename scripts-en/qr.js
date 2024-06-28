$(document).ready(function() {
    // QR-CODE
    $('#qr').mouseover(function () {
        $('.qr_code_mobile').attr('src', '../assets/qr-black.svg');
    });

    $('#qr').mouseout(function () {
        $('.qr_code_mobile').attr('src', '../assets/qr.svg');
    });

    $('#qr').click(function () {
        $('.qr_code_mobile').attr('src', '../assets/qr-gray.svg');
    });
});