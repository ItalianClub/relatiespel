document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
        {
            title: "Reflectie op emoties",
            description: "Hoe voel je je vandaag? Bespreek dit met elkaar.",
            choices: ["Focus op positieve emoties 😃", "Identificeer een uitdaging 🤔"],
        },
        {
            title: "Complimentendag",
            description: "Geef elkaar drie complimenten en schrijf op hoe dit voelt.",
            choices: ["Complimenteer karaktereigenschappen 🧡", "Complimenteer gedrag 🛠️"],
        },
        // Voeg meer opdrachten toe voor 14 dagen
    ];

    const checkInData = [];
    const checkOutData = [];
    let currentDay = 0;

    // DOM-elementen
    const dayNumber = document.getElementById("day-number");
    const checkInText = document.getElementById("check-in-text");
    const checkInBtn = document.getElementById("check-in-btn");
    const taskSection = document.getElementById("task-section");
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const checkOutSection = document.getElementById("check-out-section");
    const checkOutText = document.getElementById("check-out-text");
    const checkOutBtn = document.getElementById("check-out-btn");
    const feedbackSection = document.getElementById("feedback-section");
    const navigationSection = document.getElementById("navigation-section");
    const previousBtn = document.getElementById("previous-btn");
    const nextBtn = document.getElementById("next-btn");
    const summaryBtn = document.getElementById("summary-btn");
    const summarySection = document.getElementById("summary-section");
    const summaryContent = document.getElementById("summary-content");
    const backBtn = document.getElementById("back-btn");

    // Laad de opdracht
    function loadTask() {
        const task = tasks[currentDay % tasks.length];
        dayNumber.textContent = currentDay + 1;
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        option1.textContent = task.choices[0];
        option2.textContent = task.choices[1];
        taskSection.classList.remove("hidden");
        feedbackSection.classList.add("hidden");
        checkOutSection.classList.add("hidden");
        navigationSection.classList.add("hidden");
    }

    // Check-in afronden
    checkInBtn.addEventListener("click", () => {
        if (checkInText.value.trim() !== "") {
            checkInData[currentDay] = checkInText.value.trim();
            checkInText.value = "";
            loadTask();
        } else {
            checkInText.classList.add("error");
            alert("Vul je check-in in!");
        }
    });

    // Check-out afronden
    checkOutBtn.addEventListener("click", () => {
        if (checkOutText.value.trim() !== "") {
            checkOutData[currentDay] = checkOutText.value.trim();
            checkOutText.value = "";
            feedbackSection.classList.remove("hidden");
            navigationSection.classList.remove("hidden");
        } else {
            checkOutText.classList.add("error");
            alert("Vul je check-out in!");
        }
    });

    // Vorige dag
    previousBtn.addEventListener("click", () => {
        if (currentDay > 0) {
            currentDay--;
            loadTask();
        } else {
            alert("Je bent al bij de eerste dag.");
        }
    });

    // Volgende dag
    nextBtn.addEventListener("click", () => {
        currentDay++;
        if (currentDay >= 14) {
            alert("Nieuwe cyclus gestart! Blijf werken aan jullie relatie.");
        }
        loadTask();
    });

    // Samenvatting tonen
    summaryBtn.addEventListener("click", () => {
        summaryContent.innerHTML = "";
        for (let i = 0; i <= currentDay; i++) {
            summaryContent.innerHTML += `
                <div>
                    <strong>Dag ${i + 1}:</strong>
                    <p>Check-in: ${checkInData[i] || "Geen gegevens"}</p>
                    <p>Check-out: ${checkOutData[i] || "Geen gegevens"}</p>
                </div>
            `;
        }
        summarySection.classList.remove("hidden");
    });

    // Terug naar spel
    backBtn.addEventListener("click", () => {
        summarySection.classList.add("hidden");
    });

    loadTask();
});
