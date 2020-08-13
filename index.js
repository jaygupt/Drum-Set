var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonLetter = this.innerHTML;
    var audio;

    switch (buttonLetter) {
      case "w":
        audio = new Audio("sounds/tom-1.mp3");
        break;
      case "a":
        audio = new Audio("sounds/tom-2.mp3");
        break;
      case "s":
        audio = new Audio("sounds/tom-3.mp3");
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3");
        break;
      case "j":
        audio = new Audio("sounds/snare.mp3");
        break;
      case "k":
        audio = new Audio("sounds/crash.mp3");
        break;
      case "l":
        audio = new Audio("sounds/kick-bass.mp3");
        break;
      default:
        alert("Error.");
        console.log(buttonLetter);
        break;
    }

    audio.play();

  });
}

// var audio = new Audio("sounds/crash.mp3");
// audio.play();
