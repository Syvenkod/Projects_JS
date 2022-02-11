
let table = document.querySelector("#table");
let btnTempC = document.querySelector("#btn-tempC");
let btnTempF = document.querySelector("#btn-tempF");
let gradus = "&units=metric";

let city1 = new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f${gradus}`);
// let city2 = new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f${gradus}`);
// let city3 = new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f${gradus}`);

city1.todayInfo;
// city2.todayInfo();
// city3.todayInfo();

// btnTempC.addEventListener("click", function(){

// gradus = "&units=metric";

// })

// btnTempF.addEventListener("click",function(){
// table.innerHTML = "";
// let city1 = new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=imperial`);
// let city2 = new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=imperial`);
// let city3 = new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=imperial`);
// city1.todayInfo();
// city2.todayInfo();
// city3.todayInfo();
//  });

 let cities = ["703448", "2643743", "5128638"];
 let cityArray = [];
 cities.forEach(cityId => {
     cityArray.push(new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${gradus}`))
 })
 console.log(cityArray);



