document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const container = document.querySelector('.container');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const nameInput = document.getElementById('nameInput');
    const nameSubmitButton = document.getElementById('nameSubmitButton');
    const countDisplay = document.getElementById('countDisplay');
    const incrementButton = document.getElementById('incrementButton');
    const resetButton = document.getElementById('resetButton');

    // Map of specific names to their custom greetings
    const customGreetings = {
        "sonu": "Welcome Mumma 🌼",
        "chandan":"Welcome Mumma🌼",
        "vikramsingh": "Welcome Daddy 🌟",
        "nathu": "Welcome Bade Mausi 🌼",
        "jyoti": "Welcome Mausi 🌟",
        "devendrasingh": "Welcome Mausa Ji 🌟",
        "viram": "Welcome Mama 🌼",
        "ajaysingh": "Welcome Mausa Ji 🌟",
        "rajendra": "Welcome Mamisa 🌼",
        "kesarsingh": "Welcome Nanaji 🌟",
        "meerakanwar": "Welcome Nanisa 🌸"
    };

    // Smoothly transition from intro to main app (2-3 seconds visible intro)
    setTimeout(() => {
        intro.classList.add('hidden'); // Add the hidden class for smooth fade-out
        setTimeout(() => {
            container.classList.remove('hidden'); // Show the main app after fade-out
        }, 2000); // Wait for the fade-out transition to complete
    }, 2500); // Intro stays for 2.5 seconds before transition

    // Update welcome message based on name
    nameSubmitButton.addEventListener('click', () => {
        // Normalize input by removing spaces and converting to lowercase
        const normalizedName = nameInput.value.trim().replace(/\s+/g, "").toLowerCase();

        // Check if the entered name has a custom greeting
        if (customGreetings[normalizedName]) {
            welcomeMessage.textContent = customGreetings[normalizedName];
            welcomeMessage.classList.add('custom');

            // Remove animation after 5 seconds
            setTimeout(() => {
                welcomeMessage.classList.remove('custom');
            }, 5000);
        } else {
            welcomeMessage.textContent = `Welcome ${nameInput.value.trim()}`;
            welcomeMessage.classList.remove('custom');
        }
    });

    // Counter Logic with LocalStorage
    let count = parseInt(localStorage.getItem('mantraCount')) || 0;

    // Update the counter display
    function updateDisplay() {
        countDisplay.textContent = count;
        localStorage.setItem('mantraCount', count); // Save the count to localStorage
    }

    // Initialize display with saved count
    updateDisplay();

    // Increment the count
    incrementButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    // Reset the count
    resetButton.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
});
