var nav = document.querySelectorAll(".nav-link a");
var interval;
var prev_dist = -1;
let done = false;

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    let name = event.target.innerText;
    lowername = name.toLowerCase();
    console.log(lowername);
    if (lowername == "home") {
      return;
    }
    div = document.getElementById(lowername);
    interval = setInterval(function () {
      smoothscroll(div);
    }, 30);
    return;
  });
}

function smoothscroll(targetsection) {
  let cur_top_distance = targetsection.getBoundingClientRect().top;
  if (cur_top_distance <= 0 || prev_dist == cur_top_distance) {
    clearInterval(interval);
    return;
  } else {
    prev_dist = cur_top_distance;
    window.scrollBy(0, 60);
  }
}

function get_percentage(prop) {
  if (prop == "progress-excellent") {
    return 90;
  } else if (prop == "progress-verygood") {
    return 80;
  } else if (prop == "progress-good") {
    return 60;
  } else {
    return 30;
  }
}
var skills = document.querySelectorAll("#skills");
var bars = document.querySelectorAll(".progress-bar > div");

window.addEventListener("scroll", checkscroll);

function initialise_bars() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.width = "0%";
  }
}

var fill_bars;

function checkscroll() {
  let cur_top_distance = skills[0].getBoundingClientRect().top;
  console.log(cur_top_distance);
  if (cur_top_distance <= 300 && cur_top_distance >= -300 && done == false) {
    done = true;
    for (let i = 0; i < bars.length; i++) {
      let childwidth = get_percentage(bars[i].getAttribute("class"));
      fill_bars = setInterval(function () {
        barfiller(bars[i], childwidth);
      }, 100);
    }
  } else if (
    done == true &&
    (cur_top_distance >= 600 || cur_top_distance <= -600)
  ) {
    initialise_bars();
    done = false;
  }
}

function barfiller(targetsection, percent) {
  let curwidth = targetsection.style.width;
  let w = parseInt(curwidth.substring(0, curwidth.length - 1));
  if (w >= percent) {
    clearInterval(fill_bars);
    return;
  } else {
    w += 1;
    targetsection.style.width = w + "%";
  }
}
