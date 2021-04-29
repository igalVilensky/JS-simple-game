const character = document.querySelector("#character");
const block = document.querySelector("#block");
const body = document.querySelector("body");

let StandPoint = 0;

function jumpKey() {
  StandPoint = 100;
  character.style.top = StandPoint + "px";
  setTimeout(() => {
    character.style.top = "100px";
  }, 200);

  setTimeout(() => {
    character.style.top = "150px";
  }, 500);
}

function move(e) {
  if (e.code == "Space") jumpKey();
  console.log(e.code);
}

function jump() {
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

const dead = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";

    alert(`Game over! 

     Please refresh the page to continue.`);
  }
}, 10);

body.addEventListener("keypress", move);
