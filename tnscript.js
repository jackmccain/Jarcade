var character = document.getElementById("character");
var side = true;
var scoreElapsed = 0;
var score = 0;

document.getElementById("branchleft").classList.add("hidden");
document.getElementById("branchright").classList.add("hidden"); 

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
        character.style.left = "77px";
        side = true;
        character.classList.remove("animate");
    }
}



var branches = setInterval(function (){
  
    random = Math.floor(Math.random() * 2) + 1;
    console.log(random)
    document.getElementById("branchright").classList.remove("branchanimate");
    document.getElementById("branchleft").classList.remove("branchanimate");
    if (random === 1) {
        setTimeout(function(){ document.getElementById("branchright").classList.add("hidden");  }, 1000);
        document.getElementById("branchright").classList.remove("hidden");
        document.getElementById("branchright").classList.add("branchanimate");
    } else {
        setTimeout(function(){ document.getElementById("branchleft").classList.add("hidden");  }, 1000);
        document.getElementById("branchleft").classList.remove("hidden");
        document.getElementById("branchleft").classList.add("branchanimate");
    }
  

}, 1350);


var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let branchright = parseInt(window.getComputedStyle(document.getElementById("branchright")).getPropertyValue("top"));
    console.log(branchright);
    console.log(characterTop);
    let branchleft = parseInt(window.getComputedStyle(document.getElementById("branchleft")).getPropertyValue("top"));
    if (branchright > 400 && branchright > 440 && characterTop === 77) {
        clearInterval(branches);
       document.getElementById("branchright").classList.add("hidden");
       document.getElementById("btn").classList.remove("hidden")
       onGameEnd();
    }
    if (branchleft > 400 && branchleft > 440 && characterTop === 330) {
        clearInterval(branches);
       document.getElementById("branchleft").classList.add("hidden");
       document.getElementById("btn").classList.remove("hidden")
       onGameEnd();
    }
}, 10);
onGameStart();
