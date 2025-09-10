<?php
/* Conexión php con mysql */
//Establecer variables del servidor de bd
$vhost = 'localhost';
$vuser = 'root';
$vpass = '';
$vbd = 'pruebamysqlphp';
$conexion = mysqli_connect($vhost, $vuser, $vpass, $vbd);

if(mysqli_connect_errno()){
    echo "La conexión a la bd no se pudo establecer, mirar el error".mysqli_connect_errno();
}else{
    //echo "La conexión a la bd: $vbd fue exitosa";
}

?>