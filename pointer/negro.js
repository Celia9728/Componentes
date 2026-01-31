window.onload = function () {
  let linterna = document.querySelector("#linterna");
  let fondo = document.querySelector(".fondoIluminado");
  document.addEventListener("mousemove", function (e) {
    linterna.style.left = e.clientX + "px";
    linterna.style.top = e.clientY + "px";

    fondo.style.setProperty("--x", e.clientX + "px");
    fondo.style.setProperty("--y", e.clientY + "px");
  });

  linterna.addEventListener("click", function (params) {
    console.log(linterna.getAttribute("class"));
    if (this.getAttribute("class") == "encendida") {
      this.setAttribute("class", "apagada");
      fondo.setAttribute("class", "fondoNegro");
    } else {
      this.setAttribute("class", "encendida");
      fondo.setAttribute("class", "fondoIluminado");
    }
  });
};
