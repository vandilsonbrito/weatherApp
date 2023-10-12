
const container = document.getElementById('container');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const weatherDescription = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const conditionIcon = document.getElementById('condition-icon');
const notFound = document.getElementById('not-found');
const weatherInfo = document.getElementById('weather-info');
const loadingIcon = document.getElementById('loading-icon');
 
const API_KEY = import.meta.env.VITE_API_KEY;

async function getWeather() {
    try {
        
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchInput.value}&aqi=no`);

        if (!response.ok) {
            notFound.classList.remove('hidden');
            notFound.classList.add('flex');
            throw new Error('Requisition error'); 
        }
        
        const data = await response.json();

        loadingIcon.classList.add('hidden');

        if(searchInput) {
            notFound.classList.remove('flex');
            notFound.classList.add('hidden');
            weatherInfo.classList.remove('hidden');
            weatherInfo.classList.add('flex');

            conditionIcon.src = data.current.condition.icon;
            temperature.innerHTML = `${parseInt(data.current.feelslike_c)}<span class="text-[2rem] relative -top-[18px]">&#8451;</span>`;
            weatherDescription.textContent = data.current.condition.text;
            humidity.textContent = `${parseInt(data.current.humidity)}%`
            windSpeed.textContent = `${parseInt(data.current.gust_kph)}Km/h`
        }
        

    } catch (error) {
        notFound.classList.remove('hidden');
        notFound.classList.add('flex');
        console.error(error);
    }
}



searchBtn.addEventListener('click', () => {
    container.classList.add('h-[470px]');
    getWeather()
})
searchInput.addEventListener('keyup', function(event) {
    if((event.key === "Enter") || (event.key === "OK") || (event.key === "Pronto") || (event.key === "Done")) {
        getWeather()
    }
})


