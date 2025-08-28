/*Funciones
Conjunto de instrucciones que se ejecutan cuando se las llama
*/
//Definir una función
function calculadora (){
    var mensaje = alert("Hola soy una función, me tenes que llamar para que funciones");
}
//Llamar a la función
calculadora();

//Función donde se pide ingresar valor
function calcular(n1, n2, mostrar = false){
    if(mostrar == false){
        alert("Tenes que activarme con true");
    }else{
        var suma = n1+n2;
        return suma;
    }
}

var nr1 = parseInt(prompt("ingrese el valor 1"));
var nr2 = parseInt(prompt("ingrese el valor 2"));
var mostrar = prompt("Mostrar");

alert(calcular(nr1, nr2, mostrar));