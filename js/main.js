const button = document.getElementById('changeImageButton');
    const image = document.getElementById('image');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the image source
    image.src = 'mv.png';
});