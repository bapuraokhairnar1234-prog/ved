// Background sound
const audio = new Audio("https://cdn.pixabay.com/download/audio/2021/08/08/audio_1a8457a3b1.mp3?filename=futuristic-ambience-6290.mp3");
audio.loop = true;
audio.volume = 0.3;
audio.play().catch(() => {
  console.log("Autoplay blocked; will start on user interaction.");
  document.body.addEventListener('click', () => audio.play(), { once: true });
});

// Egg burst effect
function addBurstEffect(egg) {
  egg.classList.add('burst');
  const pop = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
  pop.play();

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.background = '#00eaff';
    particle.style.borderRadius = '50%';
    particle.style.left = egg.offsetLeft + egg.offsetWidth / 2 + 'px';
    particle.style.top = egg.offsetTop + egg.offsetHeight / 2 + 'px';
    document.body.appendChild(particle);

    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;
    particle.animate([
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ], { duration: 700, easing: 'ease-out' });
    setTimeout(() => particle.remove(), 700);
  }

  setTimeout(() => egg.classList.remove('burst'), 800);
}
