let btnTempC = document.querySelector("#btn-tempC");
let btnTempF = document.querySelector("#btn-tempF");
let btnToday = document.querySelector("#today-btn");
let btnForecast = document.querySelector("#forecast-btn");
let btnTempFForecast = document.querySelector("#btn-tempF-forecast");
let btnTempCForecast = document.querySelector("#btn-tempC-forecast");

btnTempC.addEventListener("click", showWeather);
btnToday.addEventListener("click", showWeather);
btnForecast.addEventListener("click", showForecast);
btnTempF.addEventListener("click", changeDegree);
btnTempFForecast.addEventListener("click", changeDegreeForecast);
btnTempCForecast.addEventListener("click", showForecast);