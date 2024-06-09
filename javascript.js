document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            
            seeMoreText.textContent = item.querySelector('.text').textContent;
        });
    });
});
