<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios</title>
</head>
<body>
    <h1>Procesar formulario dentro de uhn mismo archivo con POST</h1>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
        Nombre: <input type="text" name="nombre">
        <input type="submit">
    </form>
    <?php
    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $nombre = $_POST['nombre'];
        if(empty($nombre)){
            echo "Escriba un nombre!";
        }else{
            echo "El nombre ingresado es: $nombre";
        }
    }
    ?>

</body>
</html>