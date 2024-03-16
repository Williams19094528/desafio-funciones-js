const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar.call(this, "yellow");
});

function pintar(color = "green") {
  this.style.backgroundColor = color;
}
