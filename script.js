let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function navigateGallery(direction) {
    const container = document.getElementById('image-container');

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalImages;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    const offset = -currentIndex * 100; // Shift images by 100% each time
    container.style.transform = `translateX(${offset}%)`;
}
