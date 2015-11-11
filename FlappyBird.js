/**
 * Created by evanmeigs1 on 11/9/15.
 */


var
    canvas,
    renderingContext,
    width,
    height,

    charizard;

function main() {
    canvasSetup();
    document.body.appendChild(canvas);
    loadGraphics();
}

function canvasSetup() {

    canvas = document.createElement("canvas");
    canvas.style.border = "1px solid #ccc";

    canvas.width = 300;
    canvas.height = 500;

    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    charizard = new Image();
    charizard.src = "images/Idle1.png";
    charizard.onload = function () {
        renderingContext.fillStyle = "#70C5CF";
        renderingContext.fillRect(0, 0, 300, 500);
        renderingContext.drawImage(charizard, 10, 10)
    }
}

//$(function () {
//    var startBtn = "<div class='startGame' onclick='startGame()'> Play Game</div>";
//    $("#gamecanvas").append(startBtn);
//});
//
//function startGame() {
//    //beginning of game loop
//}
//
//$(function () {
//    var howToBtn = "<div class='howTo' onclick='howTo()'> How To Play</div>";
//    $(".startGame").append(howToBtn);
//});
//
//function howTo(){
//    //Instructions on how to play
//}