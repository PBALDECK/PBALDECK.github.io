document.addEventListener('DOMContentLoaded', function() {
    const vaisseau = document.getElementById('vaisseau');
    const espace = document.getElementById('espace');

    // Les distances des planètes par rapport au vaisseau (ajustées pour le centrage)
    const planetDistances = {
      mercure: 16666,
      venus: 31138,
      terre: 43053,
      mars: 65586,
      jupiter: 224041,
      saturne: 412397,
      uranus: 827961,
      neptune: 1295901,
      pluton: 1699774
    };

    let animationRequestId; // Variable pour stocker l'ID de la demande d'animation en cours

    // Fonction pour animer le vaisseau
    function animateVaisseau(element, distance, speed) {
      console.log('Animation du vaisseau en cours...');
      const startPosition = parseInt(element.style.marginLeft) || 0;
      let startTime = null;
      const duration = distance / speed * 1000;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = progress / duration;
        const currentDistance = percentage * distance;

        element.style.marginLeft = startPosition + currentDistance + 'px';
        espace.style.backgroundPositionX = -currentDistance + 'px'; // Fait défiler l'espace avec le vaisseau

        // Vérifie si le vaisseau a atteint exactement la distance prévue
        if (currentDistance >= distance) {
          console.log('Animation du vaisseau terminée.');
        } else {
          animationRequestId = window.requestAnimationFrame(step);
        }
      }

      // Démarre l'animation du vaisseau
      animationRequestId = window.requestAnimationFrame(step);
    }

    // Fonction pour arrêter le vaisseau à la planète la plus proche
    function stopAtNearestPlanet() {
      const currentMargin = parseInt(vaisseau.style.marginLeft) || 0;
      let nearestPlanet = null;
      let nearestDistance = Number.MAX_VALUE;

      // Recherche de la planète la plus proche
      for (const planet in planetDistances) {
        const distance = Math.abs(currentMargin - planetDistances[planet]);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPlanet = planet;
        }
      }

      if (nearestPlanet !== null) {
        const distanceToNearestPlanet = Math.abs(currentMargin - planetDistances[nearestPlanet]);
        const speed = 860; // Vitesse de défilement de la lumière (en pixels/seconde)
        animateVaisseau(vaisseau, distanceToNearestPlanet, speed);
      }
    }

    // Ajout de l'événement click au vaisseau pour déclencher l'animation
    vaisseau.addEventListener('click', function() {
      if (animationRequestId) {
        // Arrête l'animation en cours s'il y en a une
        cancelAnimationFrame(animationRequestId);
      }

      const currentMargin = parseInt(vaisseau.style.marginLeft) || 0;
      let nextPlanet = null;

      // Recherche de la prochaine planète à atteindre
      for (const planet in planetDistances) {
        if (planetDistances[planet] > currentMargin) {
          nextPlanet = planet;
          break;
        }
      }

      if (nextPlanet !== null) {
        const distanceToNextPlanet = planetDistances[nextPlanet] - currentMargin;
        animateVaisseau(vaisseau, distanceToNextPlanet, 5000); // Vitesse de défilement rapide
      }
    });
  });