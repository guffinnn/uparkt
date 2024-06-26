$(document).ready(function() {
    // CHANGE LANGUAGE
    let currentLang = 'ru'; // Изначальный язык

    $('.language_container').click(function() {
        $('.language_dropdown').toggleClass('open');
        $(this).toggleClass('open');
    });

    $('.language_dropdown_item').click(function() {
        const selectedLang = $(this).attr('data_lang');
        // Если выбранный язык не совпадает с текущим, меняем язык
        if (selectedLang !== currentLang) {
            $('.language_text').text($(this).text());
            $('.language_image').attr('src', `assets/${selectedLang}.png`);
            currentLang = selectedLang; // Обновляем текущий язык
        }
        $('.language_dropdown').hide();
    });

    // BURGER MENU
    $('#burger-checkbox').click(function() {
        $(this).toggleClass('open');
        $('header.header').toggleClass('open');
    });

    // BUTTON DROPDOWN
    $('.dropdown_icon').click(function() {
        $(this).find('.dropdown_icon.image').toggleClass('open');
    });
});