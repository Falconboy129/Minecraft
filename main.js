//const { fabric } = require("./fabric");
var canvas = new fabric.Canvas('myCanvas');
blockwidth = 30;
blockheight = 30;
playerx = 10;
playery = 10;
var playerobject = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject);
    });
}
function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        blockimageobject = Img;
        blockimageobject.scaleToWidth(blockwidth);
        blockimageobject.scaleToHeight(blockheight);
        blockimageobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypress = e.keyCode;
    if (keypress == '80' && e.shiftKey == true) {
        console.log("shift+p");
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10;
        document.getElementById("Currentwidth").innerHTML = blockwidth;
        document.getElementById("Currentheight").innerHTML = blockheight;
    }
    if (keypress == '77' && e.shiftKey == true) {
        console.log("shift+m");
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("Currentwidth").innerHTML = blockwidth;
        document.getElementById("Currentheight").innerHTML = blockheight;
    }
    if (keypress == '37') {
        left();
        console.log("left");
    }
    if (keypress == '38') {
        up();
        console.log("up");
    }
    if (keypress == '39') {
        right();
        console.log("right");
    }
    if (keypress == '40') {
        down();
        console.log("down");
    }
    if (keypress == '87') {
        console.log("w")
        newimage('wall.jpg');
    }
    if (keypress == '71') {
        console.log("g")
        newimage('ground.png');
    }
    if (keypress == '76') {
        console.log("l")
        newimage('light_green.png');
    }
    if (keypress == '84') {
        console.log("t")
        newimage('trunk.jpg');
    }
    if (keypress == '82') {
        console.log("r")
        newimage('roof.jpg');
    }
    if (keypress == '89') {
        console.log("y")
        newimage('yellow_wall.png');
    }
    if (keypress == '68') {
        console.log("d")
        newimage('dark_green.png');
    }
    if (keypress == '85') {
        console.log("u")
        newimage('unique.png');
    }
    if (keypress == '67') {
        console.log("c")
        newimage('cloud.jpg');
    }
}

function up() {
    if (playery > 0) {
        playery = playery - blockheight;
        canvas.remove(playerobject);
        player_update();
    }
}

function down() {
    if (playery < 500) {
        playery = playery + blockheight;
        canvas.remove(playerobject);
        player_update();
    }
}

function right() {
    if (playerx < 900) {
        playerx = playerx + blockwidth;
        canvas.remove(playerobject);
        player_update();
    }
}

function left() {
    if (playerx > 0) {
        playerx = playerx - blockwidth;
        canvas.remove(playerobject);
        player_update();
    }
}

