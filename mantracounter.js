let count = parseInt(localStorage.getItem('count')) || 0; // Load saved count or start at 0
let autoCountInterval = null;

// DOM elements
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const startAutoButton = document.getElementById('startAutoButton');
const mantraInput = document.getElementById('mantraInput');

// Display the initial count
countDisplay.textContent = count;

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
    startAutoButton.textContent = "Start Automatic Counting";
});

// Start automatic counting
startAutoButton.addEventListener('click', () => {
    if (autoCountInterval === null) {
        autoCountInterval = setInterval(() => {
            count++;
            updateDisplay();
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
    console.log("Mantra Input:", mantra);
});

// Update display and save count
function updateDisplay() {
    countDisplay.textContent = count;
    localStorage.setItem('count', count); // Save the count in localStorage
}
