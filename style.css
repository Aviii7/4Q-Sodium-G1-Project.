const catto = document.getElementById("catto");
const obstacles = document.getElementById("obstacles");
function jump() {
    if (catto.classList != "jump")
    catto.classList.add("jump");
    setTimeout(function () {
        catto.classList.remove("jump");
    }, 300);
}
let isAlive = setInterval(function () {
    let cattoTop = parseInt(window.getComputedStyle(catto).getPropertyValue("top"));
    let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
    if (obstacles < 50 && cactusLeft > 0 && cattoTop >= 140) {
        alert("Game Over!");
    }
}, 10);
document.addEventListener("keydown", function (event) {
    jump();
});
