var character = document.getElementById("character");
var block = document.getElementById("block");

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        jump();
    }
}

var jumps = 0;


function jump() {
    if (document.getElementById("character").classList.contains("hidden")) {} else {
        jumps++;
        document.getElementById("score").innerHTML = jumps;
    }

    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500)
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 40 && blockLeft > -60 && characterTop >= 235) {
        block.style.animation = "none";
        block.style.display = "none";
        document.getElementById("character").classList.add("hidden");
        document.getElementById("block").classList.add("hidden");
        document.getElementById("btn").classList.remove("hidden");
    }
}, 10);