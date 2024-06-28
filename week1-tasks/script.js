const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');



search.addEventListener('click',()=>
{
    const APIKey = '469d0bc6225ec6c0041770e4fc855ae6';
    const city = document.querySelector('.search-box input').value;


    if (city == '')
        return '';
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(json =>{
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        if (json.cod == '404')
            {
                container.style.height ='400px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error404.classList.add('active');
                return;

            }

        container.style.height ='555px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');
        


        const timestamp = json.dt;
        const date = new Date(timestamp * 1000);
        const hour = date.getHours();

        // Determine whether it is day or night
        const isDayTime = hour >= 5 && hour < 17;

        switch (json.weather[0].main)
        {
            case 'Clear':
                image.src = isDayTime ? 'ion--sunny-outline.png':'ph--moon.png';
                break;

            case 'Rain':
                image.src = 'bi--cloud-rain.png';
                break;
            
            case 'Snow':
                image.src ='fontisto--snow.png';
                break;

            case 'Clouds':
                image.src = isDayTime ? 'carbon--cloudy.png':'bi--cloud-moon.png';

                break;
            case 'Mist':
                image.src = 'tabler--mist.png';

                break;

            case 'Haze':
                image.src = isDayTime ? 'meteocons--haze-day.png' :'tabler--haze-moon.png';

                break;
            case 'Drizzle':
                image.src = 'circum--cloud-drizzle.png';
                break;
            default:

                image.src = 'ic--round-cloud-off.png';
    
                
        }
        
        const tempInCelsius = json.main.temp - 273.15;
        temperature.innerHTML = `${Math.round(tempInCelsius)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
    });
});