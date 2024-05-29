<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RGB Adjuster</title>
</head>
<body>
    <div>
        <label for="red-slider">Red</label>
        <input type="range" id="red-slider" class="slider" min="0" max="255" value="0">
    </div>
    <div>
        <label for="green-slider">Green</label>
        <input type="range" id="green-slider" class="slider" min="0" max="255" value="0">
    </div>
    <div>
        <label for="blue-slider">Blue</label>
        <input type="range" id="blue-slider" class="slider" min="0" max="255" value="0">
    </div>
    <div>
        <img id="image" src="your-image.jpg" alt="Image">
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const redSlider = document.getElementById('red-slider');
            const greenSlider = document.getElementById('green-slider');
            const blueSlider = document.getElementById('blue-slider');
            const image = document.getElementById('image');

            function updateImage() {
                const r = redSlider.value;
                const g = greenSlider.value;
                const b = blueSlider.value;
                image.style.filter = `none`; // Reset filter
                image.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }

            redSlider.addEventListener('input', updateImage);
            greenSlider.addEventListener('input', updateImage);
            blueSlider.addEventListener('input', updateImage);

            updateImage();
        });
    </script>
</body>
</html>
