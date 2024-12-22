document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
        {
            title: "Lichamelijke signalen herkennen",
            description: "Wat voel je in je lichaam vandaag? Beschrijf spanning, ademhaling, of energie.",
            choices: ["Spanning in spieren", "Ontspanning en rust"]
        },
        {
            title: "Ademhalingsoefening",
            description: "Doe 5 diepe ademhalingen en observeer hoe je lichaam reageert.",
            choices: ["Meer ontspanning", "Nog steeds spanning"]
        },
        {
            title: "Emoties benoemen",
            description: "Welke emotie voel je het sterkst vandaag? Beschrijf waar je dit in je lichaam voelt.",
            choices: ["Blijheid in de borst", "Stress in de schouders"]
        },
        {
            title: "Progressieve spierontspanning",
            description: "Span en ontspan je schouders, nek en kaak. Hoe voelt dit?",
            choices: ["Meer rust", "Nog steeds spanning"]
        },
        {
            title: "Observeren zonder oordeel",
            description: "Ga rustig zitten en observeer je ademhaling. Welke gedachten komen op?",
            choices: ["Rustige gedachten", "Onrustige gedachten"]
        },
        {
            title: "Non-verbale communicatie",
            description: "Hoe voel je je lichaamstaal vandaag? Wat zou je partner hiervan merken?",
            choices: ["Open en ontspannen", "Gesloten en gespannen"]
        },
        // Meer opdrachten voor de 14 dagen
    ];

    const checkInData = [];
    const checkOutData = [];
    const feedbackData = [];
    let currentDay = 0;

    const dayNumber = document.getElementById("day-number");
    const checkInText = document.getElementById("check-in-text");
    const checkInBtn = document.getElementById("check-in-btn");
    const analysisSection = document.getElementById("analysis-section");
    const analysisResult = document.getElementById("analysis-result");
    const nextBtn = document.getElementById("next-btn");
    const taskSection = document.getElementById("task-section");
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const checkOutSection = document.getElementById("check-out-section");
    const checkOutText = document.getElementById("check-out-text");
    const checkOutBtn = document.getElementById("check-out-btn");
    const feedbackSection = document.getElementById("feedback-section");
    const feedbackMessage = document.getElementById("feedback-message");
    const nextDayBtn = document.getElementById("next-day-btn");

    // Check-in afronden
    checkInBtn.addEventListener("click", () => {
        const inputValue = checkInText.value.trim();
        if (inputValue === "") {
            alert("Vul je check-in in!");
            return;
        }
        checkInData[currentDay] = inputValue;
        checkInText.value = "";
        showAnalysis(inputValue, "check-in");
    });

    function showAnalysis(input, type) {
        let analysisMessage;
        if (type === "check-in") {
            analysisMessage = `Je gaf aan: "${input}". Dit is een belangrijke stap om bewust te worden van je emoties en lichaam. Let op signalen zoals ademhaling of spanning.`;
        } else if (type === "check-out") {
            analysisMessage = `Je reflectie: "${input}". Je groeit in bewustwording. Observeer hoe je lichaam reageerde op emoties vandaag.`;
        }
        analysisResult.textContent = analysisMessage;
        analysisSection.classList.remove("hidden");
        document.getElementById("check-in-section").classList.add("hidden");
    }

    nextBtn.addEventListener("click", () => {
        const task = tasks[currentDay % tasks.length];
        dayNumber.textContent = currentDay + 1;
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        option1.textContent = task.choices[0];
        option2.textContent = task.choices[1];
        taskSection.classList.remove("hidden");
        analysisSection.classList.add("hidden");
    });

    checkOutBtn.addEventListener("click", () => {
        const inputValue = checkOutText.value.trim();
        if (inputValue === "") {
            alert("Vul je check-out in!");
            return;
        }
        checkOutData[currentDay] = inputValue;
        checkOutText.value = "";
        showAnalysis(inputValue, "check-out");
    });

    nextDayBtn.addEventListener("click", () => {
        currentDay++;
        if (currentDay >= tasks.length) {
            showSummary();
        } else {
            resetDay();
        }
    });

    function resetDay() {
        document.getElementById("check-in-section").classList.remove("hidden");
        feedbackSection.classList.add("hidden");
    }

    function showSummary() {
        let summary = "";
        checkInData.forEach((checkIn, index) => {
            summary += `<div>Dag ${index + 1}: Check-in: ${checkIn || "Niet ingevuld"}, Check-out: ${checkOutData[index] || "Niet ingevuld"}</div>`;
        });
        document.getElementById("summary-content").innerHTML = summary;
        document.getElementById("final-analysis").textContent =
            "Je hebt een prachtige reis gemaakt in lichaamsbewustzijn en emotieherkenning. Ga door met reflecteren en communiceren.";
        document.getElementById("summary-section").classList.remove("hidden");
        feedbackSection.classList.add("hidden");
    }
});
