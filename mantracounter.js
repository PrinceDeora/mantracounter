// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const container = document.querySelector('.container');

    // Automatically transition to the main app after 3 seconds
    setTimeout(() => {
        intro.style.display = 'none'; // Hide the intro
        container.classList.remove('hidden'); // Show the main app
    }, 3500); // Wait for the intro animation to finish
});

// Existing JavaScript functionality
let count = 0;
let autoCountInterval = null;

const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const startAutoButton = document.getElementById('startAutoButton');
const mantraInput = document.getElementById('mantraInput');

// Increment the count
incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Reset the count
resetButton.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    clearInterval(autoCountInterval);
    autoCountInterval = null;
    startAutoButton.textContent = "Start Auto Counting";
});

// Start automatic counting
startAutoButton.addEventListener('click', () => {
    if (autoCountInterval === null) {
        autoCountInterval = setInterval(() => {
            count++;
            updateDisplay();
        }, 1000);
        startAutoButton.textContent = "Stop Auto Counting";
    } else {
        clearInterval(autoCountInterval);
        autoCountInterval = null;
        startAutoButton.textContent = "Start Auto Counting";
    }
});

// Update the counter display
function updateDisplay() {
    countDisplay.textContent = count;
    countDisplay.style.animation = "pulse 0.5s ease";
    setTimeout(() => {
        countDisplay.style.animation = "none";
    }, 500);
}
