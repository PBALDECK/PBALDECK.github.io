document.addEventListener('DOMContentLoaded', function() {
  function createPopup(id, title, content) {
    const popup = new Popup({
      id: id,
      title: title,
      content: content,
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

    const element = document.getElementById(id);
    element.addEventListener('click', function() {
      popup.show();
    });
  }

  createPopup('mercure', 'Mercure', `
    Type : Planète tellurique
    Taille (diamètre) : 4 880 km, soit environ 38 % de la taille de la Terre
    Masse : 1/20 de la masse de la Terre
    Longueur de l'année (période orbitale) : 88 jours
    Nombre de lunes : 0
    Distance moyenne du Soleil : 57,9 millions de kilomètres
    Température : Entre -173 et 427 °C
  `);

  createPopup('venus', 'Vénus', `
    Type : Planète tellurique
    Taille (diamètre) : 12 104 km, soit environ 95 % de la taille de la Terre
    Masse : 4/5 de la masse de la Terre
    Longueur de l'année (période orbitale) : 225 jours
    Nombre de lunes : 0
    Distance moyenne du Soleil : 108,2 millions de kilomètres
    Température : Environ 462 °C en moyenne
  `);

  createPopup('terre', 'Terre', `
    Type : Planète tellurique
    Taille (diamètre) : 12 742 km
    Masse : 5,97 × 10^24 kg
    Longueur de l'année (période orbitale) : 365,25 jours
    Nombre de lunes : 1 (La Lune)
    Distance moyenne du Soleil : 149,6 millions de kilomètres
    Température : Entre -89,2 °C et 58,8 °C
  `);

  createPopup('mars', 'Mars', `
    Type : Planète tellurique
    Taille (diamètre) : 6 779 km, soit environ 53 % de la taille de la Terre
    Masse : 1/10 de la masse de la Terre
    Longueur de l'année (période orbitale) : 687 jours
    Nombre de lunes : 2 (Phobos et Deimos)
    Distance moyenne du Soleil : 227,9 millions de kilomètres
    Température : Entre -153 °C et 20 °C
  `);

  createPopup('jupiter', 'Jupiter', `
    Type : Planète gazeuse
    Taille (diamètre) : 139 822 km, soit environ 11 fois la taille de la Terre
    Masse : 318 fois la masse de la Terre
    Longueur de l'année (période orbitale) : 11,9 années
    Nombre de lunes : 79
    Distance moyenne du Soleil : 778,3 millions de kilomètres
    Température : Environ -148 °C
  `);

  createPopup('saturne', 'Saturne', `
    Type : Planète gazeuse
    Taille (diamètre) : 116 464 km, soit environ 9,1 fois la taille de la Terre
    Masse : 95 fois la masse de la Terre
    Longueur de l'année (période orbitale) : 29,5 années
    Nombre de lunes : 82
    Distance moyenne du Soleil : 1,4 milliard de kilomètres
    Température : Environ -178 °C
  `);

  createPopup('uranus', 'Uranus', `
    Type : Planète gazeuse de glaces
    Taille (diamètre) : 50 724 km, soit environ 4 fois la taille de la Terre
    Masse : 14 fois la masse de la Terre
    Longueur de l'année (période orbitale) : 84 années
    Nombre de lunes : 27
    Distance moyenne du Soleil : 2,9 milliards de kilomètres
    Température : Environ -224 °C
  `);

  createPopup('neptune', 'Neptune', `
    Type : Planète gazeuse
    Taille (diamètre) : 49 244 km, soit environ 3,9 fois la taille de la Terre
    Masse : 17 fois la masse de la Terre
    Longueur de l'année (période orbitale) : 164,8 années
    Nombre de lunes : 14
    Distance moyenne du Soleil : 4,5 milliards de kilomètres
    Température : Environ -218 °C
  `);

  createPopup('pluton', 'Pluton', `
    Type : Planète naine
    Taille (diamètre) : 2 377 km, soit environ 18 % de la taille de la Terre
    Masse : Environ 0,002 fois la masse de la Terre
    Longueur de l'année (période orbitale) : 248 années
    Nombre de lunes : 5
    Distance moyenne du Soleil : 5,9 milliards de kilomètres
    Température : Environ -229 °C
  `);

  createPopup('lune', 'Lune', `
    Type : Satellite naturel (de la Terre)
    Taille (diamètre) : 3 474 km, soit environ 27 % de la taille de la Terre
    Masse : 1/81 de la masse de la Terre
    Longueur du mois (période orbitale) : 27,3 jours
    Distance moyenne de la Terre : 384 400 km
    Température : Entre -173 °C et 127 °C
  `);
});