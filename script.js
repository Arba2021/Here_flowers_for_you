onload = () => {
const c = setTimeout(() => {
document.body.classList.remove("not-loaded");
clearTimeout(c);
}, 1000);
};

const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');

playBtn.addEventListener('click', async () => {
try {
await bgMusic.play();
playBtn.textContent = '🔊';
playBtn.classList.add('playing');
} catch (err) {
console.log('Audio play failed:', err);
}
});

bgMusic.addEventListener('ended', () => {
playBtn.textContent = '🎵';
playBtn.classList.remove('playing');
});

document.addEventListener('touchstart', () => {}, { passive: true });