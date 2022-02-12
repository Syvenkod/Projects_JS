let btnTempC = document.querySelector("#btn-tempC");
let btnTempF = document.querySelector("#btn-tempF");
let btnToday = document.querySelector("#today-btn");
let btnForecast = document.querySelector("#forecast-btn");

btnTempC.addEventListener("click", showWeather);
btnToday.addEventListener("click", showWeather);
btnForecast.addEventListener("click", showForecast);
btnTempF.addEventListener("click", changeDegree);
