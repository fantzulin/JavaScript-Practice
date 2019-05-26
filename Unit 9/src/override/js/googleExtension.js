var openUrl = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-C8D4E4B7-D67E-402D-A51D-627DC275E567&limit=1&offset=0&format=JSON&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80&sort=time";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);
        console.log(data.records.locations[0].location[0].weatherElement);

        var pWeatherRain = document.getElementById("weatherRain");
        var pWeatherTime = document.getElementById("weatherTime");
        var weatherRainArray = data.records.locations[0].location[0].weatherElement[0];
        var rainDescription = weatherRainArray.description;
        var rainPercent = weatherRainArray.time[0].elementValue[0].value;
        var rainTimeFrom = weatherRainArray.time[0].startTime;
        var rainTimeEnd = weatherRainArray.time[0].endTime;
        pWeatherTime.innerHTML = rainTimeFrom + "~" + rainTimeEnd;
        pWeatherRain.innerHTML = "降雨機率" + rainPercent + "百分比";


        var pWeatherTemperature = document.getElementById("weatherTemperature");
        var temperatureArray = data.records.locations[0].location[0].weatherElement[1];
        var temperatureDescription = temperatureArray.description;
        var temperatureValue = temperatureArray.time[0].elementValue[0].value;
        pWeatherTemperature.innerHTML = temperatureDescription + temperatureValue + "攝氏度";

        console.log(data.records.locations[0].location[0].weatherElement[2]);

    }

};