let html = document.documentElement;
function setRem() {
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  cl_w = cl_w > 1920 ? 1920 : cl_w;
  cl_w = cl_w < 1024 ? 1024 : cl_w;
  html.style.fontSize = cl_w / 24 + "px";
}
window.addEventListener("load", setRem);
window.addEventListener("resize", setRem);
