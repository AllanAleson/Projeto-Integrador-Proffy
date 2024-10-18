const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const cardsVisible = 3; // Número de cards visíveis
const totalCards = cards.length; // Total de cards

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 20; // Espaço entre os cards
    carousel.style.transform = `translateX(${-currentIndex * (cardWidth + gap)}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - cardsVisible) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Atualizar o carrossel se a janela for redimensionada
window.addEventListener('resize', updateCarousel);
