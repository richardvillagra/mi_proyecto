/* Ejercicios rrays 
*/
'use strict'
/* 
Crear un programa que:
1- Pida 6 nros ingresados por pantalla
2- Mostrar el array entero en el cuerpo de la página y consola
3- Mostrar array ordenado
4- Invertir el orden y mostrarlo
5- Mostrar cuantos elementos tiene
6- Buscar un valor introducido por el usuario y que nos muestre También su índice 
*/

//Crear funcion para imprimir los resultados en el cuerpo de la página
function mostrarArray(elementos, texto=""){
    document.write("<h1>Contenido del array"+texto+"</h1>");
    var resultado = numeros.forEach((elementos, indice) => {
        document.write("<ul>");
        document.write("<li>"+ elementos +"</li>");
        document.write("</ul>");
    });
};


var numeros = new Array(6);

for(var i=0; i<numeros.length; i++){
    numeros[i] = parseInt(prompt("Introduce numeros"));
}
document.write("<h1>Contenido del array</h1>");
var resultado = numeros.forEach((valores)=>{
    document.write("<ul>");
    document.write("<li>"+ valores +"</li>");
    document.write("</ul>");
});

console.log(numeros);

//Mostrar y ordenar
var ordenar = numeros.sort(function(a,b){return a-b});
console.log(ordenar);

//Invertir orden y mostrarlo
numeros.reverse();
//Utilizar funcion creadda anteriormente
mostrarArray(numeros," En orden reverso");

//Mostrar cuantos elementos tiene
document.write("<h1>El array tiene: "+numeros.length+ " elementos</h1>")

//Buscar un valor introducido por el usuario y que nos muestre También su índice
var Busqueda = parseInt(prompt("Busca un número", 0));
var posición = numeros.findIndex(numeros => numeros == Busqueda);
var valor = numeros.find(numeros => numeros = Busqueda);
if(posición && posición !=-1){
    document.write("El valor es: "+valor+" y la posicion esta en: "+ posición);
}else{
    document.write("No encontrado o no es un nro");
};




