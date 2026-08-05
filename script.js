const enveloppe = document.querySelector(".enveloppe");

const enveloppeScreen = document.getElementById("enveloppeScreen");

const lettreScreen = document.getElementById("lettreScreen");

// Quand on clique sur l'enveloppe

enveloppe.addEventListener("click", function () {

    // Animation d'ouverture

    enveloppe.classList.add("ouverte");

    // Après l'animation, on affiche la lettre

    setTimeout(function () {

        enveloppeScreen.style.display = "none";

        lettreScreen.classList.remove("cache");

    }, 900);

});
const boutonNon = document.getElementById("non");

const messageNon = document.getElementById("messageNon");

let nombreClicsNon = 0;

const messagesNon = [

    "Tu es vraiment sûre ? 🥺",

    "Tu veux vraiment me refuser ? 😭",

    "Ehh stp 😭❤️"

];

boutonNon.addEventListener("click", function () {

    nombreClicsNon++;

    if (nombreClicsNon <= 3) {

        messageNon.textContent = messagesNon[nombreClicsNon - 1];

    }

    if (nombreClicsNon >= 3) {

        boutonNon.style.position = "fixed";

        deplacerBouton();

    }

});

function deplacerBouton() {

    const largeur = boutonNon.offsetWidth;

    const hauteur = boutonNon.offsetHeight;

    const maxX = window.innerWidth - largeur - 20;

    const maxY = window.innerHeight - hauteur - 20;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    boutonNon.style.left = x + "px";

    boutonNon.style.top = y + "px";

}
// =========================

// BOUTON OUI

// =========================

const boutonOui = document.getElementById("oui");

const dateScreen = document.getElementById("dateScreen");

const lieu = document.getElementById("lieu");

const monLieu = "Hotel ivoire ❤️";

boutonOui.onclick = function () {

    // Mettre le lieu à jour

    lieu.textContent = monLieu;

    // Cacher la lettre

    lettreScreen.classList.add("cache");

    enveloppeScreen.classList.add("cache");

    // Afficher la page du date

    dateScreen.classList.remove("cache");

    dateScreen.style.display = "flex";

};

 // =========================

// BOUTON CONFIRMER

// =========================

const boutonConfirmer = document.getElementById("confirmer");

const champDate = document.getElementById("date");

const champHeure = document.getElementById("heure");

const petitMot = document.getElementById("petitMot");

const erreur = document.getElementById("erreur");

const finalScreen = document.getElementById("finalScreen");

boutonConfirmer.onclick = function () {

    erreur.textContent = "";

    // Vérifier le jour

    if (champDate.value === "") {

        erreur.textContent = "Choisis d'abord un jour 📅❤️";

        return;

    }

    // Vérifier l'heure

    if (champHeure.value === "") {

        erreur.textContent = "Choisis d'abord une heure 🕒❤️";

        return;

    }

    // Cacher la page du date

    dateScreen.classList.add("cache");

    // Afficher la page finale

    finalScreen.classList.remove("cache");

    finalScreen.style.display = "flex";

};
