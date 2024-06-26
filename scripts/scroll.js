$(document).ready(function() {
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
        mainSections.each(function (index) {
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
    $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > 0) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }

        handleScroll();
    });
});