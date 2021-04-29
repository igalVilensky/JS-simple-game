const character = document.querySelector("#character");
const block = document.querySelector("#block");

function jump() {
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}
