let numberOfDrumButtons = document.querySelectorAll(".drum").length;

document.querySelector(".random-beat").addEventListener("click", function () {
  this.classList.add("pressed-beat-generator");
  let numberOfRandomBeat = 30;
  let randomPlayer = setInterval(() => {
    const randomNoteArrayIndex = Math.floor(
      Math.random() * (numberOfDrumButtons + 1)
    );
    const selectedNote =
      document.querySelectorAll("button")[randomNoteArrayIndex];

    makeSound(selectedNote.innerHTML);
    buttonAnimation(selectedNote.innerHTML);

    numberOfRandomBeat--;

    if (numberOfRandomBeat === 0) {
      clearInterval(randomPlayer);
      this.classList.remove("pressed-beat-generator");
    }
  }, 120);
});

for (let i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("mouseover", function () {
      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/w.mp3"
      );
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/a.mp3"
      );
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/s.mp3"
      );
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/d.mp3"
      );
      tom4.play();
      break;

    case "j":
      let snare = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/j.mp3"
      );
      snare.play();
      break;

    case "k":
      let crash = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/k.mp3"
      );
      crash.play();
      break;

    case "l":
      let kick = new Audio(
        "https://cdn.glitch.global/8075e640-598c-43fe-9ffd-f3766cecb71d/l.mp3"
      );
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
