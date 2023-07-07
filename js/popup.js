document.addEventListener('DOMContentLoaded', function() {
  // Créer le popup
  const popup = new Popup({
    id: "merc",
    title: "Chiffres Mercure",
    content: `
    Type : Planète tellurique
    Taille (diamètre) : 4 880 km, soit environ 38 % de la taille de la Terre
    Masse : 1/20 de la masse de la Terre
    Longueur de l'année (période orbitale) : 88 jours
    Nombre de lunes	: 0
    Distance moyenne du Soleil : 57,9 millions de kilomètres
    Température : Entre -173 et 427 °C
        `,
    backgroundColor: "#000",
    titleColor: "#fff",
    textColor: "#fff",
    closeColor: "#fff",
    borderWidth: ".01em",
    borderColor: "#fff",
    linkColor: "#fff",
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
});

  // Ajouter un gestionnaire d'événements au clic sur l'élément
  const myElement = document.getElementById("merclabel");
  myElement.addEventListener('click', function() {
    popup.show(); // Afficher le popup
  });
});