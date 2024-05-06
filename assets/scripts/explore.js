// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // function that generates voice options
  function generateVoiceList() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');
    for (let i = 0; i < voices.length; i++) {
      const voice = voices[i];
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  // event listener to generate voices on page load
  window.onload = function () {
      generateVoiceList();
  };
  // event listener to generate voices list when voices change
  speechSynthesis.onvoiceschanged = function () {
      generateVoiceList();
  };

  // function to speak text
  function speakText() {
      const textToSpeak = document.getElementById('text-to-speak').value;
      const voiceSelect = document.getElementById('voice-select');
      const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const voices = speechSynthesis.getVoices();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      for (const voice of voices) {
        if (voice.name === selectedVoice) {
            utterance.voice = voice;
            break;
        }
      }
      utterance.onstart = function () {
          document.querySelector('img').src = 'assets/images/smiling-open.png';
      };
      utterance.onend = function () {
          document.querySelector('img').src = 'assets/images/smiling.png';
      };
      speechSynthesis.speak(utterance);
  }

  // Event listener for speak button
  document.querySelector('button').addEventListener('click', function () {
      speakText();
  });
}