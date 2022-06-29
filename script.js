const dinosaur = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dinosaur.classList != "jump") {
        dinosaur.classList.add("jump")
    }
    setTimeout(function() {
        dinosaur.classList.remove("jump")
    }, 1000)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("GAME OVER!");
    }
}, 10)