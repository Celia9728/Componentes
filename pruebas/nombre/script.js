window.onload = function () {
  let fondo = document.querySelector(".fondo");
  let lupa = document.querySelector(".lupa");

  document.addEventListener("mousemove", function (e) {
    fondo.style.setProperty("--x", e.clientX + "px");
    fondo.style.setProperty("--y", e.clientY + "px");

    lupa.style.left = e.clientX + "px";
    lupa.style.top = e.clientY + "px";

});
};
