function changeRed() {
    document.getElementById("redLight").style.background = "red";
    document.getElementById("yellowLight").style.background = "black";
    document.getElementById("greenLight").style.background = "black";

}

function changeYellow() {
    document.getElementById("yellowLight").style.background = "yellow";
    document.getElementById("redLight").style.background = "black";
    document.getElementById("greenLight").style.background = "black";

}

function changeGreen() {
    document.getElementById("yellowLight").style.background = "black";
    document.getElementById("redLight").style.background = "black";
    document.getElementById("greenLight").style.background = "green";

}

function allLights() {
    document.getElementById("redLight").style.background = "red";
    document.getElementById("yellowLight").style.background = "yellow";
    document.getElementById("greenLight").style.background = "green";

}

function clearLights() {
    document.getElementById("redLight").style.background = "black";
    document.getElementById("yellowLight").style.background = "black";
    document.getElementById("greenLight").style.background = "black";
    
}

