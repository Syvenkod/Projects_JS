class TodayCityWeather {
    constructor (url){
    this.url = url;
    }

get todayInfo(){
    return fetch(this.url)
    .then(answerObj => answerObj.json())
    .then(json => createTable(json));
}
}
function createTable(json){
    const icon = json.weather[0]['icon'];
    img = document.createElement("img");
    let image= `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`;
    let temp = Math.round(json.main.temp) + " &#176";
    let windSpeed = "Wind: " + Math.round(json.wind.speed) + "m/s";
    table.appendChild(createRow(json.name, json.weather[0].main, temp, image, windSpeed))
}

function createRow(name, main, temp, image, windSpeed) {
    let tr = document.createElement("tr");
    tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
    tr.insertAdjacentHTML("beforeend", `<td>${main + "<br>" + temp}</td>`);
    tr.insertAdjacentHTML("beforeend", `<td>${image}</td>`);
    tr.insertAdjacentHTML("beforeend", `<td>${windSpeed}</td>`);
    return tr;
}

function showWeather(){
    table.innerHTML = tableForecast.innerHTML = "";
    degree = "&units=metric";
    btnTempC.style.display = "block";
    btnTempF.style.display = "block";
    btnTempFForecast.style.display = "none";
    btnTempCForecast.style.display = "none";
    showJsonToday();
}

function changeDegree(){
        table.innerHTML = tableForecast.innerHTML = "";
        degree = "&units=imperial";
        showJsonToday();    }

function showJsonToday(){
    let cityArray = [];
    cities.forEach(cityId => {
     cityArray.push(new TodayCityWeather(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${degree}`))
    })
    cityArray.forEach(city => city.todayInfo);

}