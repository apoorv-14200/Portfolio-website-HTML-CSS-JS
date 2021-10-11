var rx = 0;
var ry = 0;
var curpos = 0;
var cury = 0;
var inc = 2;
let width = window.innerWidth + 50;
var mycube = document.querySelector(".cube");

setInterval(() => {
  rx += 2;
  ry += 2;
  s = "rotateX(" + rx + "deg) " + "rotateY(" + ry + "deg)";
  curpos = (curpos + inc) % width;
  cury += 0.2;
  cury %= 100;
  mycube.style.top = `${cury}%`;
  mycube.style.left = `${curpos}px`;
  mycube.style.transform = s;
}, 70);

document.addEventListener("keypress", function (event) {
  if (event.keyCode == "119") {
    rx += 20;
  }
  if (event.keyCode == "115") {
    rx -= 20;
  }
  if (event.keyCode == "97") {
    ry -= 20;
  }
  if (event.keyCode == "100") {
    ry += 20;
  }
  s = "rotateX(" + rx + "deg) " + "rotateY(" + ry + "deg)";
  mycube.style.transform = s;
  return;
});
