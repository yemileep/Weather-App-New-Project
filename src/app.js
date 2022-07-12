function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
  }
  
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}&units=metric    `;
  
  axios.get(apiURL).then(displayTemperature);