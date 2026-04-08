// FADE IN
const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if(position < screen-100){ el.classList.add('show'); }
  });
});

// ÁUDIO
function playAudio(id){
  const audio = document.getElementById(id);
  if(audio){ audio.currentTime=0; audio.play(); }
}

// MODO ESCURO
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click',()=>{ document.body.classList.toggle('dark'); });// FADE IN
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.classList.add('show');
    }
  });
});

// ÁUDIO
function playAudio(id) {
  const audio = document.getElementById(id);
  if(audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

// MODO ESCURO
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.classList.add('show');
    }
  });
});
