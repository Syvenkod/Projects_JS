class ForecastCityWeather {
    constructor (url){
    this.url = url;
    }

get forecastInfo(){
    return fetch(this.url)
    .then(answerObj => answerObj.json())
    .then(json => createTableForecast(json));
}
}
function createTableForecast(json){
    let dateArray = [json.list[5], json.list[13], json.list[21], json.list[29], json.list[37]];
    tableForecast.appendChild(createRowCity(json.city.name))
    for (let i=0; i < dateArray.length; i++){
        const icon = dateArray[i].weather[0]['icon'];
        img = document.createElement("img");
        let image = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
        let date = new Date(Number(dateArray[i].dt+"000"));
        let dayDate = days[date.getDay()];
        let temp = Math.round(dateArray[i].main.temp) + " &#176";
    tableForecast.appendChild(createRowForecast(dayDate, dateArray[i].weather[0].main, temp, image,))
    }
}
function createRowForecast(date, main, temp, image) {
    let td = document.createElement("td");
    td.insertAdjacentHTML("beforeend", `<td>${date}<br>${main + "<br>" + temp}<br>${image}</td>`);
    return td;
}

function createRowCity(name){
    let tr = document.createElement("tr");
    tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
    return tr;
}

function showForecast(){
    table.innerHTML = tableForecast.innerHTML = "";
    degree = "&units=metric";
    showJsonForecast();
}

function showJsonForecast(){
    let cityArray = [];
    cities.forEach(cityId => {
    cityArray.push(new ForecastCityWeather(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${degree}`))
    })
    cityArray.forEach(city => city.forecastInfo);
    };
