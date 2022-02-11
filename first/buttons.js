btnTempC.addEventListener("click", function(){
    table.innerHTML ="";
    gradus = "&units=metric";
    let cityArray = [];
    cities.forEach(cityId => {
    cityArray.push(new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${gradus}`))
    })
    cityArray.forEach(city => city.todayInfo);
    })

    btnTempF.addEventListener("click",function(){
    table.innerHTML = "";
    gradus = "&units=imperial";
    let cityArray = [];
    cities.forEach(cityId => {
     cityArray.push(new TodayCityWeather(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f${gradus}`))
    })
    cityArray.forEach(city => city.todayInfo);
    });