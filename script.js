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
