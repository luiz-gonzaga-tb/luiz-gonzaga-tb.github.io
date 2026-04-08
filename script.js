// Fade-in ao scroll
const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});

// Áudio
function playAudio(id){
  const audio = document.getElementById(id);
  if(audio){ audio.currentTime=0; audio.play(); }
}
