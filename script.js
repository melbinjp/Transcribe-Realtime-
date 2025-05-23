let recognition; // SpeechRecognition instance
let transcript = ''; // Store the full transcription
let startTime; // Start time for timestamps

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const downloadBtn = document.getElementById('download-btn');
const languageSelect = document.getElementById('language-select');
const transcriptionBox = document.getElementById('transcription');

// Check browser compatibility
if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Your browser does not support Speech Recognition. Please use Google Chrome.');
} else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // Initialize SpeechRecognition
    recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep listening until explicitly stopped
    recognition.interimResults = true; // Show partial results as user speaks

    // Handle speech results
    recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                const currentTime = ((new Date().getTime() - startTime) / 1000).toFixed(2);
                transcript += `[${formatTime(currentTime)}] ${event.results[i][0].transcript.trim()}\n`;
            } else {
                interimTranscript += event.results[i][0].transcript.trim();
            }
        }
        transcriptionBox.value = transcript + interimTranscript; // Display both final and interim results
    };

    // Handle errors
    recognition.onerror = (event) => {
        console.error('Speech Recognition Error:', event.error);
        alert(`Error occurred in speech recognition: ${event.error}`);
        stopTranscription();
    };

    // Handle end of recognition
    recognition.onend = () => {
        console.log('Speech recognition stopped.');
        stopTranscription();
    };
}

// Format time in HH:mm:ss format
function formatTime(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

// Start transcription
function startTranscription() {
    transcriptionBox.classList.add('transcribing'); // Add class for visual feedback
    transcript = ''; // Reset transcript
    transcriptionBox.value = ''; // Clear previous transcription
    startTime = new Date().getTime(); // Record start time

    const selectedLanguage = languageSelect.value; // Get selected language
    recognition.lang = selectedLanguage; // Set language for recognition

    recognition.start();

    startBtn.disabled = true;
    stopBtn.disabled = false;

    console.log(`Started transcription in ${selectedLanguage}`);
}

// Stop transcription
function stopTranscription() {
    transcriptionBox.classList.remove('transcribing'); // Remove class for visual feedback
    recognition.stop();

    startBtn.disabled = false;
    stopBtn.disabled = true;

    downloadBtn.disabled = false; // Enable download button after stopping

    console.log('Stopped transcription.');
}

// Download transcription as SRT file
function downloadSRT() {
    const srtContent =
        transcript.split('\n')
            .map((line, index) => `${index + 1}\n${line.replace('[', '').replace(']', '')}\n`)
            .join('\n');

    const blob = new Blob([srtContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcription.srt';
    a.click();

    URL.revokeObjectURL(url);
}

// Event listeners for buttons
startBtn.addEventListener('click', startTranscription);
stopBtn.addEventListener('click', stopTranscription);
downloadBtn.addEventListener('click', downloadSRT);
