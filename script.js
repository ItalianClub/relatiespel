// script.js

// Dagelijkse opdrachten
const tasks = [
    { day: 1, title: "Reflectie op emoties ❤️", description: "Noteer drie momenten waarop jij sterke emoties hebt gevoeld deze week. 🥺 Bespreek samen hoe jullie die emoties beter hadden kunnen communiceren." },
    { day: 2, title: "Complimentendag 🌟", description: "Geef elkaar gedurende de dag drie oprechte complimenten. Noteer hoe dit voelt. ❤️" },
    { day: 3, title: "Triggers ontdekken 🤔", description: "Bespreek situaties die vaak frustraties of irritaties oproepen. Wat kun je herkennen in jezelf of de ander? 😡" },
    { day: 4, title: "Het Time-Out Plan 🔄", description: "Maak samen afspraken over hoe je een 'time-out' kunt nemen bij een conflict. Welke signalen gebruik je? 🛑" },
    // Voeg hier meer dagen toe...
];

// Huidige status
let currentDay = 1;
let progress = [];
let totalScore = 0;

// Elementen selecteren
const dayNumber = document.getElementById("day-number");
const dailyTask = document.getElementById("daily-task");
const nextBtn = document.getElementById("next-btn");
const reflection = document.createElement("textarea");
reflection.setAttribute("placeholder", "Wat voelde je tijdens de opdracht? ❤️");
reflection.style.width = "100%";
reflection.style.height = "100px";
const feedback = document.createElement("p");

// Opdracht laden
function loadTask() {
    const task = tasks.find(t => t.day === currentDay);
    if (!task) return;

    dayNumber.textContent = currentDay;
    dailyTask.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.description}</p>
    `;
    dailyTask.appendChild(reflection);
    dailyTask.appendChild(feedback);

    if (currentDay < tasks.length) {
        nextBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.add("hidden");
        dailyTask.innerHTML += "<p>Gefeliciteerd! Jullie hebben het hele spel voltooid! 🎉❤️</p>";
        showFinalScore();
    }
}

// Volgende dag
nextBtn.addEventListener("click", () => {
    const reflectionText = reflection.value.trim();
    if (!reflectionText) {
        feedback.textContent = "Vul je reflectie in voordat je doorgaat! 🛑";
        feedback.style.color = "red";
        return;
    }
    progress.push({ day: currentDay, reflection: reflectionText, score: Math.random() * 10 + 1 }); // Simuleer score
    totalScore += progress[progress.length - 1].score;
    feedback.textContent = "Goed gedaan! Jullie werken aan jullie relatie! 🌟🚀";
    feedback.style.color = "green";

    currentDay++;
    reflection.value = "";
    loadTask();
});

// Eindscore tonen
function showFinalScore() {
    dailyTask.innerHTML = `
        <h2>Eindrapport 🌟</h2>
        <p>Jullie hebben ${progress.length} van de 14 opdrachten voltooid. ✅</p>
        <p>Gemiddelde score: ${(totalScore / progress.length).toFixed(2)} 🌟.</p>
        <p>Ga zo door om jullie relatie sterker te maken! ❤️</p>
    `;
}

// Start spel
loadTask();
