document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
        { title: "Reflectie op emoties", description: "Hoe voel je je vandaag? Bespreek dit met elkaar.", choices: ["Focus op positieve emoties 😃", "Identificeer een uitdaging 🤔"] },
        { title: "Lichamelijke signalen herkennen", description: "Wat voel je in je lichaam vandaag? Beschrijf dit.", choices: ["Pijn of spanning", "Ontspanning of energie"] },
        { title: "Gevoelens benoemen", description: "Welke woorden passen bij hoe je je voelt?", choices: ["Blij of trots", "Verdrietig of bezorgd"] },
        { title: "Triggers onderzoeken", description: "Welke situatie maakte indruk op je vandaag? Bespreek dit met je partner.", choices: ["Een positieve ervaring", "Een stressvolle ervaring"] },
        { title: "Complimenten reflecteren", description: "Geef je partner drie complimenten en ontvang er ook drie.", choices: ["Complimenteer gedrag", "Complimenteer karakter"] },
        { title: "Verbindende communicatie", description: "Deel vandaag wat je waardeert in je partner en luister actief.", choices: ["Begin met 'ik voel...'", "Focus op wederzijds begrip"] },
        { title: "Dankbaarheid tonen", description: "Noem drie dingen waar je dankbaar voor bent in jullie relatie.", choices: ["Kleine momenten", "Grote mijlpalen"] },
        { title: "Samen doelen stellen", description: "Bepaal samen één doel voor de komende week.", choices: ["Een emotioneel doel", "Een praktisch doel"] },
        { title: "Stress verminderen", description: "Probeer samen een ontspannende activiteit te doen.", choices: ["Meditatie of ademhalingsoefeningen", "Een wandeling maken"] },
        { title: "Herinneringen ophalen", description: "Bespreek een positieve herinnering die jullie samen hebben.", choices: ["Een vakantie", "Een gezamenlijk succes"] },
        { title: "Lichamelijke ontspanning", description: "Neem vandaag tijd om je lichaam te ontspannen.", choices: ["Yoga of stretching", "Een warm bad nemen"] },
        { title: "Woordenschat uitbreiden", description: "Zoek nieuwe woorden om je gevoelens en lichamelijke signalen te beschrijven.", choices: ["Gebruik een woordenlijst", "Schrijf nieuwe termen op"] },
        { title: "Feedback ontvangen", description: "Vraag je partner om feedback over jullie communicatie.", choices: ["Focus op verbetering", "Focus op wat goed gaat"] },
        { title: "Eindreflectie", description: "Bespreek wat je in de afgelopen dagen hebt geleerd.", choices: ["Persoonlijke groei", "Relatieverbetering"] },
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

    checkInBtn.addEventListener("click", () => {
        const inputValue = checkInText.value.trim();
        if (inputValue === "") {
            alert("Vul je check-in in!");
            return;
        }
        checkInData[currentDay] = inputValue;
        checkInText.value = "";
        analyzeInput(inputValue, "check-in");
    });

    function analyzeInput(input, type) {
        const emotions = {
            stress: "Je voelt spanning. Probeer samen te ontspannen. 💆‍♀️",
            blij: "Je bent blij vandaag! Deel dit gevoel. 😄",
            verdriet: "Je voelt verdriet. Probeer hierover te praten. 🥺",
            moe: "Je voelt je moe. Neem wat tijd voor rust. 💤",
        };

        for (const [keyword, message] of Object.entries(emotions)) {
            if (input.toLowerCase().includes(keyword)) {
                showFeedback(message);
                return;
            }
        }

        showFeedback("Interessante reflectie. Probeer verder te onderzoeken wat je voelt. ✨");
    }

    function showFeedback(message) {
        analysisResult.textContent = message;
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
        analyzeInput(inputValue, "check-out");
    });

    nextDayBtn.addEventListener("click", () => {
        currentDay++;
        if (currentDay >= tasks.length) {
            alert("Gefeliciteerd! Jullie hebben de 14-daagse reflectie voltooid! ❤️");
            currentDay = 0;
        }
        document.getElementById("check-in-section").classList.remove("hidden");
        feedbackSection.classList.add("hidden");
    });
});
