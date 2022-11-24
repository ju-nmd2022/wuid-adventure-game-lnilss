const randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber);
if (randomNumber < 4) {
    alert("You lookin' fiiiiire!");
} else if (randomNumber > 7) {
    alert("What's a baddie like you doin' down on the beach?");
} else {
    alert("Let's take a trip over the Pacific.")
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