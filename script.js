document.addEventListener('DOMContentLoaded', function() {
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = 'your-image.jpg'; // 替换为你的图片路径

    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;
        updateImage();
    };

    function updateImage() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const rAdjust = redSlider.value / 255;
        const gAdjust = greenSlider.value / 255;
        const bAdjust = blueSlider.value / 255;

        for (let i = 0; i < data.length; i += 4) {
            data[i] = data[i] * rAdjust;     // Red
            data[i + 1] = data[i + 1] * gAdjust; // Green
            data[i + 2] = data[i + 2] * bAdjust; // Blue
        }

        ctx.putImageData(imageData, 0, 0);
    }

    redSlider.addEventListener('input', updateImage);
    greenSlider.addEventListener('input', updateImage);
    blueSlider.addEventListener('input', updateImage);
});
