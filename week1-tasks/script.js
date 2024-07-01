// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');
// const error404 = document.querySelector('.not-found');



// // const currentTime = new Date();
// // const currentHour = currentTime.getHours();
// // if (currentHour >= 6 && currentHour < 18) {
// //     document.body.classList.add('day');
// //     document.body.classList.remove('night');
// // } else {
// //     document.body.classList.add('night');
// //     document.body.classList.remove('day');
// // }



// search.addEventListener('click',()=>
// {
//     const APIKey = '469d0bc6225ec6c0041770e4fc855ae6';
//     const city = document.querySelector('.search-box input').value;


//     if (city == '')
//         return '';
//     fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(json =>{
//         const image = document.querySelector('.weather-box img');
//         const temperature = document.querySelector('.weather-box .temperature');
//         const description = document.querySelector('.weather-box .description');
//         const cityName = document.querySelector('.weather-box .city-name'); // New element
//         const humidity = document.querySelector('.weather-details .humidity span');
//         const wind = document.querySelector('.weather-details .wind span');


//         if (json.cod == '404')
//             {
//                 container.style.height ='555px';
//                 weatherBox.classList.remove('active');
//                 weatherDetails.classList.remove('active');
//                 error404.classList.add('active');
//                 return;

//             }

//         container.style.height ='555px';
//         weatherBox.classList.add('active');
//         weatherDetails.classList.add('active');
//         error404.classList.remove('active');
        


//         const timestamp = json.dt;
//         const date = new Date(timestamp * 1000);
//         const hour = date.getHours();

//         // Determine whether it is day or night
//         const isDayTime = hour >= 5 && hour < 17;

//         switch (json.weather[0].main)
//         {
//             case 'Clear':
//                 container.classList.add('clear');
//                 container.classList.remove('rain');
//                 container.classList.remove('snow');
//                 container.classList.remove('clouds');
//                 container.classList.remove('mist');
//                 container.classList.remove('haze');

//                 image.src = isDayTime ? 'ion--sunny-outline.png':'ph--moon.png';
//                 break;

//             case 'Rain':
                
//                 container.classList.remove('clear');
//                 container.classList.add('rain');
//                 container.classList.remove('snow');
//                 container.classList.remove('clouds');
//                 container.classList.remove('mist');
//                 container.classList.remove('haze');

//                 image.src = 'bi--cloud-rain.png';
//                 break;
            
//             case 'Snow':
                
//                 container.classList.remove('clear');
//                 container.classList.remove('rain');
//                 container.classList.add('snow');
//                 container.classList.remove('clouds');
//                 container.classList.remove('mist');
//                 container.classList.remove('haze');

//                 image.src ='fontisto--snow.png';
//                 break;

//             case 'Clouds':
                    
//                 container.classList.remove('clear');
//                 container.classList.remove('rain');
//                 container.classList.remove('snow');
//                 container.classList.add('clouds');
//                 container.classList.remove('mist');
//                 container.classList.remove('haze');

//                 image.src = isDayTime ? 'carbon--cloudy.png':'bi--cloud-moon.png';

//                 break;
//             case 'Mist':
                    
//                 container.classList.remove('clear');
//                 container.classList.remove('rain');
//                 container.classList.remove('snow');
//                 container.classList.remove('clouds');
//                 container.classList.add('mist');
//                 container.classList.remove('haze');

//                 image.src = 'tabler--mist.png';

//                 break;

//             case 'Haze':
                    
//                 container.classList.remove('clear');
//                 container.classList.remove('rain');
//                 container.classList.remove('snow');
//                 container.classList.remove('clouds');
//                 container.classList.remove('mist');
//                 container.classList.add('haze');

//                 image.src = isDayTime ? 'meteocons--haze-day.png' :'tabler--haze-moon.png';

//                 break;
//             case 'Drizzle':
//                 image.src = 'circum--cloud-drizzle.png';
//                 break;
//             default:

//                 image.src = 'ic--round-cloud-off.png';
    
                
//         }

        
//         const tempInCelsius = json.main.temp - 273.15;
//         temperature.innerHTML = `${Math.round(tempInCelsius)}<span>°C</span>`;
//         description.innerHTML = `${json.weather[0].description}`;
//         cityName.innerHTML = `${city}`; // Set city name
//         humidity.innerHTML = `${json.main.humidity}%`;
//         wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;



        
//     });
// });



const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

const APIKey = '469d0bc6225ec6c0041770e4fc855ae6';

const getWeather = () => {
    const city = searchInput.value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const cityName = document.querySelector('.weather-box .city-name'); // New element
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            if (json.cod == '404') {
                container.style.height = '555px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error404.classList.add('active');
                return;
            }

            container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            const timestamp = json.dt;
            const date = new Date(timestamp * 1000);
            const hour = date.getHours();

            // Determine whether it is day or night
            const isDayTime = hour >= 5 && hour < 17;

            switch (json.weather[0].main) {
                case 'Clear':
                    container.classList.add('clear');
                    container.classList.remove('rain', 'snow', 'clouds', 'mist', 'haze');
                    image.src = isDayTime ? 'ion--sunny-outline.png' : 'ph--moon.png';
                    break;

                case 'Rain':
                    container.classList.add('rain');
                    container.classList.remove('clear', 'snow', 'clouds', 'mist', 'haze');
                    image.src = 'bi--cloud-rain.png';
                    break;

                case 'Snow':
                    container.classList.add('snow');
                    container.classList.remove('clear', 'rain', 'clouds', 'mist', 'haze');
                    image.src = 'fontisto--snow.png';
                    break;

                case 'Clouds':
                    container.classList.add('clouds');
                    container.classList.remove('clear', 'rain', 'snow', 'mist', 'haze');
                    image.src = isDayTime ? 'carbon--cloudy.png' : 'bi--cloud-moon.png';
                    break;

                case 'Mist':
                    container.classList.add('mist');
                    container.classList.remove('clear', 'rain', 'snow', 'clouds', 'haze');
                    image.src = 'tabler--mist.png';
                    break;

                case 'Haze':
                    container.classList.add('haze');
                    container.classList.remove('clear', 'rain', 'snow', 'clouds', 'mist');
                    image.src = isDayTime ? 'meteocons--haze-day.png' : 'tabler--haze-moon.png';
                    break;

                case 'Drizzle':
                    container.classList.add('drizzle');
                    container.classList.remove('clear', 'rain', 'snow', 'clouds', 'mist', 'haze');
                    image.src = 'circum--cloud-drizzle.png';
                    break;

                default:
                    image.src = 'ic--round-cloud-off.png';
            }

            const tempInCelsius = json.main.temp - 273.15;
            temperature.innerHTML = `${Math.round(tempInCelsius)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            cityName.innerHTML = `${city}`; // Set city name
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;

            searchInput.value = '';
        });
};

search.addEventListener('click', getWeather);
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});

