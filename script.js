document.addEventListener("DOMContentLoaded", () => {
    const dayNumber = document.getElementById("day-number");
    const dailyTask = document.getElementById("daily-task");
    const checkInBtn = document.getElementById("check-in-btn");
    const nextBtn = document.getElementById("next-btn");
    const overviewBtn = document.getElementById("overview-btn");
    const backBtn = document.getElementById("back-btn");
    const feedbackSection = document.getElementById("feedback-section");
    const checkInText = document.getElementById("check-in-text");
    const choiceContainer = document.getElementById("choice-container");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const overviewPage = document.getElementById("overview-page");
    const overviewContent = document.getElementById("overview-content");

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
    const checkIns = {}; // Opslag voor dagelijkse check-ins

    function showCheckIn() {
        document.getElementById("daily-check-in").classList.remove("hidden");
        dailyTask.classList.add("hidden");
        feedbackSection.classList.add("hidden");
        nextBtn.classList.add("hidden");
        overviewBtn.classList.add("hidden");
    }

    function loadTask() {
        const task = tasks[currentDay % tasks.length];
        dayNumber.textContent = currentDay + 1;
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        option1.textContent = task.choices[0];
        option2.textContent = task.choices[1];
        dailyTask.classList.remove("hidden");
        choiceContainer.classList.remove("hidden");
        feedbackSection.classList.add("hidden");
    }

    function showFeedback(choice) {
        feedbackSection.innerHTML = `<p><strong>Feedback:</strong> Goede keuze! ${choice} is een mooie stap.</p>`;
        feedbackSection.classList.remove("hidden");
        choiceContainer.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        overviewBtn.classList.remove("hidden");
    }

    checkInBtn.addEventListener("click", () => {
        const checkInValue = checkInText.value.trim();
        if (checkInValue !== "") {
            checkIns[`Dag ${currentDay + 1}`] = checkInValue;
            document.getElementById("daily-check-in").classList.add("hidden");
            loadTask();
        } else {
            alert("Vul iets in om verder te gaan.");
        }
    });

    overviewBtn.addEventListener("click", () => {
        overviewContent.innerHTML = "";
        for (const [day, text] of Object.entries(checkIns)) {
            overviewContent.innerHTML += `
                <div class="day-entry">
                    <strong>${day}:</strong>
                    <p>${text}</p>
                </div>`;
        }
        overviewPage.classList.remove("hidden");
        dailyTask.classList.add("hidden");
        feedbackSection.classList.add("hidden");
        document.getElementById("daily-check-in").classList.add("hidden");
        nextBtn.classList.add("hidden");
        overviewBtn.classList.add("hidden");
    });

    backBtn.addEventListener("click", () => {
        overviewPage.classList.add("hidden");
        dailyTask.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
        overviewBtn.classList.remove("hidden");
    });

    nextBtn.addEventListener("click", () => {
        currentDay++;
        checkInText.value = ""; // Reset de check-in voor de volgende dag
        showCheckIn();
    });

    showCheckIn();
});
