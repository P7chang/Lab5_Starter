// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectorHorns = document.getElementById("horn-select"); //selector element
  const selectedImage = document.querySelector("img"); //image representing the selected horn
  console.log(selectedImage); //print in console for debug
  selectorHorns.addEventListener('change', (event) => { //call function when selector changed by user
    selectedImage.src = selectHornImage(selectorHorns.value)
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