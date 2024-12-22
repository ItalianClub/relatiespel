// script.js

// Array met emoties
const emotions = [
    "Blij maar zenuwachtig",
    "Gefrustreerd door de vaatwasser",
    "Boos maar stil",
    "Ongemakkelijk blij",
    "Ontroerd door een lief gebaar",
    "Verward over een vraag",
    "Heel enthousiast over een idee",
];

let currentEmotionIndex = 0;

// Selectie van HTML-elementen
const startBtn = document.getElementById("start-btn");
const emotionDisplay = document.getElementById("emotion-display");
const emotionText = document.getElementById("emotion");
const nextEmotionBtn = document.getElementById("next-emotion");
const resultDisplay = document.getElementById("result-display");
const resultText = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

// Start het spel
startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    emotionDisplay.classList.remove("hidden");
    showEmotion();
});

// Toon de huidige emotie
function showEmotion() {
    if (currentEmotionIndex < emotions.length) {
        emotionText.textContent = emotions[currentEmotionIndex];
    } else {
        endGame();
    }
}

// Naar de volgende emotie
nextEmotionBtn.addEventListener("click", () => {
    currentEmotionIndex++;
    showEmotion();
});

// Spel beëindigen
function endGame() {
    emotionDisplay.classList.add("hidden");
    resultDisplay.classList.remove("hidden");
    resultText.textContent = "Goed gedaan! Jullie hebben alle emoties gespeeld!";
}

// Opnieuw starten
restartBtn.addEventListener("click", () => {
    currentEmotionIndex = 0;
    resultDisplay.classList.add("hidden");
    startBtn.classList.remove("hidden");
});
