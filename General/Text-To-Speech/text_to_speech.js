// initializing the speech synthesis object
const speechSynthesis = window.speechSynthesis;
let voicesList;

const hear_text_button = document.getElementById('hear_text');

// update the rate, volume and pitch value
const updateValues = (val, elementId) => {
    document.getElementById(elementId).innerHTML = val;
}

// populate the available voices from window

speechSynthesis.onvoiceschanged = () => {
    voicesList = speechSynthesis.getVoices();
    const select = document.createElement("select");
    select.classList.add = 'form-select';
    for (let voice of voicesList) {
        const option = document.createElement("option");
        option.value = voice.voiceURI;
        option.text = voice.name;
        select.add(option);
    }
    document.getElementById('voices-select-dropdown').appendChild(select);
};

hear_text_button.addEventListener('click', () => {
    const utterText = new SpeechSynthesisUtterance('how you doin');
    const selectedVoice = document.getElementById('voices-select-dropdown').childNodes[0].value;  
    for (let voice of voicesList) {
        if (voice.voiceURI === selectedVoice) {
            utterText.voice = voice;
        }
    }

    utterText.volume = +document.getElementById('volume').value; 
    utterText.rate = +document.getElementById('rate').value;
    utterText.pitch = +document.getElementById('pitch').value; 
    speechSynthesis.speak(utterText);
});