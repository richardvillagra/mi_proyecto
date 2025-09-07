<h1>Condicionales</h1>
<h2>Condicional if</h2>
<?php
/*
if(condición){
    bloque de instrucciones
}else{
    bloque de instrucciones
}
else if(condicion){
    bloque de instrucciones
}
*/

$hora = date("H:i:s");
if($hora < "19"){
    echo "Que tengas un buen dia";
}
?>
<hr>
<h2>Condicional if else</h2>
<?php
$hora = date("H:i:s");
if($hora < "19"){
    echo "Que tengas un buen dia";
}else{
    echo "Que tengas una buenas noches";
}
?>
<h2>Condicional else if</h2>
<?php
$hora = date("H:i:s");
if($hora < "10"){
    echo "Que tengas un buen dia";
}elseif($hora < "20"){
    echo "Que tengas unas buenas tardes";
}
else{
    echo "Que tengas una buenas noches";
}
?>
<hr>
<h1>Switch</h1>
<?php
$color = "";
switch($color){
    case "rojo":
        echo "Mi color favorito es rojo";
    break;
    case "azul":
        echo "Mi color favorito es azul";
    break;
    case "verde":
        echo "Mi color favorito es verde";
    break;
    default;
    echo "Mi color favorito no esta dentro de esas opciones";
}
?>