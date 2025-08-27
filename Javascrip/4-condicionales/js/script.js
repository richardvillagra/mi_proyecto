/*Condicionales
if(condicion){
    bloque de instrucciones
}else{
    bloque de instrucciones
}
    
else if(){

}

switch
*/

//if else y else if
var numero = 8;
if(numero<10){
    alert('El nro es: '+numero);
}else if(numero ==10){
    alert('El nro es: '+numero);
}else{
    alert('El nro es: '+numero);
}

//switch

var edad = 800;
var imprimir ="";

switch(edad){
    case 17:
        imprimir ="Eres menor de Edad";
        break;
    case 50:
        imprimir ="Ya eres adulto";
    case 80:
        imprimir ="Eres muy adulto";
        break;
    default:
        imprimir = "Tienen otra edad";
}

document.write(imprimir);


