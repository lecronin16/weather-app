

const getWeather = async (city) => {
    apikey = '0e46021db8de457fd3af62ceec85a56d';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apikey}`)
    const data = await res.json() 
    const cityName = data.name
    const icon = `/images/${data.weather[0].icon}.png`
    const description = data.weather[0].description
    const temp = data.main.temp
    const humidity = data.main.humidity
    const weather = [cityName, icon, description, temp, humidity]

    addToPage(weather)
    console.log(weather) 
};

const weatherForm = document.querySelector('#get_weather')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const cityName = e.path[0][0].value 
    const weatherInfo = getWeather(cityName)
    console.log(cityName)
    return
})

const addToPage = (weatherInfo) => {
    const p = document.createElement('p')
    p.innerHTML = 
    `<div class="card text-bg-dark" >
    <img src=${weatherInfo[1]}  class="card-img" alt="...">
    <div class="card-img-overlay">
    <h3 class="card-title" >${weatherInfo[0]}</h3>
    <h5 class="card-title">  ${weatherInfo[2]}</h5>
    <h5 class="card-title">  ${weatherInfo[3]} degrees </h5>
    <h5 class="card-title"> Humidity: ${weatherInfo[4]}%</h5>
    <button id="close" type="button" class="btn-close btn-close-white" aria-label="Close"></button>
    </div>
  </div>`

//   <button type="button" class="btn-close" aria-label="Close"></button>
    document.querySelector('#show').append(p)
};

const closeBtn = document.getElementById('close');
clearCard = () => {
    document.querySelector('card').innerHTML=''
};
closeBtn.addEventListener('click', clearCard)

//help this doesn't work and i don't know why
