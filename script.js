document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is volledig geladen!");

    // Elementen selecteren
    const dayNumber = document.getElementById("day-number");
    const dailyTask = document.getElementById("daily-task");
    const nextBtn = document.getElementById("next-btn");
    const startBtn = document.getElementById("start-btn");
    const progressBar = document.getElementById("progress-bar");

    // Taken array
    const tasks = [
        { day: 1, title: "Reflectie op emoties ❤️", description: "Noteer drie momenten waarop jij sterke emoties hebt gevoeld deze week. 🥺 Bespreek samen hoe jullie die emoties beter hadden kunnen communiceren." },
        { day: 2, title: "Complimentendag 🌟", description: "Geef elkaar gedurende de dag drie oprechte complimenten. Noteer hoe dit voelt. ❤️" },
        { day: 3, title: "Triggers ontdekken 🤔", description: "Bespreek situaties die vaak frustraties of irritaties oproepen. Wat kun je herkennen in jezelf of de ander? 😡" },
        { day: 4, title: "Het Time-Out Plan 🔄", description: "Maak samen afspraken over hoe je een 'time-out' kunt nemen bij een conflict. Welke signalen gebruik je? 🛑" },
        { day: 5, title: "Een moment van dankbaarheid 🥰", description: "Deel iets waarvoor je dankbaar bent in je partner. Schrijf het op en lees het hardop voor." },
        { day: 6, title: "Wat betekent harmonie? 🤝", description: "Definieer samen wat harmonie betekent in jullie relatie. Noteer hoe jullie dit kunnen bereiken." },
        { day: 7, title: "Emotie-Charades 🎭", description: "Beeld emoties uit (zoals blij, boos, zenuwachtig). Raad samen wat deze emoties zijn." }
    ];

    // Voortgang bijhouden
    let currentDay = parseInt(localStorage.getItem("currentDay")) || 0;

    /**
     * Update de voortgangsbalk.
     */
    function updateProgress() {
        const progressPercentage = ((currentDay + 1) / tasks.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    /**
     * Laad de opdracht van de huidige dag.
     */
    function loadTask() {
        const task = tasks[currentDay];

        if (!task) {
            console.warn("Geen opdracht gevonden. Het spel is voltooid!");
            dailyTask.innerHTML = `<p>Gefeliciteerd! Jullie hebben het hele spel voltooid! 🎉❤️</p>`;
            nextBtn.classList.add("hidden");
            return;
        }

        dayNumber.textContent = currentDay + 1;
        dailyTask.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
        `;

        updateProgress();

        // Knop aanpassen voor laatste dag
        nextBtn.textContent = (currentDay + 1 === tasks.length) ? "Afronden 🎉" : "Volgende Dag ➡️";
        nextBtn.classList.remove("hidden");
    }

    /**
     * Sla de huidige voortgang op in localStorage.
     */
    function saveProgress() {
        localStorage.setItem("currentDay", currentDay);
    }

    /**
     * Start het spel door de eerste dag te laden.
     */
    startBtn.addEventListener("click", () => {
        startBtn.classList.add("hidden");
        currentDay = 0;
        nextBtn.classList.remove("hidden");
        loadTask();
        saveProgress();
    });

    /**
     * Ga naar de volgende dag en laad de volgende opdracht.
     */
    nextBtn.addEventListener("click", () => {
        if (currentDay < tasks.length - 1) {
            currentDay++;
            loadTask();
            saveProgress();
        } else {
            // Einde van het spel
            dailyTask.innerHTML = `<p>Gefeliciteerd! Jullie hebben het hele spel voltooid! 🎉❤️</p>`;
            nextBtn.classList.add("hidden");
        }
    });

    // Laad voortgang bij het herstarten van het spel
    if (currentDay > 0) {
        startBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        loadTask();
    }
});
