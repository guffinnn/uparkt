// CHANGE LANGUAGE
$(document).ready(function() {
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

    // QR-CODE
    $('#qr').mouseover(function() {
        $('.qr_code_mobile').attr('src', '../assets/qr-black.svg');
    });

    $('#qr').mouseout(function() {
        $('.qr_code_mobile').attr('src', '../assets/qr.svg');
    });

    $('#qr').click(function() {
        $('.qr_code_mobile').attr('src', '../assets/qr-gray.svg');
    });

    // PARALLAX
    const mainSections = $('.main-section');

    function isElementVisible(element) {
        const rect = element[0].getBoundingClientRect();
        const activeElement = $('#active')[0];
        const activeRect = activeElement.getBoundingClientRect();

        // Проверяем, находится ли верхняя граница элемента в том же положении, что и у элемента с id "active"
        return rect.top === activeRect.top &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function handleScroll() {
        mainSections.each(function(index) {
            if (isElementVisible($(this))) {
                $(this).addClass('active');
                if (index > 0) {
                    mainSections.eq(index - 1).addClass('disabled');
                }
            } else {
                $(this).removeClass('active');
                if (index > 0) {
                    mainSections.eq(index - 1).removeClass('disabled');
                }
            }
        });
    }

    // SCROLL
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > 0) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }

        handleScroll();
    });

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