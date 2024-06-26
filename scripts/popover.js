$(document).ready(function() {
    // POPOVER
    $('.h4_heading img').hover(function() {
        $(this).closest('.advantage_content')
            .find('.popover')
            .addClass('open');
        $(this).attr('src', 'assets/help-circle-purple.svg');
    }, function() {
        $(this).closest('.advantage_content')
            .find('.popover')
            .removeClass('open');
        $(this).attr('src', 'assets/help-circle.svg');
    });
});