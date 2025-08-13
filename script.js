class ProductCarousel {
    constructor() {
        this.currentIndex = 0;
        this.totalProducts = 6;
        // Movimiento = ancho del cuadrado (303px) + margen (18px) = 321px
        this.slideDistance = 321;
        
        this.track = document.getElementById('carouselTrack');
        this.progressIndicator = document.getElementById('progressIndicator');
        this.prevButton = document.getElementById('prevButton');
        this.nextButton = document.getElementById('nextButton');
        this.prevChevron = document.getElementById('prevChevron');
        this.nextChevron = document.getElementById('nextChevron');
        
        this.init();
    }

    init() {
        this.updateCarousel();
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());
    }

    nextSlide() {
        // Limitar a solo 6 productos (0, 1, 2, 3, 4, 5)
        if (this.currentIndex < this.totalProducts - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Volver al inicio
        }
        this.updateCarousel();
    }

    prevSlide() {
        // Limitar a solo 6 productos (0, 1, 2, 3, 4, 5)
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.totalProducts - 1; // Ir al final
        }
        this.updateCarousel();
    }

    updateCarousel() {
        const translateX = -(this.currentIndex * this.slideDistance);
        this.track.style.transform = `translateX(${translateX}px)`;

        // Para 6 posiciones exactamente dentro de 236px con indicador de 35px
        // Espacio disponible: 236px - 35px = 201px
        const maxPosition = 201; // Rango ajustado para que termine exactamente en el borde
        const indicatorPosition = (this.currentIndex * maxPosition) / (this.totalProducts - 1);
        this.progressIndicator.style.transform = `translateX(${indicatorPosition}px)`;

        if (this.currentIndex === 0) {
            this.prevChevron.classList.remove('chevron-active');
            this.prevChevron.classList.add('chevron-inactive');
        } else {
            this.prevChevron.classList.remove('chevron-inactive');
            this.prevChevron.classList.add('chevron-active');
        }

        if (this.currentIndex === this.totalProducts - 1) {
            this.nextChevron.classList.remove('chevron-active');
            this.nextChevron.classList.add('chevron-inactive');
        } else {
            this.nextChevron.classList.remove('chevron-inactive');
            this.nextChevron.classList.add('chevron-active');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new ProductCarousel();
});