window.onload = function () {
  let pupilas = document.querySelectorAll(".pupila");

  document.addEventListener("mousemove", function (evento) {
    // console.log(evento.clientX);
    // console.log(evento.clientY);

    for (let i = 0; i < pupilas.length; i++) {
      pupilas[i].style.left = evento.clientX + "px";
      pupilas[i].style.top = evento.clientY + "px";
    }

    // console.log(pupilas[0].style.left);
    // console.log(pupilas[0].style.top);
  });

  let cuencas = document.querySelectorAll(".cuenca");

  const coordenadas = [];

  for (let i = 0; i < cuencas.length; i++) {
    const rect = cuencas[i].getBoundingClientRect(); // Saca los datos de la pantalla

    coordenadas.push(rect);
  }

  console.log(coordenadas);

  /*const left = [];
  const right = [];
  const top = [];
  const bottom = [];

  for (let i = 0; i < cuencas.length; i++) {
    let estilos = window.getComputedStyle(cuencas[i]);

    left[i] = estilos.getPropertyValue("left");
    right[i] = estilos.getPropertyValue("right");
    top[i] = estilos.getPropertyValue("top");
    bottom[i] = estilos.getPropertyValue("bottom");
  }

  console.log(left, right, top, bottom);
  console.log(cuencas[0].style.left);*/
};
