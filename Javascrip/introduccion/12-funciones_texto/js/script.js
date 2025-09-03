/*Funciones
Predeterminadas en js
*/
//Funciones para transformar texto
var numero = 888;
var text1 = " Bienvenidos al curso de javascrip ";
var  text2 = "TEXTO EN MAYUSCULA";

//1- Transformar de nro a string
var nroconvertido = numero.toString();
console.log(nroconvertido);
console.log(typeof(nroconvertido));

//2- Cambiar valores de minúscula a mayúscula
var text1MAYUS = text1.toUpperCase();
console.log(text1MAYUS)

//3- Cambiar valores de mayus a minus
var text2minu = text2.toLocaleLowerCase();
console.log(text2minu);

//4- longitud de un string
var longitud = "Richard Villagra";
console.log(longitud.length);

//5- Concatenar
console.log(text1 + text2);

//6- Arrays -longitud
var Array=["hola", "Cómo", "Estás?"];
console.log(Array.length);

//7- Buscar por índice
var busqueda = text1.indexOf("curso");
console.log(busqueda);

//8- Buscar por índice 2
var busqueda2 = text1.lastIndexOf("de");
console.log(busqueda2);

//9- Buscar por índice 3
var busqueda3 = text1.search("javascrip");
console.log(busqueda3);

//10- match
var busqueda4 = text1.match("al");
console.log(busqueda4);

//11- Quitar espacios de adelante o de atras
var sustraerespacios = text1.substr(14, 6);
console.log(sustraerespacios);

//12- Quitar letra
var quitar = text1.charAt(2);
console.log(quitar);

//13- Busqueda con startswicth cuando las palabras comienzan con un valor esto devuelve true o false
var busqueda5 = text1.startsWith("Bienve");
console.log(busqueda5);

//14- includes
var busqueda6 = text1.includes("javascrip");
console.log(busqueda6);

//15- Reemplazar una palabra por otra
var reemplazar = text1.replace("javascrip", "java");
console.log(reemplazar);

//16- Borrar una partee y devolver el valor indicado
var borrarparte = text1.slice(12, 20);
console.log(borrarparte);

//17- Split convertir texto en array
var textarray = text1.split();
var textarray = text1.split(" ");
console.log(textarray);

//18- Quitar espacios con trim
var quitarespacios = text1.trim();
console.log(quitarespacios);

//19- Uso de plantillas
var nombre = prompt("Ingrese el nombre");
var apellido = prompt("Ingrese el apellido");
//alt + 96 
var plantilla = `
<h1>Hola que tal</h1>
<h3>El nombre es: ${nombre}</h3>
<h3>El apellido es: ${apellido}</h3>
`;

document.write(plantilla);

