let count = 0;
let autoCountInterval = null;

// DOM elements
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const startAutoButton = document.getElementById('startAutoButton');
const mantraInput = document.getElementById('mantraInput');

// Increment the count
incrementButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// Reset the count
resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
    clearInterval(autoCountInterval);
    autoCountInterval = null;
    startAutoButton.textContent = "Start Automatic Counting";
});

// Start automatic counting
startAutoButton.addEventListener('click', () => {
    if (autoCountInterval === null) {
        autoCountInterval = setInterval(() => {
            count++;
            countDisplay.textContent = count;
        }, 1000); // Increment every second
        startAutoButton.textContent = "Stop Automatic Counting";
    } else {
        clearInterval(autoCountInterval);
        autoCountInterval = null;
        startAutoButton.textContent = "Start Automatic Counting";
    }
});

// Optional: Update the mantra text (you could implement further usage here)
mantraInput.addEventListener('input', () => {
    let mantra = mantraInput.value;
    // This could be displayed somewhere else, saved, or utilized in future features
    console.log("Mantra Input:", mantra);
});
