var xhr = new XMLHttpRequest();
var url = 'http://163.29.157.32:8080/dataset/a132516d-d2f3-4e23-866e-27e616b3855a/resource/8f6fcb24-290b-461d-9d34-72ed1b3f51f0/download/ef2962a75c8346ceb8b3b5c9bdd3d129.json';
xhr.open('GET', url);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var data = JSON.parse(xhr.responseText);

        data.forEach(function (value, index) {
            var p = document.createElement('p');
            p.innerText = data[index].ParkName;
            document.querySelector('#result').appendChild(p);
        });
    }

}
xhr.send();