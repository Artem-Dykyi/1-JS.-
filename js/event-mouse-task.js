const scrollGallery = document.querySelector('.gallery');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        scrollGallery.scrollBy({ left: 50});
    } else if (event.key === 'ArrowLeft') {
        scrollGallery.scrollBy({ left: -50});
    }
});



