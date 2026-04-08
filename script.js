console.log("Site Luiz Gonzaga carregado com sucesso!");

/* hamburguer */
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
