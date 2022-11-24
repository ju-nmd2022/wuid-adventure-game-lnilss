
document.getElementById("gotocampspoon").style.visibility = "hidden";
document.getElementById("gotocampglass").style.visibility = "hidden";
let goCampSpoon = document.getElementById("gotocampspoon");
let goCampGlass = document.getElementById("gotocampglass");
goCampSpoon.addEventListener("click", function (event) {
  
});

function scarfDialogue() {
    var scarf = document.getElementById("scarfButton");
    if(confirm("It is my pleasure to offer you the finest creme brulee in all of Seagull Station.")){
        txt="You now have the creme brulee, but what can you eat it with?";
        document.getElementById("gotocampspoon").style.visibility = "visible";
        document.getElementById("gotocampglass").style.visibility = "hidden";
        saveToLocalStorage();
    } 
    else {
        txt="You politely decline.";
        document.getElementById("gotocampglass").style.visibility = "hidden";
        document.getElementById("gotocampspoon").style.visibility = "hidden";
        saveToLocalStorage();
    }
    document.getElementById("response").innerHTML = txt
}

function sunDialogue() {
    var sun = document.getElementById("sunButton");
    if(confirm("Hey hot stuff, here's a bag of crisps.")){
        txt="You now have the bag of crisps, but what do you open it with?";
        document.getElementById("gotocampglass").style.visibility = "visible";
        document.getElementById("gotocampspoon").style.visibility = "hidden";
        saveToLocalStorage();
    } 
    else {
        txt="You politely decline.";
        document.getElementById("gotocampspoon").style.visibility = "hidden";
        document.getElementById("gotocampglass").style.visibility = "hidden";
        saveToLocalStorage();
    }
    document.getElementById("response").innerHTML = txt;
}



