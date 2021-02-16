// backgroud pictures change

window.onload = function () {
  const bgContainer = document.getElementById("bg-container");
  const len = bgContainer.children.length;
  const fadeIn = function (node) {
    node.className = "fadein";
  };
  const fadeOut = function (node) {
    node.className = "";
  };
  let idx = 1;
  setInterval(function () {
    fadeOut(bgContainer.children[idx]);
    idx = ++idx % len;
    fadeIn(bgContainer.children[idx]);
  }, 5000);
};