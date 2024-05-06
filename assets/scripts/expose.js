// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectorHorns = document.getElementById("horn-select"); //selector element
  const selectedImage = document.querySelector("img"); //image representing the selected horn
  const selectedAudio = document.querySelector(".hidden"); //audio element
  //print in console for debug
  console.log(selectedImage);
  console.log(selectedAudio);

  selectorHorns.addEventListener('change', (event) => { //call function when selector changed by user
    let selectedHorn = selectorHorns.value;
    selectedImage.src = selectHornImage(selectedHorn);
    selectedAudio.src = selectAudio(selectedHorn);
    //console.log(selectedAudio); //uncomment to debug selected audio file
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