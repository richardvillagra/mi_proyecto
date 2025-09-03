/* 1-Variables*/
//2-'use strict'//Esto para que el lenguaje sea más sensible

//3-Variables de tipo cadena
var pais = "<h1>Paraguay</h1>";
var continente = '<h1>'+'América'+'</h1>';
//Concatenar
var p_c= pais + '-' + continente;

console.log(p_c);
document.write(pais+"<hr>");
document.write(continente);

//2-Moodo estricto
//'use strict'
//4-let permite definir variables limitando su alcance
//5-var permite definir variables y utilizarlas globalmente

let varlet = "Esto es una variable let";
document.write("<br>"+varlet);

//6-Constantes variable que no puede cambiar de valor
//y se define con la palabra const

var web="https://www.utic.edu.py";
console.log(web);

const constweb="https://www.youtube.com";
constweb ="Otra página";
console.log(constweb);