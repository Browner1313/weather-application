const apiKey = 'adc9e72275d2ad5348d86c0a4f136d3a';

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data); 
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        
    }
}

function updateWeatherUI(data) {
    document.getElementById('location').textContent = '${data.name}, ${data.sys.country}';
    document.getElementById('temperature').textContent = '${data.'
}
