
let table = document.querySelector("#table");
let btnTempC = document.querySelector("#btn-tempC");
let btnTempF = document.querySelector("#btn-tempF");

btnTempC.addEventListener("click",function(){
table.innerHTML = "";
let city1 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=metric");
let city2 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=metric");
let city3 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=metric");
city1.todayInfo;
city2.todayInfo;
city3.todayInfo;
});

btnTempF.addEventListener("click",function(){
table.innerHTML = "";
let city1 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=imperial");
let city2 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=imperial");
let city3 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=imperial");
city1.todayInfo;
city2.todayInfo;
city3.todayInfo;
 });

window.addEventListener("load", function () {

});