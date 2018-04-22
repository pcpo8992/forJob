// declare block

//全文檢索
var linkBtn = document.querySelector("#linkBtn");
var btnOther = document.querySelector("#btn-other");
var linkModel = document.getElementById("linkModel");
var modelOther = document.getElementById("myModel-other");
var linkClose = document.querySelector(".linkClose");



linkBtn.onclick = function () {
    linkModel.style.display = "flex";
};    
btnOther.onclick = function () {
    modelOther.style.display = "flex";
};
linkModel.onclick = function () {
    this.style.display = "none";
};
modelOther.onclick = function () {
    this.style.display = "none";
};
linkClose.onclick = function () {
    linkModel.style.display = "none";
};

clock();
window.onload = function(){
    var btnGoogle = document.querySelector(".gsc-search-button-v2");
    // console.log(btnGoogle);
    btnGoogle.setAttribute("id", "color");
};

clock();

function clock() {
    var clock = document.getElementById("clock");
    clock.textContent = getNowTime();
    setInterval(function () {
        var clock = document.getElementById("clock");
        clock.textContent = getNowTime();
    }, 1000);
}

function getNowTime() {
    var date = new Date();
    var year = date.getFullYear() - 1911;
    var month = date.getMonth() + 1;
    var dd = date.getDate();
    var weekend = getChineseDay(date.getDay());
    var hour = getChineseHours(date.getHours());
    var minute = addZero(date.getMinutes());
    var second = addZero(date.getSeconds());
    var nowTime = year + "年" + month + "月" + dd + "日 " + "星期" + weekend + " " + hour + ":" + minute +
        ":" + second;
    return nowTime;
}

function getChineseDay(day) {
    var chineseDay;
    switch (day) {
        case 0:
            chineseDay = "日";
            break;
        case 1:
            chineseDay = "一";
            break;
        case 2:
            chineseDay = "二";
            break;
        case 3:
            chineseDay = "三";
            break;
        case 4:
            chineseDay = "四";
            break;
        case 5:
            chineseDay = "五";
            break;
        case 6:
            chineseDay = "六";
            break;
    }
    return chineseDay;
}

function getChineseHours(hour) {
    var chineseHours;
    if (hour == 0) {
        chineseHours = "午夜 " + addZero(hour);
    } else if (hour > 0 && hour < 12) {
        chineseHours = "上午 " + addZero(hour);
    } else if (hour == 12) {
        chineseHours = "中午 " + addZero(hour);
    } else if (hour > 12 && hour < 24) {
        chineseHours = "下午 " + addZero(hour - 12);
    }
    return chineseHours;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

