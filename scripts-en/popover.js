$(document).ready(function() {
    // POPOVER
    $('.h4_heading .help_image').hover(function () {
        $(this).closest('.advantage_content')
            .find('.popover')
            .addClass('open');
        $(this).attr('src', '../assets/help-circle-purple.svg');
    }, function () {
        $(this).closest('.advantage_content')
            .find('.popover')
            .removeClass('open');
        $(this).attr('src', '../assets/help-circle.svg');
    });

    // Оставляем tooltip видимым, пока курсор над ним
    $('.popover').hover(function () {
        $(this).addClass('open');
        $('.h4_heading .help_image').attr('src', '../assets/help-circle-purple.svg');
    }, function () {
        // Скрываем tooltip, когда курсор уходит с него и не наведен на кнопку
        $(this).closest('.advantage_content').find('.help_image').mouseout(function () {
            $(this).closest('.advantage_content')
                .find('.popover')
                .removeClass('open');
            $(this).attr('src', '../assets/help-circle.svg');
        });
    });
});