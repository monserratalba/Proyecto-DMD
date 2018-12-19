<?php 

$form = $_POST['form'];
$name = $form[0];
$email = $form[1];
$spec = $form[2];
$phone = $form[3];
$msg = $form[4];
/* para que mande el email debe de estar montado en un servido */
$para = "karen@xtnegocio.com.mx";
$asunto = "Prueba de SMTP local";
$mensaje = $name." ".$spec."\r\n".$msg."\r\n".$phone;
$cabeceras = "From: ".$email . "\r\n" .
"X-Mailer: PHP/" . phpversion();

if(mail($para, $asunto, $mensaje, $cabeceras)) {
    echo "Correo enviado correctamente";
} else {
    echo "Error al enviar mensaje";
}

?>