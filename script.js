document.addEventListener("DOMContentLoaded", () => {
    const totalDays = 14;
    let currentDay = 1;
    let reflections = {}; // Opslag voor reflecties per dag

    // Herstellen van de opgeslagen voortgang in localStorage
    if (localStorage.getItem('currentDay')) {
        currentDay = parseInt(localStorage.getItem('currentDay'));
        reflections = JSON.parse(localStorage.getItem('reflections')) || {};
    }

    // Secties ophalen
    const sections = {
        checkIn: document.getElementById("check-in-section"),
        analysis: document.getElementById("analysis-section"),
        emotionSummary: document.getElementById("emotion-summary"),
        exercise: document.getElementById("exercise-section"),
        checkOut: document.getElementById("check-out-section"),
        sleep: document.getElementById("sleep-section"),
    };

    // Knoppen ophalen
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

    // Reflectie prompts voor 14 dagen
    const reflectionPrompts = [
        "Hoe voel je je vandaag? Wat overheerst er in je lichaam?",
        "Herken je een emotie vandaag? Waar voel je deze in je lichaam?",
        "Welke situatie bracht stress vandaag? Hoe voel je je daarover?",
        "Wat maakt je blij vandaag? Hoe merk je dat in je lichaam?",
        "Ben je ergens boos over? Waar voel je dat in je lichaam?",
        "Wat maakt je onzeker vandaag? Wat zegt je lichaam hierover?",
        "Welke emoties heb je vandaag ervaren? Waar in je lichaam merk je deze?",
        "Voel je ergens spanning? Hoe kun je deze spanning loslaten?",
        "Wat heeft je gelukkig gemaakt? Hoe voelde je dat in je lichaam?",
        "Wat zou je vandaag willen veranderen in je reacties op emoties?",
        "Welke lichamelijke sensaties merk je? Wat zeggen ze over je emotie?",
        "Wat is je grootste uitdaging op dit moment? Hoe voelt dat lichamelijk?",
        "Heb je je vandaag ontspannen? Wat zou je willen verbeteren?",
        "Hoe zou je jezelf vandaag kunnen steunen in het omgaan met emoties?"
    ];

    // Emotiegerichte oefeningen per dag
    const emotionExercises = {
        blij: "Schrijf op wat je vreugde bracht vandaag. Hoe kun je meer van deze momenten creëren?",
        verdrietig: "Sta stil bij wat je verdrietig maakt. Schrijf op wat je zou willen zeggen als je dit kon uiten.",
        boos: "Neem een moment om te ademen. Schrijf op wat je boos maakt en wat je nodig hebt om rust te vinden.",
        angstig: "Visualiseer een veilige plek. Schrijf op wat je geruststelt en hoe je deze gevoelens kunt verminderen.",
        onzeker: "Schrijf drie dingen op waar je goed in bent. Hoe kun je je zelfvertrouwen vergroten?",
        schuld: "Sta stil bij waarom je je schuldig voelt. Wat kun je doen om dit gevoel los te laten?",
        jaloers: "Herken waar je jaloezie vandaan komt. Hoe kun je deze energie omzetten in motivatie?",
        trots: "Schrijf op waar je trots op bent. Wat heb je bereikt en hoe voelde dat?",
        enthousiast: "Noteer wat je energie geeft. Hoe kun je dit enthousiasme vasthouden?",
    };

    // Lichaamsgerichte oefeningen per lichaamsdeel
    const bodyPartExercises = {
        hoofd: "Masseer je slapen in cirkelvormige bewegingen terwijl je rustig ademhaalt.",
        borst: "Plaats je hand op je borst, adem diep in en voel hoe je borst zich opent en ontspant.",
        buik: "Adem diep in en voel je buik op en neer bewegen. Focus op het loslaten van spanning in je buik.",
        schouders: "Rol je schouders langzaam naar achteren en laat ze zakken terwijl je diep uitademt.",
        handen: "Schud je handen los en stretch je vingers. Voel hoe spanning verdwijnt.",
        benen: "Span je benen aan, houd dit 5 seconden vast, en laat dan langzaam los. Herhaal dit driemaal.",
    };

    // Sectie tonen of verbergen
    const showSection = (id) => {
        Object.values(sections).forEach((section) => section.classList.add("hidden"));
        sections[id].classList.remove("hidden");
    };

    // Daginhoud laden
    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = reflectionPrompts[currentDay - 1];
        document.getElementById("day-number").textContent = currentDay;
    };

    // Sla de voortgang op in localStorage
    const saveProgress = () => {
        localStorage.setItem('currentDay', currentDay); // Bewaar de huidige dag
        localStorage.setItem('reflections', JSON.stringify(reflections)); // Bewaar de reflecties
    };

    // Genereer een tussenstand na 2 dagen
    const generateMidwayAnalysis = () => {
        let emotionsSummary = [];
        let bodyPartsSummary = [];
        for (let day = 1; day <= currentDay; day++) {
            const dayReflections = reflections[day];
            if (dayReflections) {
                emotionsSummary.push(dayReflections.emotions.join(", "));
                bodyPartsSummary.push(dayReflections.bodyParts.join(", "));
            }
        }

        return `
            Na ${currentDay} dagen heb je de volgende emoties ervaren: ${emotionsSummary.join(", ")}.<br>
            Deze emoties voelden zich in de volgende lichaamsdelen: ${bodyPartsSummary.join(", ")}.<br>
            Emoties die vaak opduiken kunnen wijzen op terugkerende spanningen. Dit geeft mogelijk inzicht in welk gebied van je lichaam en geest extra aandacht behoeft.
        `;
    };

    // Analyse na 14 dagen
    const generateFinalAnalysis = () => {
        let emotionsSummary = [];
        let bodyPartsSummary = [];
        for (let day = 1; day <= totalDays; day++) {
            const dayReflections = reflections[day];
            if (dayReflections) {
                emotionsSummary.push(dayReflections.emotions.join(", "));
                bodyPartsSummary.push(dayReflections.bodyParts.join(", "));
            }
        }

        return `
            Gedurende de 14 dagen heb je de volgende emoties ervaren: ${emotionsSummary.join(", ")}.<br>
            Deze emoties werden vaak gevoeld in de volgende lichaamsdelen: ${bodyPartsSummary.join(", ")}.<br>
            Deze reflecties geven je belangrijke inzichten over hoe je emoties zich fysiek manifesteren. Kijk naar terugkerende lichamelijke klachten, zoals spanning in bepaalde delen van je lichaam, en werk aan het loslaten van die spanningen.
        `;
    };

    // Check-in
    buttons.checkIn.addEventListener("click", () => {
        const input = document.getElementById("check-in-text").value.trim();
        if (!input) return alert("Vul je reflectie in.");
        reflections[currentDay] = { checkIn: input };
        saveProgress(); // Sla voortgang op na elke check-in
        showSection("analysis");
    });

    // Analyse en samenvatting
    buttons.emotionSubmit.addEventListener("click", () => {
        const selectedEmotions = Array.from(document.getElementById("emotion-select").selectedOptions).map(opt => opt.value);
        const selectedBodyParts = Array.from(document.getElementById("body-select").selectedOptions).map(opt => opt.value);

        if (!selectedEmotions.length || !selectedBodyParts.length) {
            return alert("Selecteer minstens één emotie en één lichaamsdeel.");
        }

        reflections[currentDay].emotions = selectedEmotions;
        reflections[currentDay].bodyParts = selectedBodyParts;

        // Samenvatting genereren
        const summaryText = `
            Je hebt de volgende emoties gekozen: ${selectedEmotions.join(", ")}.<br>
            Je voelt deze emoties in: ${selectedBodyParts.join(", ")}.
        `;
        document.getElementById("summary-description").innerHTML = summaryText;
        saveProgress(); // Sla voortgang op na analyse
        showSection("emotionSummary");
    });

    // Naar de oefening
    buttons.proceedToExercise.addEventListener("click", () => {
        const emotions = reflections[currentDay].emotions;
        const bodyParts = reflections[currentDay].bodyParts;

        // Emotie-oefening genereren
        const emotionExercise = emotions.map(emotion => emotionExercises[emotion]).join(" ");
        // Lichaamsgerichte oefeningen genereren
        const bodyExercise = bodyParts.map(part => bodyPartExercises[part]).join(" ");

        document.getElementById("exercise-title").textContent = "Oefeningen voor Emotie en Lichaam";
        document.getElementById("exercise-description").textContent = `
            ${emotionExercise}<br><br>
            Lichaamsgerichte oefeningen:<br>${bodyExercise}
        `;
        showSection("exercise");
    });

    // Oefening voltooien
    buttons.completeExercise.addEventListener("click", () => showSection("checkOut"));

    // Check-out
    buttons.checkOut.addEventListener("click", () => {
        const input = document.getElementById("check-out-text").
