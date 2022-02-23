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
    let dateArray = [];
    let hoursArray = [];
    json.list.forEach(json => {
        dateArray.push(json)});
    for (let h=0; h < dateArray.length; h++){
    let hour = new Date(Number(dateArray[h].dt+"000")).getUTCHours();
    if (hour == 15){
    hoursArray.push(dateArray[h])};
    }

    tableForecast.appendChild(createRowCity(json.city.name))
    let tr = document.createElement("tr");
    for (let i=0; i < hoursArray.length; i++){
        const icon = hoursArray[i].weather[0]['icon'];
        img = document.createElement("img");
        let image = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
        let date = new Date(Number(hoursArray[i].dt+"000"));
        let dayDate = days[date.getDay()];
        let temp = Math.round(hoursArray[i].main.temp) + " &#176";
        tr.appendChild(createRowForecast(dayDate, dateArray[i].weather[0].main, temp, image,))
    }
    tableForecast.appendChild(tr);
}
function createRowForecast(date, main, temp, image) {
    let td = document.createElement("td")
    td.insertAdjacentHTML("beforeend", `<td>${date}<br>${main + "<br>" + temp}<br>${image}</td>`);
    return td;
}

function createRowCity(name){
    let tr = document.createElement("tr");
    tr.insertAdjacentHTML("beforeend", `<tr>${name}</tr>`);
    tr.classList.add("tr-head");
    return tr;
}

function showForecast(){
    table.innerHTML = tableForecast.innerHTML = "";
    degree = "&units=metric";
    btnTempF.style.display = "none";
    btnTempFForecast.style.display = "block";
    btnTempC.style.display = "none";
    btnTempCForecast.style.display = "block";
    showJsonForecast();
}

function changeDegreeForecast(){
    table.innerHTML = tableForecast.innerHTML = "";
    degree = "&units=imperial";
    showJsonForecast();    }


function showJsonForecast(){
    let cityArray = [];
    cities.forEach(cityId => {
    cityArray.push(new ForecastCityWeather(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${degree}`))
    })
    cityArray.forEach(city => city.forecastInfo);
    };
