const character = document.querySelector("#character");
const block = document.querySelector("#block");

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

    alert("Game over!");
  }
}, 10);
