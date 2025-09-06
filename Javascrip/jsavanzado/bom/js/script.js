/* BOM
Browser Object Model
Manipular el navegador y obtener datos
*/
//1- Tamaño ancho de la ventan del navegador
console.log(window.innerWidth, "Ancho de la pantalla");

//2- Alto del navegador
console.log(window.innerHeight, "ALto del navegador");

//3- Crear una funcion para traer el ancho y alto del navegador
function traerbom(ancho, largo){
    var ancho = console.log(window.innerWidth, "Ancho de la pantalla con una funcion");
    var alto = console.log(window.innerHeight, "ALto del navegador con una funcion");
};

traerbom();

//4- Traer el tamaño real del monitor o dispositivo
console.log(screen.width, "Ancho de la página");
console.log(screen.height, "Alto de la página");

//5- Traer una url
console.log(window.location, "Esto es la url donde estás ahora");

//6- Funcion para redireccionar a otra url
function redirect(url) {
    window.location.href = url;
}
redirect(url);

//7- Abrir otra ventana del navegador
function abrirventana(url){
    window.open(url,"","width=400, height=300");
}
abrirventana(url);