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

    const checkInPrompts = [
        "Hoe voel je je nu? Beschrijf eventuele fysieke spanningen.",
        "Welke emotie overheerst vandaag? Waar voel je dit in je lichaam?",
        "Wat heeft je vandaag geraakt en hoe voelde dat?",
        "Welke kleur beschrijft je stemming vandaag? Waarom?",
        "Waar voel je spanning in je lichaam?",
        "Hoe voelt je ademhaling op dit moment?",
        "Voel je ergens tintelingen? Waar precies?",
        "Welke gedachten hebben vandaag het meeste door je hoofd gespookt?",
        "Waar voel je je energiek? Wat gaf je energie?",
        "Welke situatie bracht vandaag stress? Waar voelde je dat?",
        "Wat heeft je vandaag gelukkig gemaakt? Hoe voelde dat?",
        "Welke emoties heb je vandaag genegeerd? Waar merk je dat aan?",
        "Hoe voelt je lichaam op dit moment als een geheel?",
        "Wat zou je lichaam je vandaag vertellen als het kon praten?",
    ];

    const exercises = [
        { title: "Emotionele Check-in", description: "Neem een moment om stil te zitten. Stel jezelf de vraag: Wat voel ik nu? Benoem één emotie en beschrijf waar je deze in je lichaam voelt." },
        { title: "De Taal van Je Emoties", description: "Maak een lijst van emoties die je vandaag hebt gevoeld. Voor elke emotie: Waar voelde je deze in je lichaam? Koppel een herinnering aan deze emotie." },
        { title: "Spanning Loslaten", description: "Span je spieren kort aan, laat los, en observeer wat je voelt in je lichaam." },
        { title: "Diepe Ademhaling", description: "Adem diep in door je neus en langzaam uit door je mond. Focus op je ademhaling." },
        { title: "Emotionele Woordenschat", description: "Zoek drie woorden die jouw emoties beschrijven. Probeer deze woorden in een zin te gebruiken." },
        { title: "Triggers Herkennen", description: "Schrijf een situatie op die een sterke emotie opriep. Hoe reageerde je op deze emotie?" },
        { title: "Kleur Je Emotie", description: "Kies een kleur die jouw stemming vandaag beschrijft. Schrijf waarom je deze kleur koos." },
        { title: "Dankbaarheid Reflectie", description: "Schrijf drie dingen op waar je vandaag dankbaar voor bent. Hoe voelde dit in je lichaam?" },
        { title: "Adem en Beweeg", description: "Doe een stretch of korte wandeling en let op hoe je ademhaling verandert." },
        { title: "Schrijf Je Stress", description: "Schrijf drie dingen op die je stress bezorgen. Hoe voelt je lichaam als je hieraan denkt?" },
        { title: "Spiegelreflectie", description: "Kijk 5 minuten in de spiegel. Wat zegt je gezichtsuitdrukking over je emoties?" },
        { title: "Rust en Ontspanning", description: "Ga liggen, sluit je ogen en focus op je ademhaling. Laat gedachten passeren zonder oordeel." },
        { title: "Zelfcompassie Brief", description: "Schrijf een brief aan jezelf waarin je je emoties erkent en jezelf ondersteunt." },
        { title: "Eindreflectie", description: "Kijk terug op de afgelopen 14 dagen. Wat heb je geleerd over je emoties en lichaam?" },
    ];

    const validateInput = (inputId) => {
        const inputField = document.getElementById(inputId);
        if (!inputField.value.trim()) {
            inputField.classList.add("error");
            alert("Vul dit veld in om verder te gaan.");
            return false;
        }
        inputField.classList.remove("error");
        return true;
    };

    const resetGame = () => {
        currentDay = 1;
        document.querySelectorAll("textarea").forEach(textarea => textarea.value = "");
        loadDayContent();
        showSection("check-in-section");
    };

    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = checkInPrompts[currentDay - 1];
        const exercise = exercises[currentDay - 1];
        document.getElementById("exercise-title").textContent = exercise.title;
        document.getElementById("exercise-description").textContent = exercise.description;
        document.getElementById("day-number").textContent = currentDay;
    };

    const showSection = (sectionId) => {
        Object.values(sections).forEach(section => section.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");
    };

    buttons.checkIn.addEventListener("click", () => {
        if (validateInput("check-in-text")) {
            showSection("analysis-section");
        }
    });

    buttons.next.addEventListener("click", () => showSection("exercise-section"));

    buttons.completeExercise.addEventListener("click", () => showSection("check-out-section"));

    buttons.checkOut.addEventListener("click", () => {
        if (validateInput("check-out-text")) {
            showSection("sleep-section");
        }
    });

    buttons.nextDay.addEventListener("click", () => {
        if (currentDay < totalDays) {
            currentDay++;
            loadDayContent();
            showSection("check-in-section");
        } else {
            alert("Gefeliciteerd! Je hebt alle 14 dagen voltooid!");
        }
    });

    buttons.prevDay.addEventListener("click", () => {
        if (currentDay > 1) {
            currentDay--;
            loadDayContent();
            showSection("check-in-section");
        }
    });

    buttons.reset.addEventListener("click", resetGame);

    loadDayContent();
});
