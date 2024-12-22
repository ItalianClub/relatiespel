document.addEventListener("DOMContentLoaded", () => {
    const totalDays = 14; // Aantal dagen in de game
    let currentDay = 1; // Huidige dag

    // Secties ophalen
    const sections = {
        checkIn: document.getElementById("check-in-section"),
        analysis: document.getElementById("analysis-section"),
        exercise: document.getElementById("exercise-section"),
        checkOut: document.getElementById("check-out-section"),
        sleep: document.getElementById("sleep-section"),
    };

    // Knoppen ophalen
    const buttons = {
        checkIn: document.getElementById("check-in-btn"),
        next: document.getElementById("next-btn"),
        completeExercise: document.getElementById("complete-exercise-btn"),
        checkOut: document.getElementById("check-out-btn"),
        nextDay: document.getElementById("next-day-btn"),
        prevDay: document.getElementById("prev-day-btn"),
        reset: document.getElementById("reset-btn"),
    };

    // Prompts en oefeningen
    const prompts = [
        "Hoe voel je je vandaag? Beschrijf je emoties en fysieke toestand.",
        "Wat heb je vandaag geleerd over jezelf?",
        "Welke momenten van de dag brachten spanning?",
        "Wat voelde je fysiek tijdens een stressvol moment?",
        "Wat maakte je blij vandaag?",
        "Welke emoties vond je moeilijk te begrijpen?",
        "Waar in je lichaam voelde je rust vandaag?",
        "Wat gaf je energie en waar voelde je dat?",
        "Welke situatie bracht een uitdaging? Hoe voelde dat?",
        "Welke emotie heb je vandaag genegeerd?",
        "Wat heb je geleerd over jezelf door lichaamstaal?",
        "Hoe heeft ademhaling je vandaag geholpen?",
        "Wat zou je lichaam tegen je zeggen?",
        "Welke verandering zou je morgen willen zien?",
    ];

    const exercises = [
        {
            title: "Emoties Observeren",
            description: "Noteer drie momenten waarop je emoties voelde en waar je dit in je lichaam merkte.",
        },
        {
            title: "Lichaamstaal Reflectie",
            description: "Observeer hoe je lichaam reageert in een gesprek. Wat communiceert je lichaam?",
        },
        {
            title: "Ademhalingsoefening",
            description: "Probeer 3 minuten bewust adem te halen. Adem diep in en langzaam uit.",
        },
        {
            title: "Lichaamsscan",
            description: "Scan je lichaam op spanning of ontspanning, van je hoofd tot je tenen.",
        },
        {
            title: "Energiebronnen",
            description: "Schrijf op wat je energie gaf vandaag. Hoe voelde dat?",
        },
        {
            title: "Stressfactoren",
            description: "Identificeer stressmomenten. Hoe kan je daar anders mee omgaan?",
        },
        {
            title: "Reflectie op Reacties",
            description: "Hoe heb je gereageerd op uitdagingen? Wat kun je verbeteren?",
        },
        {
            title: "Dankbaarheid",
            description: "Noteer drie dingen waar je dankbaar voor bent en hoe dat voelt.",
        },
        {
            title: "Fysieke Spanningen",
            description: "Identificeer spanningen in je lichaam. Hoe kun je deze verlichten?",
        },
        {
            title: "Communicatie Oefenen",
            description: "Schrijf op wat je zou willen zeggen aan iemand belangrijk in je leven.",
        },
        {
            title: "Moment van Vreugde",
            description: "Reflecteer op een gelukkig moment en wat dit met je deed.",
        },
        {
            title: "Non-verbale Signalering",
            description: "Noteer hoe je non-verbaal communiceert en wat je zou willen verbeteren.",
        },
        {
            title: "Bewust Ademen",
            description: "Oefen 5 minuten met diep ademhalen.",
        },
        {
            title: "Samenvatting van de Dag",
            description: "Reflecteer op de dag als geheel en beschrijf je belangrijkste inzichten.",
        },
    ];

    // Daginhoud laden
    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = prompts[currentDay - 1];
        document.getElementById("day-number").textContent = currentDay;
    };

    // Secties tonen of verbergen
    const showSection = (sectionId) => {
        Object.values(sections).forEach((section) => section.classList.add("hidden"));
        sections[sectionId].classList.remove("hidden");
    };

    // Reset de game
    const resetGame = () => {
        currentDay = 1;
        document.querySelectorAll("textarea").forEach((textarea) => (textarea.value = ""));
        loadDayContent();
        showSection("checkIn");
    };

    // Check-in voltooien
    buttons.checkIn.addEventListener("click", () => {
        const input = document.getElementById("check-in-text").value.trim();
        if (!input) return alert("Vul je check-in in.");

        // Update analyse sectie met resultaten
        const analysisResult = `
            <h3>Psychologische Analyse:</h3>
            <p>Je reflecteert op emoties en leert deze herkennen.</p>
            <h3>Fysieke Analyse:</h3>
            <p>Observeer je lichaam voor spanning en ontspanning.</p>
        `;
        document.getElementById("analysis-result").innerHTML = analysisResult;

        showSection("analysis");
    });

    // Ga naar oefening
    buttons.next.addEventListener("click", () => {
        const exercise = exercises[currentDay - 1];
        document.getElementById("exercise-title").textContent = exercise.title;
        document.getElementById("exercise-description").textContent = exercise.description;
        showSection("exercise");
    });

    // Oefening voltooien
    buttons.completeExercise.addEventListener("click", () => {
        showSection("checkOut");
    });

    // Check-out voltooien
    buttons.checkOut.addEventListener("click", () => {
        const input = document.getElementById("check-out-text").value.trim();
        if (!input) return alert("Vul je check-out in.");

        showSection("sleep");
    });

    // Naar de volgende dag
    buttons.nextDay.addEventListener("click", () => {
        if (currentDay < totalDays) {
            currentDay++;
            loadDayContent();
            showSection("checkIn");
        } else {
            alert("Gefeliciteerd! Je hebt alle 14 dagen voltooid!");
            resetGame();
        }
    });

    // Naar de vorige dag
    buttons.prevDay.addEventListener("click", () => {
        if (currentDay > 1) {
            currentDay--;
            loadDayContent();
            showSection("checkIn");
        }
    });

    // Game resetten
    buttons.reset.addEventListener("click", resetGame);

    // Laad de eerste daginhoud
    loadDayContent();
});
