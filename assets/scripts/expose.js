// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //confetti
  const jsConfetti = new JSConfetti()

  const selectorHorns = document.getElementById("horn-select"); //selector element
  const selectedImage = document.querySelector("img"); //image representing the selected horn
  const selectedAudio = document.querySelector(".hidden"); //audio element
  const volumeIcon = document.querySelector("img[alt = 'Volume level 2']"); //volume icon
  const volumeSelector = document.querySelector("#volume"); //volume slider
  const playButton = document.querySelector("button");
  //print in console for debug
  console.log(selectedImage);
  console.log(selectedAudio);
  console.log(volumeIcon);
  console.log(volumeSelector);
  console.log(volumeSelector.value);
  console.log(playButton);

  //call functions when horn selector changed by user
  selectorHorns.addEventListener('change', (event) => {
    let selectedHorn = selectorHorns.value;
    selectedImage.src = selectHornImage(selectedHorn);
    selectedAudio.src = selectAudio(selectedHorn);
    //console.log(selectedAudio); //uncomment to debug selected audio file
  })

  //call functions when volume slider changed by user
  volumeSelector.addEventListener('input', (event) => {
    let selectedVol = volumeSelector.value;
    volumeIcon.src = selectVolume(selectedVol);
    selectedAudio.volume = selectedVol/100;
    //console.log(selectedAudio.volume); //uncomment to debug audio volue setting
  })

  playButton.addEventListener('click', (event) => {
    selectedAudio.play();
    if (selectorHorns.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  })

}

//function that return image source based off selected selector value
function selectHornImage(selectValue) {
  if (selectValue == "air-horn") {
    return "assets/images/air-horn.svg";
  }
  else if (selectValue == "car-horn") {
    return "assets/images/car-horn.svg";
  }
  else {
    return "assets/images/party-horn.svg";
  }
}
//function that return audio source based off selected selector value
function selectAudio(selectValue) {
  if (selectValue == "air-horn") {
    return "assets/audio/air-horn.mp3";
  }
  else if (selectValue == "car-horn") {
    return "assets/audio/car-horn.mp3";
  }
  else {
    return "assets/audio/party-horn.mp3";
  }
}
//function that return icon source based off selected audio level
function selectVolume(selectValue) {
  if (selectValue == 0) {
    return "assets/icons/volume-level-0.svg";
  }
  else if (selectValue < 33) {
    return "assets/icons/volume-level-1.svg";
  }
  else if (selectValue < 67) {
    return "assets/icons/volume-level-2.svg";
  }
  else {
    return "assets/icons/volume-level-3.svg";
  }
}