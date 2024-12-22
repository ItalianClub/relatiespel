document.addEventListener("DOMContentLoaded", () => {
    const totalDays = 14;
    let currentDay = 1;
    let reflections = {}; // Opslag voor reflecties per dag
    let emotionalGrowth = []; // Opslag voor emotionele groei
    let bodyTension = []; // Opslag voor lichamelijke spanning

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

    // Emotiegerichte oefeningen
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
        document.getElementById("check-in-prompt").textContent = `Dag ${currentDay}: Hoe voel je je? Beschrijf je emoties en fysieke toestand.`;
        document.getElementById("day-number").textContent = currentDay;
    };

    // Korte emotionele analyse na 2 dagen
    const shortAnalysis = (day) => {
        if (day % 2 === 0) {
            const checkInReflection = reflections[day].checkIn;
            const emotions = reflections[day].emotions;
            const bodyParts = reflections[day].bodyParts;

            const morningEmotions = emotions.join(", ");
            const eveningEmotions = bodyParts.join(", ");

            return `Op dag ${day} heb je je emoties als volgt ervaren: 'Ochtend emoties: ${morningEmotions}' en 'Avond emoties: ${eveningEmotions}'.`;
        }
        return '';
    };

    // Emotionele groei na een week
    const emotionalGrowthAnalysis = () => {
        return `
            Na een week is er sprake van groei in emotionele zelfkennis en lichaamsbewustzijn. 
            Je hebt verschillende emoties leren herkennen en reflecteren, maar ook belangrijke knelpunten zoals spanning in je schouders en angstbeheersing werden duidelijk.
            Blijf de link tussen emoties en lichamelijke sensaties onderzoeken.
        `;
    };

    // Analyse na 14 dagen
    const finalAnalysis = () => {
        return `
            Na 14 dagen reflectie en emotieherkenning, is er een duidelijke vooruitgang zichtbaar in je emotionele groei en lichaamsbewustzijn. 
            Je hebt bepaalde traumas en onderliggende emoties geidentificeerd, zoals stress in je buik en vastgezette boosheid in je schouders. 
            Je hebt geleerd om te werken met je emoties door middel van phygosomatische oefeningen zoals ademhaling en ontspanning. 
            Het is tijd om verder te werken aan het loslaten van spanning, door je focus te richten op diepe ademhaling en ontspanning van het hele lichaam.
        `;
    };

    // Check-in
    buttons.checkIn.addEventListener("click", () => {
        const input = document.getElementById("check-in-text").value.trim();
        if (!input) return alert("Vul je reflectie in.");
        reflections[currentDay] = { checkIn: input };
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
        const input = document.getElementById("check-out-text").value.trim();
        if (!input) return alert("Vul je reflectie in.");
        reflections[currentDay].checkOut = input;
        showSection("sleep");
    });

    // Naar de volgende dag
    buttons.nextDay.addEventListener("click", () => {
        if (currentDay < totalDays) {
            currentDay++;
            loadDayContent();
            showSection("checkIn");
        } else {
            alert("Gefeliciteerd! Je hebt alle dagen voltooid!");
            const finalAnalysisText = finalAnalysis();
            alert(finalAnalysisText); // Einde analyse na 14 dagen
        }

        // Na 2 dagen een korte analyse tonen
        if (currentDay % 2 === 0) {
            const analysisText = shortAnalysis(currentDay);
            alert(analysisText); // Eenvoudige analyse na 2 dagen
        }

        // Na 7 dagen een emotionele groei-analyse tonen
        if (currentDay === 7) {
            const growthAnalysis = emotionalGrowthAnalysis();
            alert(growthAnalysis); // Emotionele groei-analyse na een week
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

    // Reset de game
    buttons.reset.addEventListener("click", () => {
        currentDay = 1;
        reflections = {};
        loadDayContent();
        showSection("checkIn");
    });

    // Initieer de eerste dag
    loadDayContent();
});
