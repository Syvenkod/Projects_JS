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
    let image= `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
    table.appendChild(createRow(json.name, json.weather[0].main, json.main.temp, image))
}

function createRow(name, main, temp, image) {
    let tr = document.createElement("tr");
    tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
    tr.insertAdjacentHTML("beforeend", `<td>${main + "<br>" + temp}</td>`);
    tr.insertAdjacentHTML("beforeend", `<td>${image}</td>`);
    return tr;
};


