//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //oculto
    menu.style.display = "Block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//ocultar menu despues de elegir una opcion

let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//animaciones %
function barras(id_barra) {
  for (i = 0; i <= 9; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

let html = document.getElementById("html");
barras(html);

let javaScript = document.getElementById("javaScript");
barras(javaScript);

let Laravel = document.getElementById("Laravel");
barras(Laravel);

let php = document.getElementById("php");
barras(php);

//pintar las barras
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 9, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javaScript, 5, 1, intervalJavascript);
    }, 100);
    const intervallaravel = setInterval(function () {
      pintarBarra(Laravel, 1, 2, intervallaravel);
    }, 100);
    const intervalphp = setInterval(function () {
      pintarBarra(php, 4, 3, intervalphp);
    }, 100);
  }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#940253";
  } else {
    clearInterval(interval);
  }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
  efectoHabilidades();
};
