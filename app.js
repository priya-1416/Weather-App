// OpenWeatherMap API Key (Sign up for free at https://openweathermap.org/api)
const apiKey = 'da2b42610b79b237ce119ccca1ed87b8';

// Function to fetch and display weather data
async function getWeather() {
    const city = document.getElementById('city-input').value;
    const weatherInfo = document.getElementById('weather-info');

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    ;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod !== 200) {
            alert('City not found');
            return;
        }

        // Populate weather data
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

        weatherInfo.style.display = 'block'; // Show the weather info
    } catch (error) {
        alert('Error fetching weather data');
    }
}
