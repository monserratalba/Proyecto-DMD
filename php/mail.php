<?php 

$form = $_POST['form'];
$name = $form[0];
$email = $form[1];
$spec = $form[2];
$phone = $form[3];
if(count($form) > 4){
    $msg = $form[4];
}
/* para que mande el email debe de estar montado en un servido */
$para = "karen@xtnegocio.com.mx";
$asunto = "Prueba de SMTP local";
if(count($form) > 4){
    $mensaje = $name." ".$spec."\r\n".$msg."\r\n".$phone;
}else{
    $mensaje = $name." ".$spec."\r\n".$phone;
}

$cabeceras = "From: ".$email . "\r\n" .
"X-Mailer: PHP/" . phpversion();

if(mail($para, $asunto, $mensaje, $cabeceras)) {
    echo "En breve un ejecutivo se pondra en contacto contigo.";
} else {
    echo $mensaje."Error al enviar mensaje";
}

?>