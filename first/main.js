
let table = document.querySelector("#table");
let city1 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f");
let city2 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f");
let city3 = new TodayCityWeather("http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f");

window.addEventListener("load", function () {
    city1.todayInfo;
    city2.todayInfo;
    city3.todayInfo;
});