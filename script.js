var views = ["10K", "50k", "100k", "500k", "1M"];
var prices = [8, 12, 16, 24, 36];
var index = 3;
var isToggled = false;

function toggle() {
  isToggled = !isToggled;
  handleInput();
}

function handleInput() {
  addProgressBar();
  var slider = document.getElementById("slider");
  index = Math.round(slider.value / (slider.max / (views.length - 1)));

  let price = prices[index];
  if (isToggled) {
    price = (price * 3) / 4;
  }

  document.getElementById("views").innerText = `${views[index]} pageviews`;
  document.getElementById("price").innerText = `$${price.toFixed(2)} `;
}

function handleChange() {
  var slider = document.getElementById("slider");
  var { value, max } = slider;

  if (value < 13) {
    slider.value = 0;
  } else if (value < 38) {
    slider.value = 25;
  } else if (value < 63) {
    slider.value = 50;
  } else if (value < 88) {
    slider.value = 75;
  } else {
    slider.value = max;
  }
  addProgressBar();
}

function addProgressBar() {
  var style = document.createElement("style");
  style.innerHTML =
    'input[type="range"]::-webkit-slider-thumb{box-shadow:0 20px 30px #a5f3eb';

  var slider = document.getElementById("slider");
  for (let i = 0; i < slider.value; i++) {
    style.innerHTML += `,-${(i + 5) * 4.5}px 0 0 -20px #a5f3eb`;
  }
  style.innerHTML += ";}";

  var ref = document.querySelector("script");
  ref.parentNode.insertBefore(style, ref);
}
