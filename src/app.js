function displayTemperature(response) {

let temperatureElement= document.querySelector("#temperature");
let cityElement=document.querySelector("#city");
let descriptionElement=document.querySelector("#description");

temperatureElement.innerHTML=Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML= response.data.weather[0].description;
}

let apiKey ="5f472b7acba333cd8a035ea85a0d4d4c";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}$units=metrict`;

axios.get (url).then(displayTemperature);
