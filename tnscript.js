var character = document.getElementById("character");
var side = true;
var scoreElapsed = 0;
var score = 0;

function onGameStart(){
    var gameStatus = true
    start();
}
function onGameEnd(){
    gameStatus = false
    stop();
}

function start() {
    score = setInterval(function(){
        scoreElapsed += 1;
         document.getElementById("time").innerText = scoreElapsed;
    }, 10) ;

}
function stop() {
    clearInterval(score);
}

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
        character.classList.remove("animate");
    }
}

var branchright;
var branchleft;
var random;

setInterval(function branch() {
  
    random = Math.floor(Math.random() * 2) + 1;
    console.log(random)
    if (random === 1) {
        document.getElementById("branchright").classList.add("branchanimate");
    } else {
        document.getElementById("branchleft").classList.add("branchanimate");
    }

}, 3000);
onGameStart();
branch();
