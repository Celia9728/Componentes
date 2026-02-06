window.onload = function () {
  const brazo = document.querySelector(".br2");
  const boca = document.querySelector(".boca");
  const ojos = document.querySelectorAll(".ojos");

  document.addEventListener("click", (e) => {
    brazo.setAttribute(
      "id",
      brazo.getAttribute("id") == "b2" ? "b2Movimiento" : "b2",
    );
  });

  document.addEventListener("mousemove", (e) => {
    const rect = boca.getBoundingClientRect();
    // const ejeX = rect.x + rect.width / 2; // la x es el left
    const ejeY = rect.y + rect.height / 2; // la y es el top

    boca.setAttribute("class", e.clientY < ejeY ? "bocaCerrada" : "boca");
    boca.setAttribute("class", e.clientY < ejeY ? "bocaCerrada" : "boca");

    for (let i = 0; i < ojos.length; i++) {
      ojos[i].setAttribute("class", e.clientY < ejeY ? "ojosCerrados" : "ojos");
    }
  });
};
