document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-img');
    const total = images.length;
    let idx = 0;

    function showImage(i) {
        images.forEach((img, k) => img.classList.toggle('active', k === i));
    }

    document.getElementById('slider-left').addEventListener('click', function() {
        idx = (idx - 1 + total) % total;
        showImage(idx);
    });

    document.getElementById('slider-right').addEventListener('click', function() {
        idx = (idx + 1) % total;
        showImage(idx);
    });

    document.querySelector('.hero-slider').addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            idx = (idx - 1 + total) % total;
            showImage(idx);
        }
        if (e.key === 'ArrowRight') {
            idx = (idx + 1) % total;
            showImage(idx);
        }
    });
});