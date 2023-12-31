//Some classes and html functions need to determine a constant
var color1 = document.querySelector(".color1"); // 1st color
var color2 = document.querySelector(".color2"); // 2nd color
var label1 = document.querySelector("#label-1[contenteditable]");
var label2 = document.querySelector("#label-2[contenteditable]");
var bodys = document.getElementById("gradient"); // color display
var linearDirection = document.getElementsByName("toDirection")[0]; //Select box
var cancel = document.querySelector(".cancel");
//displays default CSS RGBA values for linear-gradient

//You have to make arrangements to see the color code in the display

cancel.style.display = "none";
var fileTag = document.getElementById("filetag"),
  preview = document.getElementById("preview");

fileTag.addEventListener("change", function () {
  changeImage(this);
});

label1.addEventListener("input", function () {
  changeColor1("#" + label1.textContent);
});
label2.addEventListener("input", function () {
  changeColor2("#" + label2.textContent);
});

function changeColor1(input) {
  color1.value = input;
}
function changeColor2(input) {
  color2.value = input;
}

color1.addEventListener("input", function () {
  changeText1(color1.value);
});
color2.addEventListener("input", function () {
  changeText2(color2.value);
});

function changeText1(input) {
  label1.textContent = input.substring(1);
}
function changeText2(input) {
  label2.textContent = input.substring(1);
}

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute("src", e.target.result);
      preview.style.display = "block";
      cancel.style.display = "block";
    };

    reader.readAsDataURL(input.files[0]);
  }
}
function hidestuff() {
  cancel.style.display = "none";
  preview.style.display = "none";
}

var up = false,
  right = false,
  down = false,
  left = false,
  zoomIn = false,
  zoomOut = false,
  i = 1,
  x = window.innerWidth / 2 - 130 / 2,
  y = window.innerHeight / 2 - 130 / 2;
document.addEventListener("keydown", press);
function press(e) {
  if (e.keyCode === 87 /* w */) {
    up = true;
  }
  if (e.keyCode === 68 /* d */) {
    right = true;
  }
  if (e.keyCode === 83 /* s */) {
    down = true;
  }
  if (e.keyCode === 65 /* a */) {
    left = true;
  }
  if (e.keyCode === 90 /* z */) {
    zoomIn = true;
  }
  if (e.keyCode === 88 /* x */) {
    zoomOut = true;
  }
}
document.addEventListener("keyup", release);
function release(e) {
  if (e.keyCode === 87 /* w */) {
    up = false;
  }
  if (e.keyCode === 68 /* d */) {
    right = false;
  }
  if (e.keyCode === 83 /* s */) {
    down = false;
  }
  if (e.keyCode === 65 /* a */) {
    left = false;
  }
  if (e.keyCode === 90 /* z */) {
    zoomIn = false;
  }
  if (e.keyCode === 88 /* x */) {
    zoomOut = false;
  }
}
function gameLoop() {
  var div = document.querySelector("#move");
  if (up) {
    y = y - 20;
  }
  if (right) {
    x = x + 20;
  }
  if (down) {
    y = y + 20;
  }
  if (left) {
    x = x - 20;
  }
  if (zoomIn) {
    i = i + 0.1;
  }
  if (zoomOut) {
    i = i - 0.1;
  }
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.transform = `scale(${i})`;
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);
