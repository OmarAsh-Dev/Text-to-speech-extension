let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let rateInput = document.getElementById("rate");
let rateValue = document.getElementById("rate-value");
let stopButton = document.getElementById("stop-button");


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

rateInput.addEventListener("input", () => {
    speech.rate = rateInput.value;
    rateValue.textContent = rateInput.value;
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


stopButton.addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });
