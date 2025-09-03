/* Arrays arreglos multidimensionales
Predeterminados en js
*/
'use strict'

var categorias = ["Z","X","Acción", "Comedia", "Terror"];
var peliculas = ["Transportador", "Son como niños", "Annabelle"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

//1- Operacionees con array
//1.1- Añadir elementos
peliculas.push("Batman");
console.log(peliculas);

//1.2- Quitar elementos pop
peliculas.pop();
console.log(peliculas);

//1.3- Añadir elementos con prompt
var elemento ="";
do{
    elemento = prompt("Introduce una peli");
    peliculas.push(elemento);
}while(elemento != "Parar");

//1.4- Recorrer array y mostrar valores en pantalla
peliculas.forEach((pelis)=>{
    document.write("Peliculas: "+ pelis+ "<br>");
});

//2- Convertir Array en texto
var pelistring = peliculas.join();
console.log(typeof pelistring, pelistring);

//3- Convertir texto a array
var cadena = "Texto1, Texto2, texto3";
cadena.split();
console.log(cadena.split());

//4- Ordenar array en orden alfabéetico sort
categorias.sort();
console.log(categorias);

//5- Invertir Orden Reverse
peliculas.reverse();
document.write(peliculas);


