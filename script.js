document.addEventListener("DOMContentLoaded", () => {
    const totalDays = 14;
    let currentDay = 1;
    let reflections = {};

    const sections = {
        checkIn: document.getElementById("check-in-section"),
        analysis: document.getElementById("analysis-section"),
        emotionSummary: document.getElementById("emotion-summary"),
        exercise: document.getElementById("exercise-section"),
        checkOut: document.getElementById("check-out-section"),
        sleep: document.getElementById("sleep-section"),
    };

    const buttons = {
        checkIn: document.getElementById("check-in-btn"),
        emotionSubmit: document.getElementById("emotion-submit"),
        proceedToExercise: document.getElementById("proceed-to-exercise"),
        completeExercise: document.getElementById("complete-exercise-btn"),
        checkOut: document.getElementById("check-out-btn"),
        nextDay: document.getElementById("next-day-btn"),
        prevDay: document.getElementById("prev-day-btn"),
        reset: document.getElementById("reset-btn"),
    };

    const prompts = [
        "Hoe voel je je vandaag?",
        "Welke emoties waren dominant?",
        "Hoe reageerde je lichaam op stress?",
        "Wat gaf je vandaag rust?",
        "Welke emoties had je vandaag moeite mee?",
        "Hoe voelde blijdschap in je lichaam?",
        "Wat heeft je vandaag geraakt?",
        "Waar voel je spanning?",
        "Wat gaf je energie?",
        "Hoe was je lichaamstaal?",
        "Welke situatie bracht stress?",
        "Wat maakte je gelukkig?",
        "Welke emoties heb je genegeerd?",
        "Wat leerde je over jezelf?",
    ];

    const bodyPartExercises = {
        hoofd: "Plaats je handen zachtjes op je hoofd. Masseer je slapen in cirkelvormige bewegingen en adem langzaam in en uit.",
        borst: "Leg je handen op je borst. Adem diep in, houd je adem 3 seconden vast en adem langzaam uit. Observeer de spanning.",
        buik: "Ga zitten en plaats je handen op je buik. Adem diep in en uit, voel je buik op en neer bewegen.",
        schouders: "Span je schouders op naar je oren, houd dit 5 seconden vast en laat ze vervolgens los met een diepe uitademing.",
        handen: "Schud je handen zachtjes uit. Span ze stevig in een vuist en laat daarna los. Herhaal 5 keer.",
        benen: "Strek je benen uit en beweeg je tenen. Focus op ontspanning in je onderlichaam.",
    };

    const showSection = (id) => {
        Object.values(sections).forEach((section) => section.classList.add("hidden"));
        sections[id].classList.remove("hidden");
    };

    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = prompts[currentDay - 1];
        document.getElementById("day-number").textContent = currentDay;
    };

    buttons.checkIn.addEventListener("click", () => {
        const input = document.getElementById("check-in-text").value.trim();
        if (!input) return alert("Vul je reflectie in.");
        reflections[currentDay] = { checkIn: input };
        showSection("analysis");
    });

    buttons.emotionSubmit.addEventListener("click", () => {
        const selectedEmotions = Array.from(document.getElementById("emotion-select").selectedOptions).map(opt => opt.value);
        const selectedBodyParts = Array.from(document.getElementById("body-select").selectedOptions).map(opt => opt.value);

        if (!selectedEmotions.length || !selectedBodyParts.length) {
            return alert("Selecteer minstens één emotie en één lichaamsdeel.");
        }

        reflections[currentDay].emotions = selectedEmotions;
        reflections[currentDay].bodyParts = selectedBodyParts;

        const summaryText = `
            Je hebt de volgende emoties geselecteerd: ${selectedEmotions.join(", ")}.
            Je voelt deze emoties in: ${selectedBodyParts.join(", ")}.
        `;
        document.getElementById("summary-description").textContent = summaryText;
        showSection("emotionSummary");
    });

    buttons.proceedToExercise.addEventListener("click", () => {
        const bodyParts = reflections[currentDay].bodyParts;
        const exercises = bodyParts.map(part => bodyPartExercises[part]).join(" ");
        document.getElementById("exercise-title").textContent = "Lichaamsgerichte Oefening";
        document.getElementById("exercise-description").textContent = exercises;
        showSection("exercise");
    });

    buttons.completeExercise.addEventListener("click", () => showSection("checkOut"));

    buttons.checkOut.addEventListener("click", () => {
        const input = document.getElementById("check-out-text").value.trim();
        if (!input) return alert("Vul je reflectie in.");
        reflections[currentDay].checkOut = input;
        showSection("sleep");
    });

    buttons.nextDay.addEventListener("click", () => {
        if (currentDay < totalDays) {
            currentDay++;
            loadDayContent();
            showSection("checkIn");
        } else {
            alert("Gefeliciteerd! Je hebt alle dagen voltooid!");
        }
    });

    buttons.prevDay.addEventListener("click", () => {
        if (currentDay > 1) {
            currentDay--;
            loadDayContent();
            showSection("checkIn");
        }
    });

    buttons.reset.addEventListener("click", () => {
        currentDay = 1;
        reflections = {};
        loadDayContent();
        showSection("checkIn");
    });

    loadDayContent();
});
