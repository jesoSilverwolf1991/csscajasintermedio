


document.addEventListener("mousemove", function (e) {
    const caja = document.getElementById("caja");
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
  
    const xOffset = mouseX * 40;
    const yOffset = mouseY * 40;
  
    caja.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });
  