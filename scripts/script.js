$(document).ready(function() {
    // CHANGE LANGUAGE
    let currentLang = 'ru'; // Изначальный язык

    $('.language_container').click(function() {
        $('.language_dropdown').toggleClass('open');
        $(this).toggleClass('open');
    });

    $('.language_dropdown_item').click(function() {
        $('.language_dropdown').show();

        const selectedLang = $(this).attr('data_lang');
        // Если выбранный язык не совпадает с текущим, меняем язык
        if (selectedLang !== currentLang) {
            $('.language_content .language_text').text($(this).text());
            $('.language_content .language_image').attr('src', `assets/${selectedLang}.png`);
            currentLang = selectedLang; // Обновляем текущий язык
        }

        // Обновляем dropdown, скрывая выбранный язык
        $('.language_dropdown_item').each(function() {
            if ($(this).attr('data_lang') === currentLang) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    // Скрываем язык, который уже выбран при загрузке
    $('.language_dropdown_item[data_lang="' + currentLang + '"]').hide();

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