$(document).ready(() => {
    // FORM
    $('input').on('focus', function() {
        if (this.value === '') {
            return;
        }
        if (!this.validity.valid) {
            $(this).closest('.error-message').addClass('invalid');
        }
    }).on('blur', function() {
        $(this).closest('.error-message').removeClass('invalid');
    }).on('input', function() {
        if (this.value === '') {
            $(this).closest('.error-message').removeClass('invalid');
        } else if (this.validity.valid) {
            $(this).closest('.error-message').removeClass('invalid');
        }
    });

    $('.form_container form').submit(function(event) {
        event.preventDefault();

        $('.form_container form button').removeClass('sent');

        $(this).find('button').text('Заявка отправлена');
        $(this).find('button').addClass('sent');

        setTimeout(function() {
            $(this).find('button').removeClass('sent');
            $(this).find('button').text('Оставить заявку');
        }.bind(this), 5000);
    });
});