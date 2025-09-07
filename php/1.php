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
    echo "<hr>";
    echo strpos("Hola mundo desde php", "mundo"); 
    echo "<hr>";
    echo str_replace("mundo", "planeta", "Hola mundo");
    echo "<hr>";
    echo (pi());//Devuelve el nro pi 
    echo "<hr>";
    echo (min(0,150,30,85,-10,-100));//Trae el valor minimo de una  cadena de nros
    echo (max(0,150,30,85,-10,-100));//Trae el valor maximo de una  cadena de nros
    echo "<hr>";
    echo "<h1>Variables Constantes<h1>";
    define("nombredeconstante", "Bienvenidos al curso de php");//se define primero el nombre
    echo nombredeconstante;
    echo "<hr>";
    define("autos",["BMW", "Toyota", "Nissan", "Kia"]);//Definir array ed tipo constante
    echo autos[3];

?>
</body>
</html>