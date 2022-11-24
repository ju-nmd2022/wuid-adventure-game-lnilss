document.getElementById("campHelp").style.visibility = "hidden";
document.getElementById("noHelp").style.visibility = "hidden";
document.getElementById("gobackspoon").style.visibility = "hidden";
let glassRect = document.getElementById("glassRect");
let sunglassRect = document.getElementById("sunglassRect");
let plasticRect = document.getElementById("plasticRect");
let spoonRect = document.getElementById("spoonRect");
let goBackSpoon = document.getElementById("gobackspoon");
let noHelp = document.getElementById("noHelp");

glassRect.addEventListener("click", function (event) {
  document.getElementById("campHelp").style.visibility = "hidden";
  document.getElementById("gobackspoon").style.visibility = "hidden";
  document.getElementById("noHelp").style.visibility = "visible";
});

sunglassRect.addEventListener("click", function (event) {
  document.getElementById("campHelp").style.visibility = "hidden";
  document.getElementById("gobackspoon").style.visibility = "hidden";
  document.getElementById("noHelp").style.visibility = "visible";
});

plasticRect.addEventListener("click", function (event) {
  document.getElementById("campHelp").style.visibility = "hidden";
  document.getElementById("gobackspoon").style.visibility = "hidden";
  document.getElementById("noHelp").style.visibility = "visible";
});

spoonRect.addEventListener("click", function (event) {
  document.getElementById("campHelp").style.visibility = "visible";
  document.getElementById("gobackspoon").style.visibility = "visible";
  document.getElementById("noHelp").style.visibility = "hidden";
});
