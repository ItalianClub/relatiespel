document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is volledig geladen!");

    // Selecteer de elementen
    const dayNumber = document.getElementById("day-number");
    const dailyTask = document.getElementById("daily-task");
    const feedbackSection = document.getElementById("feedback-section");
    const nextBtn = document.getElementById("next-btn");
    const startBtn = document.getElementById("start-btn");
    const progressBar = document.getElementById("progress-bar");

    // 14 dagelijkse opdrachten
    const tasks = [
        { day: 1, title: "Reflectie op emoties ❤️", description: "Noteer drie momenten waarop jij sterke emoties hebt gevoeld deze week. Bespreek samen hoe jullie die emoties beter hadden kunnen communiceren." },
        { day: 2, title: "Complimentendag 🌟", description: "Geef elkaar gedurende de dag drie oprechte complimenten. Noteer hoe dit voelt." },
        { day: 3, title: "Triggers ontdekken 🤔", description: "Bespreek situaties die vaak frustraties oproepen. Wat kun je herkennen in jezelf of de ander?" },
        { day: 4, title: "Time-Out Plan 🔄", description: "Maak afspraken over hoe je een 'time-out' kunt nemen bij een conflict. Welke signalen gebruik je?" },
        { day: 5, title: "Dankbaarheid 🥰", description: "Deel iets waarvoor je dankbaar bent in je partner. Schrijf het op en lees het hardop voor." },
        { day: 6, title: "Wat betekent harmonie? 🤝", description: "Definieer samen wat harmonie betekent in jullie relatie. Noteer hoe jullie dit kunnen bereiken." },
        { day: 7, title: "Emotie-Charades 🎭", description: "Beeld emoties uit (zoals blij, boos, zenuwachtig). Raad samen wat deze emoties zijn." },
        { day: 8, title: "Wat zeggen woorden? 🗣️", description: "Bespreek hoe jullie woordkeuze je emoties kan beïnvloeden. Wat kun je anders doen?" },
        { day: 9, title: "Non-verbale signalen 👀", description: "Herken elkaars lichaamstaal. Welke signalen sturen jullie onbewust uit?" },
        { day: 10, title: "Vreugde delen 🎉", description: "Deel iets dat je blij maakt en kijk hoe je partner reageert." },
        { day: 11, title: "Oude conflicten herzien 🔁", description: "Bekijk een oud conflict. Hoe zou je het nu anders aanpakken?" },
        { day: 12, title: "Veiligheid creëren 🛡️", description: "Wat kun je doen om een veilig gevoel te creëren voor elkaar in moeilijke situaties?" },
        { day: 13, title: "Jouw liefdestaal ❤️", description: "Welke manier van liefde tonen waardeer je het meest? Bespreek dit samen." },
        { day: 14, title: "Vier jullie groei 🎊", description: "Wat hebben jullie geleerd in deze 14 dagen? Vier deze successen samen!" },
    ];

    let currentDay = 0; // Huidige dag

    /**
     * Laad de opdracht voor de huidige dag.
     */
    function loadTask() {
        const task = tasks[currentDay % tasks.length]; // Gebruik modulo om onbeperkt te herhalen
        dayNumber.textContent = currentDay % tasks.length + 1;
        dailyTask.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
        `;
        feedbackSection.innerHTML = ""; // Verwijder eerdere feedback
        updateProgress();
    }

    /**
     * Toon uitleg en feedback na elke dag.
     */
    function showFeedback() {
        const feedbackMessages = [
            "Goed gedaan! Reflectie op emoties helpt jullie om meer begrip voor elkaar te hebben.",
            "Complimenten versterken de band en laten zien dat je de ander waardeert.",
            "Het herkennen van triggers kan toekomstige conflicten voorkomen.",
            "Een Time-Out Plan geeft structuur en veiligheid in moeilijke situaties.",
            "Dankbaarheid delen versterkt het gevoel van verbinding.",
            "Harmonie creëren begint met begrijpen wat het voor jullie betekent.",
            "Non-verbale signalen begrijpen helpt misverstanden te voorkomen.",
        ];
        const feedback = feedbackMessages[currentDay % feedbackMessages.length] || "Jullie doen het geweldig! Ga zo door.";
        feedbackSection.innerHTML = `<p><strong>Feedback:</strong> ${feedback}</p>`;
    }

    /**
     * Werk de voortgangsbalk bij.
     */
    function updateProgress() {
        const progressPercentage = ((currentDay % tasks.length + 1) / tasks.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    /**
     * Start het spel.
     */
    startBtn.addEventListener("click", () => {
        startBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        loadTask();
    });

    /**
     * Ga naar de volgende dag.
     */
    nextBtn.addEventListener("click", () => {
        showFeedback();
        currentDay++;
        setTimeout(() => {
            loadTask();
        }, 2000); // Wacht 2 seconden voordat de volgende taak wordt geladen
    });

    // Laad de startknop in eerste instantie
    loadTask();
});
