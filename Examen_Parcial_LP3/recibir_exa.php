<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php
    if(isset($_POST['nombre']) && isset($_POST['apellido'])){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
    }else{
        echo "No se ha ingresado el nombre o el apellido";
    }
   ?>
   Bienvenido: <?php echo $nombre; ?> <?php echo $apellido; ?><br>
</body>
</html>