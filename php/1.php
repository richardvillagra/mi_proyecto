<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones con cadena</title>
</head>
<body> 
    <h1>Funciones con cadena</h1>
<?php
    echo strlen("Hola mundo desde PHP");//La cantidad de valores que contiene una cadena
    echo "<hr>";
    $cadena = " Hola mundo ";
    echo trim($cadena);//Sacar espacio de cadenas de tecto
    echo "<hr>";
    echo str_word_count("Hola mundo desde PHP");//Contador de palabras
    echo "<hr>";
    $cadena = "Hola mundo desde PHP";
    echo strrev($cadena);




?>
</body>
</html>