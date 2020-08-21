var character = document.getElementById("character");
var side = true;

function jump() {
    if (side === true) {
        jumpleft();
    } else {
        jumpright();
    }


}

function jumpleft() {
    if (character.classList != "animate") {
        character.classList.add("animate")
        character.style.backgroundImage = "url('wall\ 2.png')";
        character.style.left = "330px";
        side = false;
        character.classList.remove("animate2")
    }
}

function jumpright() {
    if (character.classList != "animate2") {
        character.classList.add("animate2")
        character.style.backgroundImage = "url('wall.png')";
        character.style.left = "80px";
        side = true;
        character.classList.remove("animate")
    }
}

var branchright = document.getElementById("branchright");
var branchleft = document.getElementById("branchleft");
var random;

setInterval(function branch() {
    random = Math.floor(Math.random() * 2) + 1;
    if (random === 1) {
        branchright.classList.add("branchanimate")
    } else {
        branchleft.classList.add("branchanimate")
    }

}, 3000);

branch();