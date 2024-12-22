document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is volledig geladen!");

    // Selecteer de elementen
    const dayNumber = document.getElementById("day-number");
    const dailyTask = document.getElementById("daily-task");
    const feedbackSection = document.getElementById("feedback-section");
    const rewardSection = document.getElementById("reward-section");
    const nextBtn = document.getElementById("next-btn");
    const startBtn = document.getElementById("start-btn");
    const progressBar = document.getElementById("progress-bar");

    // Taken en voortgang
    const tasks = [
        { day: 1, title: "Reflectie op emoties ❤️", description: "Noteer drie momenten waarop jij sterke emoties hebt gevoeld." },
        { day: 2, title: "Complimentendag 🌟", description: "Geef elkaar gedurende de dag drie oprechte complimenten." },
        { day: 3, title: "Triggers ontdekken 🤔", description: "Bespreek situaties die vaak frustraties oproepen." },
        { day: 4, title: "Time-Out Plan 🔄", description: "Maak afspraken over hoe je een 'time-out' kunt nemen bij een conflict." },
        { day: 5, title: "Dankbaarheid 🥰", description: "Deel iets waarvoor je dankbaar bent in je partner." },
        { day: 6, title: "Wat betekent harmonie? 🤝", description: "Definieer samen wat harmonie betekent in jullie relatie." },
        { day: 7, title: "Emotie-Charades 🎭", description: "Beeld emoties uit (zoals blij, boos, zenuwachtig)." },
        { day: 8, title: "Lichaamstaal begrijpen 👀", description: "Herken elkaars lichaamstaal en bespreek wat dit betekent." },
        { day: 9, title: "Conflict reviseren 🔁", description: "Bespreek een oud conflict en hoe jullie het nu zouden oplossen." },
        { day: 10, title: "Samen vieren 🎉", description: "Benoem samen jullie belangrijkste groei tot nu toe." },
        { day: 11, title: "Creativiteit delen 🎨", description: "Maak samen een tekening of schrijf een gedicht." },
        { day: 12, title: "Toekomst dromen ✨", description: "Bespreek jullie dromen voor de toekomst." },
        { day: 13, title: "Zelfreflectie 📖", description: "Wat heb je geleerd over jezelf en je partner?" },
        { day: 14, title: "Slotceremonie 🎊", description: "Vier jullie succes en benoem hoe jullie samen verder willen groeien." },
    ];

    let currentDay = 0;

    /**
     * Update de voortgangsbalk.
     */
    function updateProgress() {
        const progressPercentage = ((currentDay + 1) / tasks.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    /**
     * Toon feedback en beloningen.
     */
    function showFeedback() {
        feedbackSection.innerHTML = `<p><strong>Feedback:</strong> Jullie doen het geweldig! Ga zo door. 💪</p>`;
        feedbackSection.classList.remove("hidden");

        if ((currentDay + 1) % 7 === 0) {
            rewardSection.classList.remove("hidden");
        } else {
            rewardSection.classList.add("hidden");
        }
    }

    /**
     * Laad de taak van de dag.
     */
    function loadTask() {
        const task = tasks[currentDay % tasks.length];
        dayNumber.textContent = currentDay % tasks.length + 1;
        dailyTask.innerHTML = `<h2>${task.title}</h2><p>${task.description}</p>`;
        updateProgress();
        feedbackSection.classList.add("hidden");
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
        }, 2000); // Wacht 2 seconden
    });

    // Begin met het laden van de eerste taak
    loadTask();
});
