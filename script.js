document.addEventListener("DOMContentLoaded", () => {
    const checkInPrompts = [
        "Wat voel je nu in je borst? Hoe zou je dit omschrijven?",
        "Hoe zwaar voelt je hoofd op een schaal van 1 tot 10?",
        "Waar voel je spanning in je lichaam?",
        "Hoe voelt je ademhaling op dit moment?",
        "Als je lichaam een kleur zou hebben, welke kleur zou het nu zijn?",
        "Beschrijf je energie als een batterij. Hoe vol is deze?",
        "Voelt je buik zwaar, licht of neutraal?",
        "Hoe voelen je handen? Warm, koud, gespannen?",
        "Beschrijf je schouders. Zijn ze ontspannen of gespannen?",
        "Als je voeten konden praten, wat zouden ze nu zeggen?",
        "Voel je ergens tintelingen in je lichaam? Waar?",
        "Hoe voelt je rug? Licht, zwaar of neutraal?",
        "Beschrijf je ademhaling als een rivier. Hoe stroomt deze?",
        "Hoe voelt je lichaam op dit moment als een geheel?",
    ];

    const exercises = [
        { title: "Ademruimte nemen", description: "Focus 3 minuten op je ademhaling. Wat merk je op? Beschrijf je ademhaling in woorden." },
        { title: "Emotionele woordenlijst", description: "Kies 3 emoties uit een lijst en beschrijf waar je ze voelt in je lichaam." },
        { title: "Spanning en ontspanning", description: "Span je schouders en laat los. Wat voel je tijdens de spanning en ontspanning?" },
        { title: "Innerlijke stem", description: "Schrijf een gesprek op tussen jouw 'kalme ik' en jouw 'gestreste ik'." },
        { title: "Ademhaling observeren", description: "Adem langzaam in en uit. Hoe verandert je lichaam tijdens deze oefening?" },
        { title: "Emoties tekenen", description: "Teken hoe je je vandaag voelt. Gebruik kleuren en vormen." },
        { title: "Fysieke scan", description: "Ga liggen en observeer je lichaam van hoofd tot teen. Waar voel je spanning?" },
        { title: "Woordenschat uitbreiden", description: "Zoek 5 nieuwe woorden voor emoties en probeer deze te gebruiken in een zin." },
        { title: "Lichaamstaal observeren", description: "Observeer jezelf in de spiegel. Wat zegt je lichaam vandaag?" },
        { title: "Triggers onderzoeken", description: "Schrijf een situatie op die een sterke emotie opriep. Waar voelde je dit in je lichaam?" },
        { title: "Dankbaarheid tonen", description: "Schrijf 3 dingen op waar je dankbaar voor bent en beschrijf hoe dat voelt." },
        { title: "Schrijf je ademhaling op", description: "Beschrijf hoe je ademhaling aanvoelt in verschillende situaties." },
        { title: "Complimenten geven", description: "Geef jezelf 3 complimenten. Wat voel je bij elk compliment?" },
        { title: "Eindreflectie", description: "Wat heb je in de afgelopen dagen geleerd over je emoties en lichaam?" },
    ];

    const checkOutPrompts = [
        "Wat voelde je in je lichaam tijdens de dag?",
        "Welke emotie kwam het meest voor vandaag?",
        "Waar voelde je rust in je lichaam?",
        "Welke situatie gaf je energie?",
        "Voelde je je ademhaling veranderen tijdens stress? Hoe?",
        "Welke kleur had je stemming vandaag?",
        "Voelde je spanning in je buik? Wanneer?",
        "Hoe voelde je je schouders aan het einde van de dag?",
        "Wat gaf je een glimlach vandaag? Hoe voelde dat?",
        "Welke situatie maakte je emotioneel? Hoe voelde dat in je lichaam?",
        "Waar voelde je kalmte? Hoe kun je dit vaker oproepen?",
        "Voelde je verschil in ademhaling tijdens rustmomenten?",
        "Welke beweging voelde goed vandaag?",
        "Wat heb je geleerd over je lichaam en emoties?",
    ];

    let currentDay = 0;

    const checkInPromptElement = document.getElementById("check-in-prompt");
    const exerciseTitleElement = document.getElementById("exercise-title");
    const exerciseDescriptionElement = document.getElementById("exercise-description");
    const checkOutPromptElement = document.getElementById("check-out-prompt");

    function loadDay() {
        checkInPromptElement.textContent = checkInPrompts[currentDay % checkInPrompts.length];
        const exercise = exercises[currentDay % exercises.length];
        exerciseTitleElement.textContent = exercise.title;
        exerciseDescriptionElement.textContent = exercise.description;
        checkOutPromptElement.textContent = checkOutPrompts[currentDay % checkOutPrompts.length];
    }

    loadDay();

    document.getElementById("check-in-btn").addEventListener("click", () => {
        document.getElementById("check-in-section").classList.add("hidden");
        document.getElementById("analysis-section").classList.remove("hidden");
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        document.getElementById("analysis-section").classList.add("hidden");
        document.getElementById("exercise-section").classList.remove("hidden");
    });

    document.getElementById("complete-exercise-btn").addEventListener("click", () => {
        document.getElementById("exercise-section").classList.add("hidden");
        document.getElementById("check-out-section").classList.remove("hidden");
    });

    document.getElementById("check-out-btn").addEventListener("click", () => {
        document.getElementById("check-out-section").classList.add("hidden");
        document.getElementById("sleep-section").classList.remove("hidden");
    });

    document.getElementById("next-day-btn").addEventListener("click", () => {
        currentDay++;
        loadDay();
        document.getElementById("sleep-section").classList.add("hidden");
        document.getElementById("check-in-section").classList.remove("hidden");
    });
});
