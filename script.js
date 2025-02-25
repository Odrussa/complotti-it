function generaComplotto() {
    const complotti = [
        "La Terra è piatta e la NASA ci inganna! 🌍",
        "Il 5G sta controllando le nostre menti! 📡",
        "Gli Illuminati comandano tutto! 🛡️",
        "I rettiliani vivono tra di noi! 🦎",
        "Elon Musk è un alieno venuto dallo spazio! 🚀"
    ];

    const randomIndex = Math.floor(Math.random() * complotti.length);
    document.getElementById("risultato").innerText = complotti[randomIndex];
}


function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.left === "-250px") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-250px";
    }
}

function chiudiMenu() {
    const menu = document.getElementById("menu");
    menu.style.left = "-250px"; // Chiude il menu
}

function apriModale(immagine, titolo, descrizione, audio) {
    const modale = document.getElementById("modale");
    const modaleImmagine = document.getElementById("modale-immagine");
    const modaleTitolo = document.getElementById("modale-titolo");
    const modaleDescrizione = document.getElementById("modale-descrizione");
    const modaleAudioSection = document.getElementById("modale-audio-section");
    const modaleAudio = document.getElementById("modale-audio");

    // Imposta l'immagine, il titolo e la descrizione
    modaleImmagine.src = immagine;
    modaleTitolo.innerText = titolo;
    modaleDescrizione.innerText = descrizione;

    // Gestisci l'audio
    if (audio) {
        modaleAudio.querySelector("source").src = audio;
        modaleAudio.load(); // Ricarica l'audio
        modaleAudioSection.style.display = "block"; // Mostra la sezione audio
    } else {
        modaleAudioSection.style.display = "none"; // Nascondi la sezione audio
    }

    // Mostra la modale
    modale.style.display = "block";
}

function chiudiModale() {
    const modale = document.getElementById("modale");
    modale.style.display = "none";
}


function ricaricaPagina() {
    window.location.reload(); // Ricarica la pagina
}

