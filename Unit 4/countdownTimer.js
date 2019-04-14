var timer = setInterval(function () {
        var endDate = '2020-01-01 00:00';
        var countDown = new Date(endDate).getTime();
        var now = new Date().getTime();
        var distance = countDown - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        var result = document.getElementById('result');

        result.innerHTML = '距離' + endDate + '剩下' + days + '天' + hours + '小時' + minutes + '分鐘' + seconds + '秒';

        if (distance < 0) {
            clearInterval(timer);
            result.innerHTML = '時間到了!'
        }
    },
    1000);