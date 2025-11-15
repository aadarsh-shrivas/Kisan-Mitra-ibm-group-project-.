// Wait for the entire webpage to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- NEW: Weather Simulation ---
    
    // An array of possible weather conditions to simulate
    const simulatedWeatherData = [
        {
            temp: "31°C",
            condition: "Clear Skies (साफ आसमान)",
            details: "No chance of rain for the next 3 days.",
            icon: "https://i.imgur.com/MpxA8p2.png" // Sunny icon
        },
        {
            temp: "28°C",
            condition: "Partly Cloudy (आंशिक रूप से बादल छाए रहेंगे)",
            details: "Low chance of rain tomorrow afternoon.",
            icon: "https://i.imgur.com/nPhfJIM.png" // Partly cloudy icon
        },
        {
            temp: "33°C",
            condition: "Hazy Sun (धूप और धुंध)",
            details: "Weather will be hot and dry.",
            icon: "https://i.imgur.com/dztv7I4.png" // Hazy icon
        }
    ];

    function updateWeather() {
        // Get the weather elements from HTML
        const tempElement = document.getElementById('temperature-value');
        const conditionElement = document.getElementById('weather-condition');
        const detailsElement = document.getElementById('weather-details');
        const iconElement = document.getElementById('weather-icon');
        
        // Randomly pick one weather condition from our array
        const randomIndex = Math.floor(Math.random() * simulatedWeatherData.length);
        const current_weather = simulatedWeatherData[randomIndex];

        // Update the HTML content with the randomly selected weather data
        tempElement.innerText = current_weather.temp;
        conditionElement.innerText = current_weather.condition;
        detailsElement.innerText = current_weather.details;
        iconElement.src = current_weather.icon;
    }

    // Call the function to update the weather when the page loads
    updateWeather();


    // --- Mandi Price Checker (Same as before) ---

    const cropSelect = document.getElementById('crop-select');
    const mandiSelect = document.getElementById('mandi-select');
    const priceButton = document.getElementById('price-btn');
    const priceResultDiv = document.getElementById('price-result');

    const mandiPrices = {
        indore: {
            soybean: "₹4800 - ₹5100",
            wheat: "₹2300 - ₹2500",
            gram: "₹4500 - ₹4700"
        },
        ujjain: {
            soybean: "₹4750 - ₹5000",
            wheat: "₹2350 - ₹2550",
            gram: "₹4550 - ₹4750"
        },
        bhopal: {
            soybean: "₹4700 - ₹4900",
            wheat: "₹2250 - ₹2450",
            gram: "₹4400 - ₹4600"
        }
    };

    priceButton.addEventListener('click', () => {
        const selectedCrop = cropSelect.value;
        const selectedMandi = mandiSelect.value;
        const price = mandiPrices[selectedMandi][selectedCrop];
        const resultMessage = `Today's price for ${selectedCrop} in ${selectedMandi} is: <strong>${price}</strong> per quintal.`;
        priceResultDiv.innerHTML = resultMessage;
    });

});