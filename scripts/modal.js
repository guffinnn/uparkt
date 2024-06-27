// При клике на кнопку открываем модальное окно
$("#qr").click(function() {
    $("#myModal").addClass('open');
});

// При клике на крестик закрываем модальное окно
$(".close").click(function() {
    $("#myModal").removeClass('open');
});
