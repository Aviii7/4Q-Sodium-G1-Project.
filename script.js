const catto = document.getElementById("catto");
const obstacles = document.getElementById("obstacles");

function jump() {
  if (catto.classList != "jump") {
    catto.classList.add("jump");

    setTimeout(function () {
      catto.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current catto Y position
  let cattoTop = parseInt(window.getComputedStyle(catto).getPropertyValue("top"));

  // get current obstacles X position
  let obstaclesLeft = parseInt(
    window.getComputedStyle(obstacles).getPropertyValue("left")
  );

  // detect collision
  if (cattoLeft < 50 && obstaclesLeft > 0 && cattoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
