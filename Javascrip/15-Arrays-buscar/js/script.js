/* Arrays arreglos Busquedas
*/
'use strict'

var lenguajes = ["Javascrip", "Java", "PHP", "C++", "Python"];

//Find
var buscafind = lenguajes.find(lenguajes => lenguajes == "Java");
console.log(buscafind);

//FindIndex
var buscaindex = lenguajes.findIndex(lenguajes => lenguajes == "PHP")
console.log(buscaindex);

//Busqueda de valores numéricos con some (devuelve true o false)
var numeros = [10,30,50,80,90,100,30];
var buscapoinrs = numeros.some(numeros => numeros >= 30);
console.log(buscapoinrs)




