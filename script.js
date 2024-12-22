document.addEventListener("DOMContentLoaded", () => {
    const dayNumber = document.getElementById("day-number");
    const dailyTask = document.getElementById("daily-task");
    const checkInBtn = document.getElementById("check-in-btn");
    const nextBtn = document.getElementById("next-btn");
    const feedbackSection = document.getElementById("feedback-section");
    const checkInText = document.getElementById("check-in-text");
    const choiceContainer = document.getElementById("choice-container");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");

    const tasks = [
        {
            day: 1,
            title: "Reflectie op emoties ❤️",
            description: "Hoe voelde je je deze week? Deel dit samen.",
            choices: ["Bespreek een positief moment", "Bespreek een uitdagend moment"],
        },
        {
            day: 2,
            title: "Complimentendag 🌟",
            description: "Geef elkaar drie complimenten vandaag.",
            choices: ["Geef een persoonlijk compliment", "Geef een compliment over gedrag"],
        },
        {
            day: 3,
            title: "Triggers ontdekken 🤔",
            description: "Bespreek situaties die frustratie veroorzaken.",
            choices: ["Herken een eigen trigger", "Bespreek een trigger van de ander"],
        },
    ];

    let currentDay = 0;

    /**
     * Laad de opdracht voor de dag.
     */
    function loadTask() {
        const task = tasks[currentDay];
        dayNumber.textContent = currentDay + 1;
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        option1.textContent = task.choices[0];
        option2.textContent = task.choices[1];
        dailyTask.classList.remove("hidden");
        choiceContainer.classList.remove("hidden");
        feedbackSection.classList.add("hidden");
    }

    /**
     * Toon feedback na keuze.
     */
    function showFeedback(choice) {
        feedbackSection.innerHTML = `<p><strong>Feedback:</strong> Goede keuze! ${choice} is een mooie stap.</p>`;
        feedbackSection.classList.remove("hidden");
        choiceContainer.classList.add("hidden");
    }

    /**
     * Dagelijkse check-in.
     */
    checkInBtn.addEventListener("click", () => {
        if (checkInText.value.trim() !== "") {
            dailyTask.classList.remove("hidden");
            document.getElementById("daily-check-in").classList.add("hidden");
            loadTask();
        } else {
            alert("Vul iets in om verder te gaan.");
        }
    });

    /**
     * Keuze-opties logica.
     */
    option1.addEventListener("click", () => showFeedback(option1.textContent));
    option2.addEventListener("click", () => showFeedback(option2.textContent));

    /**
     * Volgende dag logica.
     */
    nextBtn.addEventListener("click", () => {
        currentDay = (currentDay + 1) % tasks.length;
        loadTask();
    });

    // Begin spel
    loadTask();
});
