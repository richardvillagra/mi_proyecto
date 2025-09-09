<title>Estructura while</title>
<h1>Estructura while</h1>
<?php
/*
while(condición){
    bloque de instrucciones
    iterador ++;
}
*/
$x= 1;
while($x <=5){
    echo "El número es: $x <br>";
    $x++;
}

echo "<h1>Estructura while</h1>";

$variable =0;
while($variable <=100){
    echo "El número es: $variable <br>";
    $variable+=10;
}

/*do{
}while(condicion);
*/
echo "<h1>Do while</h1>";
$z=0;
do{
    echo "El número es: $z <br>";
    $z+=10;
}while($z <=100);

?>
