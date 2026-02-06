window.onload = function () {
  const pupilas = document.querySelectorAll(".pupila");
  const cuencas = document.querySelectorAll(".cuenca");

  document.addEventListener("mousemove", (e) => {
    cuencas.forEach((cuenca, i) => {
      const rect = cuenca.getBoundingClientRect();

      const centroX = rect.left + rect.width;
      const centroY = rect.top + rect.height;

      const dx = e.clientX - centroX;
      const dy = e.clientY - centroY;

      const angulo = Math.atan2(dy, dx);
      const radio = 10; // qué tanto se mueve dentro del ojo

      const x = Math.cos(angulo) * radio;
      const y = Math.sin(angulo) * radio;

      pupilas[i].style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  //   let pupilas = document.querySelectorAll(".pupila");

  //   document.addEventListener("mousemove", function (evento) {
  //     // console.log(evento.clientX);
  //     // console.log(evento.clientY);

  //     for (let i = 0; i < pupilas.length; i++) {
  //       pupilas[i].style.left = evento.clientX + "px";
  //       pupilas[i].style.top = evento.clientY + "px";
  //     }
  //   });

  //   let cuencas = document.querySelectorAll(".cuenca");

  //   const coordenadas = [];

  //   for (let i = 0; i < cuencas.length; i++) {
  //     const rect = cuencas[i].getBoundingClientRect(); // Saca los datos de la pantalla

  //     coordenadas.push(rect);
  //   }

  //   console.log(coordenadas);

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
