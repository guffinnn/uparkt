<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Адрес, на который нужно отправить письмо
    $to = "zhdun.2020@gmail.com";

    // Заголовок письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Текст письма
    $mailBody = "Имя: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Тема: $subject\n\n";
    $mailBody .= "Сообщение:\n$message";

    // Отправка письма
    mail($to, $subject, $mailBody, $headers);

    // Вывод сообщения пользователю
    echo "Спасибо! Ваше сообщение отправлено.";
}
?>
