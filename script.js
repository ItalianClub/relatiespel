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
        next: document.getElementById("next-btn"),
        completeExercise: document.getElementById("complete-exercise-btn"),
        checkOut: document.getElementById("check-out-btn"),
        nextDay: document.getElementById("next-day-btn"),
        prevDay: document.getElementById("prev-day-btn"),
        reset: document.getElementById("reset-btn"),
    };

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

    const generateAnalysis = (inputText) => {
        if (inputText.toLowerCase().includes("stress")) {
            return {
                psychological: "Het klinkt alsof je stress hebt ervaren. Reflecteer: 'Wat kan ik doen om meer rust te creëren?'",
                physical: "Observeer waar je spanning voelt. Probeer een ademhalingsoefening om te ontspannen.",
            };
        }
        return {
            psychological: "Je reflectie is waardevol. Probeer specifieke emoties te benoemen.",
            physical: "Doe een lichaamsscan om spanning en ontspanning te identificeren.",
        };
    };

    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = prompts[currentDay - 1];
        document.getElementById("day-number").textContent = currentDay;
    };

    const resetGame = () => {
        currentDay = 1;
        document.querySelectorAll("textarea").forEach(textarea => textarea.value = "");
        loadDayContent();
        showSection("check-in");
    };

    const showSection = (sectionId) => {
        Object.values(sections).forEach(section => section.classList.add("hidden"));
        sections[sectionId].classList.remove("hidden");
    };

    buttons.checkIn.addEventListener("click", () => {
        const input = document.getElementById("check-in-text").value.trim();
        if (!input) return alert("Vul je check-in in.");

        const analysis = generateAnalysis(input);
        document.getElementById("analysis-result").innerHTML = `
            <h3>Psychologische Analyse:</h3>
            <p>${analysis.psychological}</p>
            <h3>Fysieke Analyse:</h3>
            <p>${analysis.physical}</p>
        `;
        showSection("analysis");
    });

    buttons.next.addEventListener("click", () => {
        document.getElementById("exercise-title").textContent = exercises[currentDay - 1].title;
        document.getElementById("exercise-description").textContent = exercises[currentDay - 1].description;
        showSection("exercise");
    });

    buttons.completeExercise.addEventListener("click", () => showSection("checkOut"));

    buttons.checkOut.addEventListener("click", () => {
        const input = document.getElementById("check-out-text").value.trim();
        if (!input) return alert("Vul je check-out in.");
        showSection("sleep");
    });

    buttons.nextDay.addEventListener("click", () => {
        if (currentDay < totalDays) {
            currentDay++;
            loadDayContent();
            showSection("check-in");
        } else {
            alert("Gefeliciteerd! Je hebt alle 14 dagen voltooid!");
        }
    });

    buttons.prevDay.addEventListener("click", () => {
        if (currentDay > 1) {
            currentDay--;
            loadDayContent();
            showSection("check-in");
        }
    });

    buttons.reset.addEventListener("click", resetGame);

    loadDayContent();
});
