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
    };

    const progressIndicator = document.createElement("p");
    progressIndicator.id = "progress-indicator";
    progressIndicator.textContent = `Dag ${currentDay} van ${totalDays}`;
    document.querySelector(".container").insertBefore(progressIndicator, sections.checkIn);

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
        { title: "Emoties Tekenen", description: "Kies een emotie die je vandaag hebt gevoeld. Teken deze emotie zonder woorden te gebruiken. Gebruik kleuren en vormen die voor jou passen." },
        { title: "Lichaamsscan", description: "Scan je lichaam van je tenen tot je kruin. Stel jezelf de vraag: Wat voel ik in elk deel van mijn lichaam? Noteer de fysieke sensaties." },
        { title: "Triggers Herkennen", description: "Schrijf een situatie op die een sterke emotie opriep. Wat was de aanleiding (trigger)? Hoe reageerde je op deze emotie?" },
        { title: "Innerlijke Stem Dialoog", description: "Schrijf een gesprek op tussen jouw ‘kalme ik’ en jouw ‘emotionele ik’. Wat heeft je emotionele ik nodig?" },
        { title: "Emoties in Kleur", description: "Kies een kleur die jouw stemming vandaag vertegenwoordigt. Schrijf waarom je voor deze kleur kiest." },
        { title: "Dankbaarheid en Emotie", description: "Schrijf drie dingen op waar je vandaag dankbaar voor bent. Beschrijf hoe deze dingen je laten voelen." },
        { title: "Spiegelwerk", description: "Kijk 5 minuten in de spiegel. Wat zegt je gezichtsuitdrukking over je emoties? Reflecteer op wat je ziet." },
        { title: "Emotionele Overgang", description: "Denk aan een moment waarop je emotie veranderde. Wat was de aanleiding? Hoe voelde je je vóór en ná de verandering?" },
        { title: "Jouw Emotionele Schatkaart", description: "Teken een lichaamssilhouet en markeer waar je emoties voelt. Welke plekken zijn vaak betrokken bij positieve of negatieve emoties?" },
        { title: "Emotionele Woordenschat", description: "Kies een emotie die je vandaag voelde en zoek 3 synoniemen. Helpen deze woorden je beter te begrijpen wat je voelt?" },
        { title: "Compassie voor Jezelf", description: "Schrijf een brief aan jezelf waarin je jouw emoties van vandaag erkent. Gebruik zinnen zoals: 'Het is oké dat ik me zo voelde'." },
        { title: "Eindreflectie", description: "Kijk terug op de afgelopen 14 dagen. Wat heb je geleerd over je lichaam en gevoelens? Schrijf 3 manieren waarop je jezelf beter begrijpt." },
    ];

    const checkOutPrompts = [
        "Wat heb je vandaag geleerd over je lichaam en emoties?",
        "Welke momenten brachten je rust of spanning?",
        "Wat voelde je tijdens de oefening? Waar in je lichaam merkte je dat?",
        "Welke gedachten hielpen je vandaag vooruit?",
        "Hoe kun je morgen een moment van rust creëren?",
        "Welke emoties herken je nu beter? Hoe voel je dat?",
        "Wat gaf je vandaag een glimlach? Hoe voelde dat?",
        "Waar voel je nu rust in je lichaam? Hoe kwam dat?",
        "Welke situaties maakten je emotioneel? Waar voelde je dat?",
        "Wat bracht je vandaag kalmte? Hoe kun je dat vaker oproepen?",
        "Wat leerde je vandaag over je ademhaling?",
        "Welke beweging voelde goed vandaag? Waarom?",
        "Wat was het meest waardevolle inzicht van vandaag?",
        "Hoe heeft deze dag je geholpen om te groeien?",
    ];

    const loadDayContent = () => {
        document.getElementById("check-in-prompt").textContent = checkInPrompts[currentDay - 1];
        const exercise = exercises[currentDay - 1];
        document.getElementById("exercise-title").textContent = exercise.title;
        document.getElementById("exercise-description").textContent = exercise.description;
        document.getElementById("check-out-prompt").textContent = checkOutPrompts[currentDay - 1];
        document.getElementById("day-number").textContent = `Dag ${currentDay}`;
        progressIndicator.textContent = `Dag ${currentDay} van ${totalDays}`;
    };

    const showSection = (sectionId) => {
        Object.values(sections).forEach(section => section.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");
    };

    buttons.checkIn.addEventListener("click", () => showSection("analysis-section"));
    buttons.next.addEventListener("click", () => showSection("exercise-section"));
    buttons.completeExercise.addEventListener("click", () => showSection("check-out-section"));
    buttons.checkOut.addEventListener("click", () => showSection("sleep-section"));

    buttons.nextDay.addEventListener("click", () => {
        if (currentDay < totalDays) {
            currentDay++;
            loadDayContent();
            showSection("check-in-section");
        } else {
            alert("Gefeliciteerd! Je hebt alle 14 dagen voltooid.");
            buttons.nextDay.disabled = true;
        }
    });

    buttons.prevDay.addEventListener("click", () => {
        if (currentDay > 1) {
            currentDay--;
            loadDayContent();
            showSection("check-in-section");
        }
    });

    loadDayContent();
});
