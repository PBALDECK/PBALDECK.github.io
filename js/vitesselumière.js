document.addEventListener('DOMContentLoaded', function() {
    var vitesseLumiere = document.getElementById('vitesselumière');
    var vaisseau = document.getElementById('vaisseau');
    var isScrolling = false; // Indicateur de défilement en cours
  
    vitesseLumiere.addEventListener('click', function(event) {
      event.preventDefault();
      var documentWidth = 1699774; // Distance maximale à faire défiler (en pixels)
      var scrollSpeed = 86; // Vitesse de défilement (en pixels/seconde)
      var vaisseauDistance = documentWidth; // Distance que le vaisseau va parcourir (même que le défilement)
      var duration = vaisseauDistance / scrollSpeed * 1000; // Durée totale de l'animation du vaisseau
  
      // Si le défilement est en cours, recharger la page pour l'interrompre
      if (isScrolling) {
        location.reload();
      } else {
        animateVaisseau(vaisseau, vaisseauDistance, duration);
        scrollHorizontally(documentWidth, scrollSpeed);
        isScrolling = true;
      }
    });
  });
  
  function animateVaisseau(element, distance, duration) {
    var startPosition = parseInt(element.style.marginLeft) || 0;
    var startTime = null;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percentage = progress / duration;
      var currentDistance = percentage * distance;
  
      element.style.marginLeft = startPosition + currentDistance + 'px';
  
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  
  function scrollHorizontally(distance, speed) {
    var startPosition = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
    var startTime = null;
    var duration = distance / speed * 1000;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var scrollAmount = Math.floor((progress / duration) * distance);
  
      window.scrollTo(scrollAmount, 0);
  
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }