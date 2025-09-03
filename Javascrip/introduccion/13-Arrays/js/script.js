/* Arrays arreglos
Predeterminados en js
*/
'use strict'
//Variable normal
var nombre = "Richard Villagra";
//Definir un array
var nombres = ["Andrea Gauto", "Milagros Sanabria", "Bianca Vera", 
    "Maria Rojas", 24, true
];
//Otra forma de establecer un array
var lenguajes = new Array("Java", "PHP", "JavaScrip", "Python", "C++");

console.log(nombres);
console.log(lenguajes);

//Acceder a elementos
console.log("El lenguaje 2 es: "+lenguajes[2]);

//Imprimir un elemento ingresando el nro de índice
var seleccion = parseInt(prompt("Qué lenguaje seleccionaras ??", 0));
if(seleccion >= lenguajes.length){
    alert("Introducce un nro menor, no existe esa posición "+ lenguajes.length);
}else {
    alert(lenguajes[seleccion]);
}

//Recorrer un Array
//1-For
document.write("<h1>Imprimir elementos con for</h1>");
document.write("<ul>");
for(var i =0; i< lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

//2- Foreach
document.write("<h1>Imprimir elementos con foreach</h1>");
document.write("<ul>");
    lenguajes.forEach((elemento, indice, array)=>{
        console.log(elemento);
        console.log(indice);
        console.log(array);
        document.write("<li>"+"El indice es: "+indice+" = "+elemento+"</li>");
    });
document.write("</ul>");

//3- FRecorrer con for in
document.write("<h1>Imprimir elementos con for in</h1>");
document.write("<ul>");
for(let lenguaje in lenguajes){
     document.write("<li>"+"El lenguaje es: "+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

