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

    // Data opslag voor analyses en reflecties
    const data = Array(totalDays).fill(null).map(() => ({
        checkIn: "",
        analysis: "",
        checkOut: "",
    }));

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

    const generateAnalysis = (inputText) => {
        const lowerInput = inputText.toLowerCase();

        if (lowerInput.includes("spanning") || lowerInput.includes("schouders")) {
            return {
                psychological: "Spanning in je schouders wijst vaak op stress of het gevoel te veel verantwoordelijkheid te dragen. Probeer een reflectieve vraag zoals: 'Wat kan ik vandaag loslaten om meer rust te vinden?'",
                physical: "Druk in je schouders kan wijzen op lichamelijke stress. Probeer een ademhalingsoefening of lichte stretches om dit te verlichten.",
            };
        }

        if (lowerInput.includes("druk") && lowerInput.includes("oren")) {
            return {
                psychological: "Druk achter je oren kan verband houden met opgebouwde spanning en het gevoel dat je je overweldigd voelt. Vraag jezelf af: 'Wat kan ik nu doen om dit te verlichten?'",
                physical: "Dit kan te maken hebben met spanning in je nek. Probeer je nek voorzichtig te bewegen en ademhalingsoefeningen te doen.",
            };
        }

        if (lowerInput.includes("blij") || lowerInput.includes("gelukkig")) {
            return {
                psychological: "Je ervaart vreugde, wat een belangrijk signaal is dat je in contact bent met iets dat je energie geeft. Reflecteer: 'Hoe kan ik meer van deze momenten creëren?'",
                physical: "Blijdschap ontspant je spieren en kan je ademhaling verdiepen. Observeer hoe dit je lichaam positief beïnvloedt.",
            };
        }

        return {
            psychological: "Je gevoelens zijn divers en vragen om nadere verkenning. Probeer een dagboek bij te houden met gedetailleerde observaties van je emoties.",
            physical: "Doe een volledige lichaamsscan om spanning of ontspanning in verschillende delen van je lichaam te identificeren.",
        };
    };

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
        data.forEach(dayData => {
            dayData.checkIn = "";
            dayData.analysis = "";
            dayData.checkOut = "";
        });
        document.querySelectorAll("textarea").forEach(textarea => textarea.value = "");
        loadDayContent();
        showSection("check-in-section");
    };

    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = checkInPrompts[currentDay - 1];
        document.getElementById("day-number").textContent = currentDay;

        const currentData = data[currentDay - 1];
        document.getElementById("check-in-text").value = currentData.checkIn || "";
        document.getElementById("check-out-text").value = currentData.checkOut || "";
    };

    const showSection = (sectionId) => {
        Object.values(sections).forEach(section => section.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");
    };

    buttons.checkIn.addEventListener("click", () => {
        if (validateInput("check-in-text")) {
            const inputText = document.getElementById("check-in-text").value.trim();
            const analysis = generateAnalysis(inputText);

            data[currentDay - 1].checkIn = inputText;
            data[currentDay - 1].analysis = analysis;

            document.getElementById("analysis-result").innerHTML = `
                <h3>Psychologische Analyse:</h3>
                <p>${analysis.psychological}</p>
                <h3>Fysieke Analyse:</h3>
                <p>${analysis.physical}</p>
            `;
            showSection("analysis-section");
        }
    });

    buttons.next.addEventListener("click", () => showSection("exercise-section"));

    buttons.completeExercise.addEventListener("click", () => showSection("check-out-section"));

    buttons.checkOut.addEventListener("click", () => {
        if (validateInput("check-out-text")) {
            const checkOutText = document.getElementById("check-out-text").value.trim();
            data[currentDay - 1].checkOut = checkOutText;

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
