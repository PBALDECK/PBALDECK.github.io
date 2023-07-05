document.addEventListener('DOMContentLoaded', function() {
    var vaisseau = document.getElementById('vaisseau');
    var animationId; // Identifiant de l'animation du vaisseau
    var planetes = [
      { id: 'mercure', position: 16666 },
      { id: 'venus', position: 14472 },
      { id: 'terre', position: 11915 },
      { id: 'mars', position: 22533 },
      { id: 'jupiter', position: 158455 },
      { id: 'saturne', position: 188356 },
      { id: 'uranus', position: 415564 },
      { id: 'neptune', position: 467940 },
      { id: 'pluton', position: 403873 }
    ];
    var currentPlanetIndex = 0; // Index de la planète actuelle
  
    // Ajouter un gestionnaire d'événement clic au vaisseau
    vaisseau.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Récupérer la position de la prochaine planète
      var nextPlanetPosition = planetes[currentPlanetIndex].position;
  
      var documentWidth = 1699774; // Distance maximale à faire défiler (en pixels)
      var scrollSpeed = 8600; // Vitesse de défilement (en pixels/seconde)
      var vaisseauDistance = nextPlanetPosition - 100; // Distance que le vaisseau va parcourir (position de la prochaine planète - décalage)
      var vaisseauDuration = vaisseauDistance / scrollSpeed * 1000; // Durée totale de l'animation du vaisseau
      var scrollDuration = documentWidth / scrollSpeed * 1000; // Durée totale du défilement
  
      // Annuler l'animation précédente du vaisseau si elle est en cours
      cancelAnimationFrame(animationId);
  
      // Déclencher l'animation du vaisseau vers la prochaine planète
      animateVaisseau(vaisseau, vaisseauDistance, vaisseauDuration, function() {
        // Déclencher le défilement après l'animation du vaisseau
        scrollHorizontally(documentWidth, nextPlanetPosition, scrollSpeed, scrollDuration);
      });
  
      // Passer à la prochaine planète
      currentPlanetIndex++;
  
      // Si on atteint la dernière planète, revenir à la première
      if (currentPlanetIndex === planetes.length) {
        currentPlanetIndex = 0;
      }
    });
  });
  
  function animateVaisseau(element, distance, duration, callback) {
    var startPosition = parseInt(element.style.marginLeft) || 0;
    var startTime = null;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percentage = progress / duration;
      var currentDistance = percentage * distance;
  
      element.style.marginLeft = startPosition + currentDistance + 'px';
  
      if (progress < duration) {
        animationId = window.requestAnimationFrame(step);
      } else {
        callback();
      }
    }
  
    animationId = window.requestAnimationFrame(step);
  }
  
  function scrollHorizontally(documentWidth, targetOffset, speed, duration) {
    var startPosition = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
    var startTime = null;
    var scrollDistance = targetOffset - startPosition;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var scrollAmount = Math.floor((progress / duration) * scrollDistance);
  
      window.scrollTo(startPosition + scrollAmount, 0);
  
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }