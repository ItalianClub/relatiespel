// Dagelijkse opdrachten
const tasks = [
    { day: 1, title: "Reflectie op emoties ❤️", description: "Noteer drie momenten waarop jij sterke emoties hebt gevoeld deze week. 🥺 Bespreek samen hoe jullie die emoties beter hadden kunnen communiceren." },
    { day: 2, title: "Complimentendag 🌟", description: "Geef elkaar gedurende de dag drie oprechte complimenten. Noteer hoe dit voelt. ❤️" },
    { day: 3, title: "Triggers ontdekken 🤔", description: "Bespreek situaties die vaak frustraties of irritaties oproepen. Wat kun je herkennen in jezelf of de ander? 😡" },
    { day: 4, title: "Het Time-Out Plan 🔄", description: "Maak samen afspraken over hoe je een 'time-out' kunt nemen bij een conflict. Welke signalen gebruik je? 🛑" },
    { day: 5, title: "Een moment van dankbaarheid 🥰", description: "Deel iets waarvoor je dankbaar bent in je partner. Schrijf het op en lees het hardop voor." },
    { day: 6, title: "Wat betekent harmonie? 🤝", description: "Definieer samen wat harmonie betekent in jullie relatie. Noteer hoe jullie dit kunnen bereiken." },
    { day: 7, title: "Emotie-Charades 🎭", description: "Beeld emoties uit (zoals blij, boos, zenuwachtig). Raad samen wat deze emoties zijn." },
    // Voeg hier meer dagen toe...
];

// Huidige status
let currentDay = 1;

// Elementen selecteren
const dayNumber = document.getElementById("day-number");
const dailyTask = document.getElementById("daily-task");
const nextBtn = document.getElementById("next-btn");

// Opdracht laden
function loadTask() {
    // Haal de huidige opdracht op
    const task = tasks.find(t => t.day === currentDay);
    if (!task) return;

    // Vul de daginformatie
    dayNumber.textContent = currentDay;
    dailyTask.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.description}</p>
    `;

    // Toon de "Volgende Dag" knop alleen als er een volgende dag is
    if (currentDay < tasks.length) {
        nextBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.add("hidden");
        dailyTask.innerHTML += `<p>Gefeliciteerd! Jullie hebben het hele spel voltooid! 🎉❤️</p>`;
    }
}

// Volgende dag
nextBtn.addEventListener("click", () => {
    // Verhoog de dag en laad de volgende opdracht
    currentDay++;
    loadTask();
});

// Start het spel
loadTask();
