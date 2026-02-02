window.onload = function () {
  let linterna = document.querySelector("#linterna");
  let fondo = document.querySelector(".fondoNegro");
  document.addEventListener("mousemove", function (e) {
    linterna.style.left = e.clientX + "px";
    linterna.style.top = e.clientY + "px";

    fondo.style.setProperty("--x", e.clientX + "px");
    fondo.style.setProperty("--y", e.clientY + "px");
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key == "s") {
      linterna.setAttribute("class", "encendida");
      fondo.setAttribute("class", "fondoIluminado");
    }
  });

  /*linterna.addEventListener("keydown", function () {
    if (this.getAttribute("class") == "encendida") {
      this.setAttribute("class", "apagada");
      fondo.setAttribute("class", "fondoNegro");
    } else {
      this.setAttribute("class", "encendida");
      fondo.setAttribute("class", "fondoIluminado");
    }
  });*/
};
