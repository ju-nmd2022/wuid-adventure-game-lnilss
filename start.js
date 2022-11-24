document.getElementById("cowboy").style.visibility = "visible";
document.getElementById("start-info").style.visibility = "visible";
document.getElementById("good-choice").style.visibility = "hidden";
document.getElementById("gotobeach").style.visibility = "hidden";
let startInfo = document.getElementById("start-info");
let cowboyRect = document.getElementById("cowboy");
let goodChoice = document.getElementById("good-choice");
let beachButton = document.getElementById("gotobeach");
cowboyRect.addEventListener("click", function (event) {
  document.getElementById("cowboy").style.visibility = "hidden";
  document.getElementById("start-info").style.visibility = "hidden";
  document.getElementById("necklace").style.visibility = "hidden";
  document.getElementById("good-choice").style.visibility = "visible";
  document.getElementById("gotobeach").style.visibility = "visible";
});

document.getElementById("necklace").style.visibility = "visible";
document.getElementById("start-info").style.visibility = "visible";
document.getElementById("gotobeach").style.visibility = "hidden"
let necklaceRect = document.getElementById("necklace");
necklaceRect.addEventListener("click", function (event) {
  document.getElementById("necklace").style.visibility = "hidden";
  document.getElementById("start-info").style.visibility = "hidden";
  document.getElementById("cowboy").style.visibility = "hidden";
  document.getElementById("good-choice").style.visibility = "visible";
  document.getElementById("gotobeach").style.visibility = "visible";
});