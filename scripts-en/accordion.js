$(document).ready(function() {
    $(".accordion").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();

        let panel = $(this).next();
        if (panel.css("max-height")) {
            panel.css("max-height", ""); // Убираем ограничение высоты
        } else {
            panel.css("max-height", panel.prop("scrollHeight") + "px"); // Устанавливаем максимальную высоту
        }
    });
});