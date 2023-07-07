document.addEventListener('DOMContentLoaded', function() {
  var btnVitesseLumiere = document.getElementById('btnVitesseLumiere');
  var vaisseau = document.getElementById('vaisseau');
  var isScrolling = false; // Indicateur de défilement en cours
  var scrollSpeed = 86; // Vitesse de défilement initiale (en pixels/seconde)
  var vaisseauDistance = 1699774; // Distance que le vaisseau va parcourir (en pixels)
  var isHighSpeed = false; // Indicateur de vitesse élevée

  btnVitesseLumiere.addEventListener('click', function(event) {
    event.preventDefault();

    if (isHighSpeed) {
      scrollSpeed = 860; // Vitesse de défilement de la lumière (en pixels/seconde)
      isHighSpeed = false;
    } else {
      scrollSpeed = 86; // Vitesse de défilement 10 fois la vitesse de la lumière (en pixels/seconde)
      isHighSpeed = true;
    }

    animateVaisseau(vaisseau, vaisseauDistance, scrollSpeed);
    isScrolling = true;
  });
});

function animateVaisseau(element, distance, speed) {
  var startPosition = parseInt(element.style.marginLeft) || 0;
  var startTime = null;
  var duration = distance / speed * 1000;

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