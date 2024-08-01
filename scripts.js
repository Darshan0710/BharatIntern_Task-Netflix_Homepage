// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.movie-slider');

    sliders.forEach(slider => {
        slider.addEventListener('wheel', (e) => {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        });
    });
});
