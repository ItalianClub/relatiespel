
/* Algemene styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f3f2ef; /* Zachte achtergrondkleur */
    color: #333; /* Donkergrijze tekstkleur */
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 50px auto; /* Center het spel op het scherm */
    text-align: center;
    background-color: white; /* Witte achtergrond voor contrast */
    padding: 20px;
    border-radius: 10px; /* Ronde hoeken */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Schaduw voor diepte */
}

h1 {
    font-size: 2em; /* Grote titel */
    color: #9c1925; /* Italiaanse roodtint */
    margin-bottom: 20px;
}

p {
    font-size: 1.2em; /* Leessbare tekstgrootte */
    margin-bottom: 20px;
    line-height: 1.6; /* Betere leesbaarheid */
}

textarea {
    width: 100%; /* Tekstvak vult de breedte */
    height: 100px; /* Voldoende ruimte voor tekst */
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none; /* Gebruiker kan het tekstvak niet schalen */
    margin-top: 20px;
    background-color: #f9f9f9;
}

textarea::placeholder {
    color: #aaa; /* Lichte kleur voor de placeholder tekst */
}

.btn {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #9c1925; /* Rood voor opvallende knoppen */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 20px;
}

.btn:hover {
    background-color: #b3212f; /* Donkerder rood bij hover */
    transform: scale(1.05); /* Lichte vergroting bij hover */
}

.hidden {
    display: none; /* Verbergt elementen */
}

#daily-task p {
    font-size: 1.1em;
    margin-bottom: 10px;
    color: #555; /* Zachte grijze kleur */
}

@media (max-width: 768px) {
    .container {
        padding: 15px;
        margin: 20px auto;
    }

    h1 {
        font-size: 1.8em;
    }

    p {
        font-size: 1.1em;
    }

    .btn {
        font-size: 0.9em;
        padding: 8px 15px;
    }

    textarea {
        height: 80px;
    }
}
