<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulario con POST Procesado mediante otro archivo</h1>
    <form action="recibir_con_post.php" method="POST">
        Nombre: <input type="text" name="nombre">
        Email: <input type="text" name="email">
        <input type="submit" value="Enviar info">
    </form>
</body>
</html>