document.addEventListener('DOMContentLoaded', function () {
    const heartsContainer = document.querySelector('.hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 1 + 's';

        heart.innerHTML = '❤'; // Usando HTML para exibir o coração

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000); // Remove o coração após a animação
    }

    setInterval(createHeart, 250); // Cria um novo coração a cada 0,25 segundos
});
