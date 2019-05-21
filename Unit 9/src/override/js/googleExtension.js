var openUrl = "https://opendata.epa.gov.tw/ws/Data/AQFN/?$format=json";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }

};