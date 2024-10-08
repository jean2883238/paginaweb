const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

// Animación para el botón "No"
noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.animation = 'moveNoButton 1s infinite';
});

// Mensaje para el botón "Sí"
yesBtn.addEventListener('click', () => {
    message.textContent = 'Te sigo amando como siempre mi Gardenia Ojala en un futuro vuelvas a mi❤';
});