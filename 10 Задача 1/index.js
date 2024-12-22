const thumbnails = document.querySelectorAll('.thumb');
const fullsizeImage = document.getElementById('fullsize-image');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const fullsizeUrl = thumb.getAttribute('data-fullsize');
        fullsizeImage.src = fullsizeUrl;
    });
});