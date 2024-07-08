<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Función para limpiar y validar los datos del formulario
    function limpiarDato($dato) {
        $dato = trim($dato);
        $dato = stripslashes($dato);
        $dato = htmlspecialchars($dato);
        return $dato;
    }

    // Obtener y decodificar los datos JSON del cuerpo de la solicitud
    $data = json_decode(file_get_contents('php://input'), true);

    // Limpiar y validar los datos
    $nombre = limpiarDato($data['user_name']);
    $email = limpiarDato($data['user_email']);
    $mensaje = limpiarDato($data['message']);

    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Código de respuesta HTTP para solicitud incorrecta
        echo json_encode(['error' => 'Formato de correo electrónico inválido.']);
        exit;
    }

    $para = 'INFO@GEOSANPLAGAS.CL, rsanchez@geosanplagas.cl, jatenas@geosanplagas.cl';
    $asunto = 'SOLICITUD GEOSAN PLAGAS';

    $cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
    $cabeceras .= 'From: ' . $email . "\r\n";

    // Intentar enviar el correo electrónico
    if (mail($para, $asunto, $cuerpo, $cabeceras)) {
        echo json_encode(['mensaje' => 'Su mensaje ha sido enviado exitosamente.']);
    } else {
        http_response_code(500); // Código de respuesta HTTP para error interno del servidor
        echo json_encode(['error' => 'Hubo un problema al enviar su mensaje. Por favor, intente nuevamente más tarde.']);
    }
} else {
    // Método no permitido
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido.']);
}
?>
