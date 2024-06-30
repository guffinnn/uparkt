$(document).ready(function() {
    // CHANGE LANGUAGE
    let currentLang = 'en'; // Изначальный язык

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
            $('.language_content .language_image').attr('src', `../assets/${selectedLang}.png`);
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

    $('.language_dropdown_item[data_lang="' + currentLang + '"]').hide();

    // BURGER MENU
    $('#burger-checkbox').click(function() {
        $(this).toggleClass('open');
        $('header.header').toggleClass('open');
    });

    // BUTTON DROPDOWN
    $('.dropdown_icon')
        .hover(function() {
            const currentSrc = $(this).find('.image').attr('src');
            if (currentSrc.includes('../assets/arrow-down-purple.svg')) {
                $(this).find('.image').attr('src', '../assets/arrow-down.svg');
            } else {
                $(this).find('.image').attr('src', '../assets/arrow-down-purple.svg');
            }
        })
        .click(function() {
            $(this).find('.image').toggleClass('open');

            // Проверяем, меньше ли ширина экрана 600px
            if (window.innerWidth < 600) {
                $(this).css('background', 'var(--pure-violet)');
                $(this).find('.image').attr('src', '../assets/arrow-down-purple.svg');

                // Возвращаем цвет в исходное состояние через 0.45 секунды
                setTimeout(() => {
                    $(this).css('background', 'var(--violet)');
                    $(this).find('.image').attr('src', '../assets/arrow-down.svg');
                }, 450);
            }
        });
});