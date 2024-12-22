document.addEventListener("DOMContentLoaded", () => {
    const totalDays = 14;
    let currentDay = 1;
    let reflections = {};

    const sections = {
        checkIn: document.getElementById("check-in-section"),
        analysis: document.getElementById("analysis-section"),
        exercise: document.getElementById("exercise-section"),
        checkOut: document.getElementById("check-out-section"),
        sleep: document.getElementById("sleep-section"),
    };

    const buttons = {
        checkIn: document.getElementById("check-in-btn"),
        emotionSubmit: document.getElementById("emotion-submit"),
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

    const exercises = [
        {
            title: "Emotie Observeren",
            description: "Schrijf drie emoties op die je vandaag hebt ervaren. Kies er één en beschrijf waar je deze in je lichaam voelde.",
        },
        {
            title: "Ademhalingsoefening",
            description: "Adem diep in en langzaam uit gedurende 5 minuten. Observeer hoe je ademhaling je lichaam beïnvloedt.",
        },
        {
            title: "Dankbaarheid",
            description: "Schrijf drie dingen op waar je vandaag dankbaar voor bent en reflecteer op hoe dat voelt in je lichaam.",
        },
        {
            title: "Lichaamsscan",
            description: "Scan je lichaam van top tot teen. Waar voel je spanning of ontspanning?",
        },
        {
            title: "Spanning Loslaten",
            description: "Span gedurende 5 seconden al je spieren aan en laat dan los. Observeer het verschil in spanning.",
        },
        {
            title: "Moment van Blijdschap",
            description: "Herinner je een moment van blijdschap. Wat voelde je en waar in je lichaam voelde je dat?",
        },
        {
            title: "Triggers Herkennen",
            description: "Identificeer een situatie die spanning veroorzaakte. Wat was de trigger en hoe voelde je lichaam?",
        },
        {
            title: "Balans Creëren",
            description: "Schrijf drie dingen op die balans in je dag brachten en reflecteer hoe je lichaam reageert.",
        },
    ];

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

        const dominantEmotion = selectedEmotions[0]; // Kies de eerste als leidend
        document.getElementById("exercise-title").textContent = `Focus op ${dominantEmotion}`;
        document.getElementById("exercise-description").textContent = `Reflecteer op hoe ${dominantEmotion} je dag heeft beïnvloed en hoe je dit in je ${selectedBodyParts.join(', ')} voelde.`;

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
