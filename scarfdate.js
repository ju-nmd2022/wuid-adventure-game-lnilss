const randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber);
if (randomNumber < 4) {
    alert("You look absolutely dashing.");
} else if (randomNumber > 7) {
    alert("You ruffle my feathers!");
} else {
    alert("I am so lucky to have met such a sweet seagull.")
}

document.getElementById("bling-ring").style.visibility = "hidden"
document.getElementById("notthatone").style.visibility = "hidden"
let blingRing = document.getElementById("bling-ring");
let wingOutRight = document.getElementById("wingOutRight");
let wingOutLeft = document.getElementById("wingOutLeft");
let notThatOne = document.getElementById("notthatone");
wingOutRight.addEventListener("click", function (event) {
    document.getElementById("bling-ring").style.visibility = "visible";
    document.getElementById("wingOutRight").style.visibility = "hidden";
    document.getElementById("wingOutLeft").style.visibility = "hidden";
    document.getElementById("notthatone").style.visibility = "hidden"
  });

  wingOutLeft.addEventListener("click", function (event) {
    document.getElementById("bling-ring").style.visibility = "hidden";
    document.getElementById("notthatone").style.visibility = "visible"
    document.getElementById("wingOutRight").style.visibility = "visible";
    document.getElementById("wingOutLeft").style.visibility = "visible";
  });