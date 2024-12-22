// script.js

// Spellen data
const games = {
    charades: {
        title: "Emotie-Charades",
        steps: [
            "Blij maar zenuwachtig",
            "Gefrustreerd door de vaatwasser",
            "Boos maar stil",
            "Ongemakkelijk blij",
            "Heel enthousiast over een idee"
        ]
    },
    detective: {
        title: "De Emotie-Detective",
        instructions: [
            "Observeer emoties van je partner en maak aantekeningen.",
            "Bespreek samen wat je hebt geobserveerd."
        ]
    },
    "body-language": {
        title: "Het Lichaamstaal-Spel",
        steps: [
            "Handen in je zij",
            "Je armen over elkaar",
            "Je wenkbrauwen fronsen",
            "Je hoofd schudden",
            "Met je vingers tikken"
        ]
    }
};

// Elementen selecteren
const menu = document.getElementById("menu");
const gameSection = document.getElementById("game");
const gameTitle = document.getElementById("game-title");
const gameContent = document.getElementById("game-content");
const backBtn = document.getElementById("back-btn");

// Actieve game status
let currentGame = null;
let currentStep = 0;

// Spel starten
function startGame(gameKey) {
    currentGame = games[gameKey];
    currentStep = 0;

    // Verberg menu en toon spel
    menu.classList.add("hidden");
    gameSection.classList.remove("hidden");
    backBtn.classList.remove("hidden");

    // Toon spel inhoud
    displayGame();
}

// Spelinhoud tonen
function displayGame() {
    gameTitle.textContent = currentGame.title;

    if (currentGame.steps) {
        // Voor spellen met stappen (charades, body-language)
        if (currentStep < currentGame.steps.length) {
            gameContent.innerHTML = `
                <p>${currentGame.steps[currentStep]}</p>
                <button class="btn" onclick="nextStep()">Volgende</button>
            `;
        } else {
            gameContent.innerHTML = "<p>Gefeliciteerd, je hebt het spel voltooid!</p>";
        }
    } else if (currentGame.instructions) {
        // Voor spellen met instructies (detective)
        gameContent.innerHTML = `
            <textarea rows="10" placeholder="Maak hier je aantekeningen..." style="width: 100%; padding: 10px;"></textarea>
            <p>${currentGame.instructions.join(" ")}</p>
        `;
    }
}

// Volgende stap
function nextStep() {
    currentStep++;
    displayGame();
}

// Terug naar menu
function goBack() {
    currentGame = null;
    currentStep = 0;

    // Verberg spel en toon menu
    gameSection.classList.add("hidden");
    menu.classList.remove("hidden");
}
