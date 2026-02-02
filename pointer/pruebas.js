window.onload = function () {
  
  document.addEventListener("mousemove", function (e) {
    let circulo = document.querySelectorAll("div");
    console.log(`x: ${e.clientX}, y: ${e.clientY}`);

    for (let i = 0; i < circulo.length; i++) {
      circulo[i].style.left = e.clientX + "px";
      circulo[i].style.top = e.clientY + "px";
    }
  });

  document.addEventListener("click", function (e) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.setAttribute("class", "nuevoDiv");
    nuevoDiv.style.left = e.clientX + "px";
    nuevoDiv.style.top = e.clientY + "px";

    document.body.appendChild(nuevoDiv);

    setTimeout(() => {
      nuevoDiv.setAttribute("class", "expand");
    }, 10);
  }); 
};
