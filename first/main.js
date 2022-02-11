let table = document.querySelector("#table");
let btnTempC = document.querySelector("#btn-tempC");
let btnTempF = document.querySelector("#btn-tempF");

let cities = ["703448", "2643743", "5128638"];

window.addEventListener("load", function () {
    gradus = "&units=metric";
    let cityArray = [];
    cities.forEach(cityId => {
    cityArray.push(new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${gradus}`))
    })
    cityArray.forEach(city => city.todayInfo);
    });


