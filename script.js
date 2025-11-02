// Select all eggs
const eggs = document.querySelectorAll('.egg');

// Burst sound
const burstSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_140c8b9e94.mp3?filename=pop-94319.mp3');
burstSound.volume = 0.3;

// Egg click burst animation
eggs.forEach(egg => {
  egg.addEventListener('click', () => {
    if (!egg.classList.contains('burst')) {
      egg.classList.add('burst');
      burstSound.currentTime = 0;
      burstSound.play();

      setTimeout(() => {
        egg.classList.remove('burst');
      }, 600);
    }
  });
});

// Background hum (futuristic vibe)
const bgHum = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_2b4b0ab54a.mp3?filename=futuristic-soundscape-6087.mp3');
bgHum.loop = true;
bgHum.volume = 0.1;

// Try auto-play sound after user scrolls/taps
window.addEventListener('scroll', () => {
  if (bgHum.paused) bgHum.play().catch(() => {});
});

// Move eggs slightly on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  eggs.forEach((egg, i) => {
    const move = Math.sin(scrollY * 0.01 + i) * 20;
    egg.style.transform = `translateX(${move}px) rotateY(${scrollY % 360}deg)`;
  });
});
