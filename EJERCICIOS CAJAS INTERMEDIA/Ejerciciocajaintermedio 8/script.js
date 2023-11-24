
const caja = document.getElementById("caja");

caja.addEventListener("mouseover", function() {
  const randomColor = getRandomColor();
  caja.style.borderColor = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
