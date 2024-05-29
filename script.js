document.addEventListener('DOMContentLoaded', function() {
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const imageContainer = document.getElementById('image-container');

    function updateImage() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;
        imageContainer.style.filter = `brightness(${r}) contrast(${g}) saturate(${b})`;
    }

    redSlider.addEventListener('input', updateImage);
    greenSlider.addEventListener('input', updateImage);
    blueSlider.addEventListener('input', updateImage);

    updateImage();
});
