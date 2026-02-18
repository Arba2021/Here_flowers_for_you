onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const playBtn = document.getElementById('playBtn');
  const bgMusic = document.getElementById('bgMusic');
  let played = false;

  function tryPlay() {
    if (!played) {
      bgMusic.play().then(() => {
        played = true;
        playBtn.textContent = '🔊';
        playBtn.classList.add('playing');
      }).catch(() => {});
    }
  }

  document.addEventListener('click', tryPlay, { once: true });
  document.addEventListener('touchstart', tryPlay, { once: true });
  document.addEventListener('scroll', tryPlay, { once: true });

  playBtn.addEventListener('click', async () => {
    try {
      await bgMusic.play();
      playBtn.textContent = '🔊';
      playBtn.classList.add('playing');
    } catch (err) {
      console.log('Audio play failed:', err);
    }
  });
};