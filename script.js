document.addEventListener("DOMContentLoaded", () => {
    const tasks = [
        { title: "Reflectie op emoties", description: "Hoe voel je je vandaag? Bespreek dit met elkaar.", choices: ["Focus op positieve emoties 😃", "Identificeer een uitdaging 🤔"] },
        { title: "Complimentendag", description: "Geef elkaar drie complimenten en schrijf op hoe dit voelt.", choices: ["Complimenteer karaktereigenschappen 🧡", "Complimenteer gedrag 🛠️"] },
        { title: "Triggers ontdekken", description: "Bespreek situaties die frustraties veroorzaken en hoe je ze kunt vermijden.", choices: ["Herken een trigger", "Bespreek een oplossing"] },
        { title: "Verbindende communicatie", description: "Oefen actief luisteren en geef je partner 10 minuten volledige aandacht.", choices: ["Deel wat je voelt", "Luister actief"] },
        { title: "Samen doelen stellen", description: "Bepaal één gezamenlijk doel voor de komende week.", choices: ["Een gezinsdoel", "Een persoonlijk doel delen"] },
        { title: "Dankbaarheid tonen", description: "Noem drie dingen waar je dankbaar voor bent in jullie relatie.", choices: ["Focus op recente momenten", "Kies iets uit het verleden"] },
        { title: "Vrije keuze", description: "Kies samen een activiteit om quality time door te brengen.", choices: ["Een film kijken", "Samen koken"] },
        { title: "Herken fysieke signalen", description: "Bespreek hoe je lichaam reageert op stress of geluk.", choices: ["Bespreek stress-signalen", "Deel positieve lichamelijke reacties"] },
        { title: "Herinneringen ophalen", description: "Denk samen terug aan een mooie herinnering.", choices: ["Een vakantie", "Een prestatie vieren"] },
        { title: "Ondersteuning bieden", description: "Vraag je partner hoe je hen kunt ondersteunen.", choices: ["Vraag naar werk", "Vraag naar persoonlijke doelen"] },
        { title: "Behoeften uitspreken", description: "Deel één behoefte die je vandaag hebt.", choices: ["Een emotionele behoefte", "Een praktische behoefte"] },
        { title: "Gezamenlijk ontspannen", description: "Plan 30 minuten samen om te ontspannen.", choices: ["Een wandeling maken", "Samen mediteren"] },
        { title: "Complimenten reflecteren", description: "Herhaal drie complimenten die je eerder hebt ontvangen.", choices: ["Complimenten van je partner", "Complimenten van anderen"] },
        { title: "Eindreflectie", description: "Bespreek wat jullie in de afgelopen dagen hebben geleerd.", choices: ["Persoonlijke groei", "Relatieverbeteringen"] },
    ];

    const checkInData = [];
    const feedbackData = [];
    let currentDay = 0;

    // DOM-elementen
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
    const feedbackSection = document.getElementById("feedback-section");
    const feedbackMessage = document.getElementById("feedback-message");
    const nextDayBtn = document.getElementById("next-day-btn");

    // Check-in afronden
    checkInBtn.addEventListener("click", () => {
        const inputValue = checkInText.value.trim();
        if (inputValue === "") {
            alert("Vul je check-in in!");
            return;
        }

        checkInData[currentDay] = inputValue;
        checkInText.value = "";
        showAnalysis(inputValue);
    });

    // Analyse tonen
    function showAnalysis(input) {
        analysisResult.textContent = analyzeInput(input);
        analysisSection.classList.remove("hidden");
        document.getElementById("check-in-section").classList.add("hidden");
    }

    function analyzeInput(input) {
        if (input.includes("stress") || input.includes("moe")) {
            return "Je voelt je waarschijnlijk overbelast. Probeer samen te ontspannen. 💆‍♀️";
        } else if (input.includes("blij") || input.includes("gelukkig")) {
            return "Je hebt een goede stemming vandaag! Deel dit gevoel met je partner. 😄";
        } else {
            return "Interessante reflectie. Bespreek dit met je partner om verder te verdiepen. ✨";
        }
    }

    // Naar de opdracht
    nextBtn.addEventListener("click", () => {
        loadTask();
    });

    function loadTask() {
        const task = tasks[currentDay % tasks.length];
        dayNumber.textContent = currentDay + 1;
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        option1.textContent = task.choices[0];
        option2.textContent = task.choices[1];

        taskSection.classList.remove("hidden");
        analysisSection.classList.add("hidden");
    }

    // Keuze-opties
    option1.addEventListener("click", () => showFeedback(option1.textContent));
    option2.addEventListener("click", () => showFeedback(option2.textContent));

    function showFeedback(choice) {
        feedbackMessage.textContent = `Goede keuze! "${choice}" is een belangrijke stap in jullie proces.`;
        feedbackSection.classList.remove("hidden");
        taskSection.classList.add("hidden");
        feedbackData[currentDay] = choice;
    }

    // Volgende dag
    nextDayBtn.addEventListener("click", () => {
        currentDay++;
        if (currentDay >= tasks.length) {
            alert("Nieuwe cyclus gestart! Jullie blijven groeien. ❤️");
            currentDay = 0;
        }
        document.getElementById("check-in-section").classList.remove("hidden");
        feedbackSection.classList.add("hidden");
    });
});
