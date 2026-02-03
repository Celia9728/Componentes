window.onload = function () {
  let linterna = document.querySelector("#linterna");
  let fondo = document.querySelector(".fondoNegro");
  let foto = document.querySelector(".foto");

  document.addEventListener("mousemove", function (e) {
    linterna.style.left = e.clientX + "px";
    linterna.style.top = e.clientY + "px";

    fondo.style.setProperty("--x", e.clientX + "px");
    fondo.style.setProperty("--y", e.clientY + "px");
  });

  // let semaforo = false;

  document.addEventListener("mousemove", function (e) {
    let estilos = window.getComputedStyle(foto);

    // Se cogen el left y el top para compararlo donde esta el puntero
    let fotoX = parseInt(estilos.getPropertyValue("left"));
    let fotoY = parseInt(estilos.getPropertyValue("top"));

    // Se coge el ancho y la altura para sumarlo al left y al top y asi saber exactamente el rango de la foto
    let ancho = parseInt(estilos.getPropertyValue("width"));
    let altura = parseInt(estilos.getPropertyValue("height"));

    // Mirar primero si la lampara esta encendida
    if (linterna.getAttribute("class") == "encendida") {
      // Mirar si el raton se encuentra dentro de este rango
      if (
        e.clientX >= fotoX &&
        e.clientX <= fotoX + ancho &&
        e.clientY >= fotoY &&
        e.clientY <= fotoY + altura
      ) {
        foto.style.opacity = "1"; // poner visible si estan dentro del rango
      } else {
        foto.style.opacity = "0"; // si no lo esta se queda oculto
      }
    }
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key == "s") {
      linterna.setAttribute("class", "encendida");
      fondo.setAttribute("class", "fondoIluminado");
    }
  });

  document.addEventListener("keyup", function (evento) {
    linterna.setAttribute("class", "apagada");
    fondo.setAttribute("class", "fondoNegro");
    if (foto.style.opacity == 1) {
      foto.style.opacity = "0";
    }
  });
};
