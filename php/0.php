<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
<?php
    //Comentario de linea simple
    /* Comentario extendido */
    //Variable
    $variable = 5;
    echo $variable;
    echo "<hr>"; //Ingresar código html en php
    $cadena = "Hola mundo desde PHP";
    print $cadena;
    echo "<hr>"; //Ingresar código html en php
    $cadena2 = 'Hola mundo desde PHP';
    echo "<h1>$cadena2</h1>";
    echo "Esto es", " String", "se pueden escribir separados entre ,";
    echo "<hr>";
    $variableboolean = true;
    var_dump($variableboolean);//Sirve para saber qué contiene una variable
    echo "<hr>";
    $variabledecimal = 3.14;
    var_dump($variabledecimal);
?>
    <h1>Tipo de datos objetos</h1>
<?php
    class Auto{
        function Auto(){
            $this -> marca = "Kia";
            $this -> modelo = "picanto";
            $this -> motor = 1.6;
        }
    }

    $automovil = new Auto();
    echo $automovil->modelo;
    echo $automovil->motor;
    echo $automovil->marca;

    echo "<hr>";
    echo "<h1> Variable null </h1>";
    $x = "Hola mundo";
    $x = null;
    var_dump($x);
?>
</body>
</html>