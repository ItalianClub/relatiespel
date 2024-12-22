// script.js

// Beschikbare opdrachten
const tasks = {
    charades: {
        title: "Emotie-Charades",
        instructions: [
            "Beeld een emotie uit die je partner moet raden.",
            "Klik op 'Volgende Stap' om een nieuwe emotie te krijgen.",
            "Gefeliciteerd, jullie hebben alle emoties gespeeld!"
        ],
        steps: [
            "Blij maar zenuwachtig",
            "Boos maar stil",
            "Heel enthousiast over een idee"
        ],
    },
    detective: {
        title: "De Emotie-Detective",
        instructions: [
            "Observeer de emoties van je partner en maak een notitie.",
            "Bespreek aan het einde van de dag je observaties.",
            "Gefeliciteerd, jullie zijn nu emotiedetectives!"
        ],
        steps: ["Observeer je partner", "Maak aantekeningen", "Bespreek samen"],
    },
    "body-language": {
        title: "Het Lichaamstaal-Spel",
        instructions: [
            "Boots het typische gedrag van je partner na.",
            "Laat je partner raden wat je probeert uit te beelden.",
            "Gefeliciteerd, jullie kennen elkaars signalen beter!"
        ],
        steps: ["Kies een houding", "Doe deze na", "Bespreek samen"],
    },
};

// HTML-elementen
const gameSelect = document.getElementById("game-select");
const startBtn = document.getElementById("start-btn");
const taskDisplay = document.getElementById("task-display");
const taskTitle = document.getElementById("task-title");
const taskInstructions = document.getElementById("task-instructions");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let currentTask = null;
let currentStep = 0;

// Start de gekozen opdracht
startBtn.addEventListener("click", () => {
    const selectedTask = gameSelect.value;
    currentTask = tasks[selectedTask];
    currentStep = 0;
    displayTask();
});

// Toon de opdracht
function displayTask() {
    if (!currentTask) return;

    taskDisplay.classList.remove("hidden");
    taskTitle.textContent = currentTask.title;
    taskInstructions.textContent = currentTask.instructions[currentStep];

    // Knoppen logica
    if (currentStep < currentTask.steps.length - 1) {
        nextBtn.classList.remove("hidden");
        restartBtn.classList.add("hidden");
    } else {
        nextBtn.classList.add("hidden");
        restartBtn.classList.remove("hidden");
    }
}

// Volgende stap in de opdracht
nextBtn.addEventListener("click", () => {
    if (currentStep < currentTask.steps.length - 1) {
        currentStep++;
        taskInstructions.textContent = currentTask.instructions[currentStep];
    } else {
        nextBtn.classList.add("hidden");
        restartBtn.classList.remove("hidden");
    }
});

// Opnieuw starten
restartBtn.addEventListener("click", () => {
    taskDisplay.classList.add("hidden");
    currentTask = null;
    currentStep = 0;
});
