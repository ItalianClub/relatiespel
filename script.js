document.addEventListener("DOMContentLoaded", () => {
    const totalDays = 14;
    let currentDay = 1;

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
            description: "Reflecteer op een emotie die je vandaag hebt ervaren.",
        },
        {
            title: "Ademhalingsoefening",
            description: "Adem diep in en uit en observeer je lichaam.",
        },
        {
            title: "Dankbaarheid",
            description: "Schrijf drie dingen op waar je dankbaar voor bent.",
        },
        {
            title: "Lichaamsscan",
            description: "Scan je lichaam van top tot teen en voel waar spanning zit.",
        },
        {
            title: "Spanning Loslaten",
            description: "Span al je spieren aan, houd vast, en laat los.",
        },
        {
            title: "Moment van Blijdschap",
            description: "Herinner je een moment van blijdschap vandaag.",
        },
        {
            title: "Communicatie Reflectie",
            description: "Reflecteer op hoe je vandaag hebt gecommuniceerd.",
        },
        {
            title: "Non-verbale Signalering",
            description: "Wat vertelt je lichaamstaal vandaag?",
        },
        {
            title: "Leren Loslaten",
            description: "Schrijf iets op wat je lastig vond los te laten.",
        },
        {
            title: "Visualisatie",
            description: "Sluit je ogen en visualiseer een rustige plek.",
        },
        {
            title: "Triggers Herkennen",
            description: "Identificeer situaties die spanning veroorzaakten.",
        },
        {
            title: "Balans Creëren",
            description: "Wat gaf je balans vandaag?",
        },
        {
            title: "Positieve Lichaamsbeweging",
            description: "Doe 5 minuten lichte beweging en observeer het effect.",
        },
        {
            title: "Samenvatting van de Dag",
            description: "Reflecteer op je dag en beschrijf je inzichten.",
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
        showSection("analysis");
    });

    buttons.emotionSubmit.addEventListener("click", () => {
        const emotion = document.getElementById("emotion-select").value;
        const body = document.getElementById("body-select").value;
        if (!emotion || !body) return alert("Beantwoord beide vragen.");
        showSection("exercise");
    });

    buttons.completeExercise.addEventListener("click", () => showSection("checkOut"));

    buttons.checkOut.addEventListener("click", () => {
        const input = document.getElementById("check-out-text").value.trim();
        if (!input) return alert("Vul je reflectie in.");
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
        loadDayContent();
        showSection("checkIn");
    });

    loadDayContent();
});
