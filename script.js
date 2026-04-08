* { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: 'Arial', sans-serif;
  background: #333; /* fundo cinza escuro */
  color: #fff; /* texto branco */
}

nav {
  display:flex; justify-content:space-between; align-items:center;
  padding:15px 20px;
  background:#6200ee; color:white;
  position:sticky; top:0; z-index:1000;
}

nav .logo { font-weight:bold; font-size:1.2em; }
nav ul { list-style:none; display:flex; gap:15px; }
nav ul li a { color:white; text-decoration:none; }
nav ul li a:hover { text-decoration:underline; }

.hero { position:relative; text-align:center; color:white; }
.hero img { width:100%; height:400px; object-fit:cover; filter:brightness(70%); }
.hero-text { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); }

section {
  padding:30px 20px; max-width:900px; margin:20px auto;
  background:#444; border-radius:10px;
}

h2 { color:#ff9800; margin-bottom:15px; }

ul li { margin-bottom:10px; }

.gallery img { width:300px; border-radius:10px; margin:10px; }
figure figcaption { margin-top:5px; font-size:0.9em; color:#ddd; }

.timeline-container { position:relative; max-width:900px; margin:auto; padding:40px 0; }
.timeline-container::after { content:''; position:absolute; width:4px; background-color:#ff9800; top:0; bottom:0; left:50%; margin-left:-2px; }

.timeline-card { padding:20px; position:relative; width:45%; }
.timeline-card.left { left:0; }
.timeline-card.right { left:55%; }
.timeline-card::after { content:''; position:absolute; width:20px; height:20px; background-color:#ff9800; border:4px solid #333; top:20px; border-radius:50%; z-index:1; }
.timeline-card.left::after { right:-10px; }
.timeline-card.right::after { left:-10px; }
.timeline-card .content { padding:20px; background:#555; border-radius:10px; }

iframe { border-radius:10px; }

.fade-in { opacity:0; transform:translateY(20px); transition:0.8s; }
.fade-in.show { opacity:1; transform:translateY(0); }

footer { text-align:center; padding:15px; background:#6200ee; color:white; margin-top:20px; }

@media(max-width:768px){
  .timeline-card { width:100%; left:0 !important; margin-bottom:30px; }
  .timeline-card::after { left:50%; margin-left:-10px; }
  .gallery img { width:100%; }
  nav ul { flex-wrap:wrap; gap:10px; }
}// FADE IN
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
