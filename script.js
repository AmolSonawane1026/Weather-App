const apiKey = "58ef8b66d9decd0fea54401e0c037402";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".city").innerHTML = "Invalid City";
    document.querySelector(".temp").innerHTML ="-/-";
    document.querySelector(".humidity").innerHTML ="0";
    document.querySelector(".wind").innerHTML ="0 km/h";
    weatherIcon.src = "./404-error.png";
  }
  else{
    var data = await response.json();
    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
  
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./raining.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "./snow.png";
    } else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./cloudy.png";
    }
    
  }

}
    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".inputField");

        searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
