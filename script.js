let isBulbOn = false;

function toggleBulb() {
    const bulbImage = document.getElementById('bulbImage');
    const toggleButton = document.getElementById('toggleButton');

    isBulbOn = !isBulbOn;
    
    if (isBulbOn) {
        bulbImage.src = 'light-on.png'; // Replace with your light on image path
        toggleButton.textContent = 'Switch Off';
    } else {
        bulbImage.src = 'light-off.png'; // Replace with your light off image path
        toggleButton.textContent = 'Switch On';
    }
}
