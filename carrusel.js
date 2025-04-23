document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector(".carousel-images");
        const images = imagesContainer.querySelectorAll("img");
        const prevBtn = carousel.querySelector(".carousel-btn.prev");
        const nextBtn = carousel.querySelector(".carousel-btn.next");

        let currentIndex = 0;

        function updateCarousel() {
            const width = carousel.clientWidth;
            imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
        }

        nextBtn?.addEventListener("click", () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn?.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        window.addEventListener("resize", updateCarousel);
    });
});
