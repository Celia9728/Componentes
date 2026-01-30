window.onload = function () {
      document.addEventListener("mousemove", function (e) {
    let circulo = document.querySelectorAll("div");

    for (let i = 0; i < circulo.length; i++) {
      circulo[i].style.left = e.clientX + "px";
      circulo[i].style.top = e.clientY + "px";
    }
  });

}