function elementoVisivel(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Função para adicionar a classe de animação aos elementos visíveis
function animarElementos() {
    const elementos = document.querySelectorAll('.animado');
    elementos.forEach(el => {
        if (elementoVisivel(el)) {
            el.classList.add('visivel');
        }
    });
}

// Verifica o scroll e chama a função de animação
window.addEventListener('scroll', animarElementos);

// Chama a função no carregamento inicial da página, para o caso de elementos visíveis logo de cara
animarElementos();