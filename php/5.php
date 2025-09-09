<title>Funciones</title>
<h1>Funciones con PHP</h1>
<?php
/* 
function NombreDeLaFuncion(parametros){
    instrucciones de codigo;
}
*/

function holamundo(){
    echo "Hola mundo desde una función!";
}
holamundo();//Llamar a la función

echo "<h1>Funciones pasándole argumentos</h1>";
function NombreFamiliar($nombre){
    echo "El nombre del familiar es: $nombre <br>";
}
//Utilizar o llamar a la función
NombreFamiliar("Juan");
NombreFamiliar("María");
NombreFamiliar("Lilian");

echo "<h1>Funciones pasándole 2 argumentos</h1>";
function NombreAño($vnombre, $año){
    echo "$vnombre su año de nacimiento es: $año <br>";
}
NombreAño("Sonia","1994");
NombreAño("Maria","2000");
NombreAño("Marcos","2005");

echo "<h1>Funciones suma de valores</h1>";
function SumaNros(int $nro1, int $nro2){
    return $nro1+$nro2;
}
echo "La suma es: ".SumaNros(10,5);


?>