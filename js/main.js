// declare block
//全文檢索
var linkBtn = document.querySelector("#linkBtn");
var btnOther = document.querySelector("#btn-other");
var linkModel = document.getElementById("linkModel");
var modelOther = document.getElementById("myModel-other");
var linkClose = document.querySelector(".linkClose");
clock();
window.onload = function () {
    var btnGoogle = document.querySelector(".gsc-search-button-v2");
    btnGoogle.setAttribute("id", "color");
};

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

function changeExecImg(value) {
    var getExecImg = document.querySelectorAll(".area-image img");
    getExecImg[value].style.display = "block";
}

function recoverImg(value) {
    var getExecImg = document.querySelectorAll(".area-image img");
    getExecImg[value].style.display = "none";
}

// jumbotron
var btnNext = document.getElementById("jumbotronNext");
var btnPre = document.getElementById("jumbotronPre");

btnNext.onclick = function () {
    var activeImg = document.getElementById("jumbotronIsActive");
    var value = parseInt(activeImg.getAttribute("value"));
    var imgContainer = document.getElementsByClassName("imgContainer");
    var nowDot = document.querySelector(".active");
    var nextDot = document.querySelectorAll(".dot");
    if (value < imgContainer.length - 1) {
        imgContainer[value].removeAttribute("id");
        nowDot.className = nowDot.className.replace(" active", "");
        value += 1;
        nextDot[value].className = nowDot.className.replace("dot", "dot active");
        imgContainer[value].setAttribute("id", "jumbotronIsActive");
    } else {
        imgContainer[value].removeAttribute("id");
        nowDot.className = nowDot.className.replace(" active", "");
        imgContainer[0].setAttribute("id", "jumbotronIsActive");
        nextDot[0].className = nowDot.className.replace("dot", "dot active");
    }
};

btnPre.onclick = function () {
    var activeImg = document.getElementById("jumbotronIsActive");
    var value = parseInt(activeImg.getAttribute("value"));
    var nowDot = document.querySelector(".active");
    var nextDot = document.querySelectorAll(".dot");
    var imgContainer = document.getElementsByClassName("imgContainer");
    if (value > 0) {
        imgContainer[value].removeAttribute("id");
        nowDot.className = nowDot.className.replace(" active", "");
        value -= 1;
        imgContainer[value].setAttribute("id", "jumbotronIsActive");
        nextDot[value].className = nowDot.className.replace("dot", "dot active");
    } else {
        imgContainer[value].removeAttribute("id");
        nowDot.className = nowDot.className.replace(" active", "");
        imgContainer[imgContainer.length - 1].setAttribute("id", "jumbotronIsActive");
        nextDot[imgContainer.length - 1].className = nowDot.className.replace("dot", "dot active");
    }
};

function currentSlide(value){
    var nowImage = document.getElementById("jumbotronIsActive");
    var nextImage = document.querySelectorAll(".imgContainer")[value];
    var nowDot = document.querySelector(".active");
    var nextDot = document.querySelectorAll(".dot")[value];
    nowImage.removeAttribute("id", "jumbotronIsActive");
    nowDot.className = nowDot.className.replace(" active", "");
    nextImage.setAttribute("id", "jumbotronIsActive");
    nextDot.className = nowDot.className.replace("dot", "dot active");
}


//json 格式
var nowValue = 0;
var staticNum = {
    tpk: {
        name: "行政執行署各分署",
        unit: "萬件",
        newNum: 935,
        overNum: 749,
        receiveMoney: 275
    },
    tpy: {
        name: "行政執行署臺北分署",
        unit: "萬件",
        newNum: 80,
        overNum: 69,
        receiveMoney: 69
    },
    sly: {
        name: "行政執行署士林分署",
        unit: "萬件",
        newNum: 46,
        overNum: 39,
        receiveMoney: 14
    },
    pcy: {
        name: "行政執行署新北分署",
        unit: "萬件",
        newNum: 142,
        overNum: 110,
        receiveMoney: 24
    },
    tyy: {
        name: "行政執行署桃園分署",
        unit: "萬件",
        newNum: 97,
        overNum: 78,
        receiveMoney: 18.2
    },
    scy: {
        name: "行政執行署新竹分署",
        unit: "萬件",
        newNum: 69,
        overNum: 41,
        receiveMoney: 10
    },
    tcy: {
        name: "行政執行署臺中分署",
        unit: "萬件",
        newNum: 73,
        overNum: 64,
        receiveMoney: 18.7
    },
    chy: {
        name: "行政執行署彰化分署",
        unit: "萬件",
        newNum: 64,
        overNum: 52,
        receiveMoney: 12
    },
    cyy: {
        name: "行政執行署嘉義分署",
        unit: "萬件",
        newNum: 70,
        overNum: 46,
        receiveMoney: 8.3
    },
    tny: {
        name: "行政執行署臺南分署",
        unit: "萬件",
        newNum: 52,
        overNum: 43,
        receiveMoney: 11
    },
    ksy: {
        name: "行政執行署高雄分署",
        unit: "萬件",
        newNum: 115,
        overNum: 101,
        receiveMoney: 70
    },
    pty: {
        name: "行政執行署屏東分署",
        unit: "萬件",
        newNum: 41,
        overNum: 34,
        receiveMoney: 5.3
    },
    hly: {
        name: "行政執行署花蓮分署",
        unit: "萬件",
        newNum: 34,
        overNum: 26,
        receiveMoney: 5.2
    },
    ily: {
        name: "行政執行署宜蘭分署",
        unit: "萬件",
        newNum: 47,
        overNum: 39,
        receiveMoney: 5.7
    }
};
google.charts.load('current', {
    'packages': ['corechart']
});
changeStatic(0);

function getExec(value) {
    switch (value) {
        case 0:
            return staticNum.tpk;
        case 1:
            return staticNum.tpy;
        case 2:
            return staticNum.sly;
        case 3:
            return staticNum.pcy;
        case 4:
            return staticNum.tyy;
        case 5:
            return staticNum.scy;
        case 6:
            return staticNum.tcy;
        case 7:
            return staticNum.chy;
        case 8:
            return staticNum.cyy;
        case 9:
            return staticNum.tny;
        case 10:
            return staticNum.ksy;
        case 11:
            return staticNum.pty;
        case 12:
            return staticNum.hly;
        case 13:
            return staticNum.ily;
    }
}

function changeStatic(value) {
    var newNumBlock = document.querySelector(".cashBoard .newNum");
    var overNumBlock = document.querySelector(".cashBoard .overNum");
    var moneyBlock = document.querySelector(".cashBoard .receiveMoney");
    var execName = document.querySelectorAll(".cardFotter .segmentation");
    var pieName = document.querySelector(".data-title .pie-name");
    var colChartName = document.querySelector(".data-title .colChart-name");
    var execBtnActive = document.getElementById("execBtnActive");
    var execBtn = document.querySelectorAll(".execBtn");

    nowValue = value;
    execBtnActive.removeAttribute("id", "execBtnActive");
    execBtn[nowValue].setAttribute("id", "execBtnActive");
    //    console.log(execName);
    pieName.textContent = '106年 ' + getExec(nowValue).name + ' 新收件數';
    colChartName.textContent = '106年 ' + getExec(nowValue).name + ' 徵起金額';
    for (var row = 0; row < execName.length; row++) {
        execName[row].textContent = getExec(value).name;
    }
    // ie 不支援＠＠
    // execName.forEach(function (elm) {
    //     elm.textContent = getExec(value).name;
    // });
    newNumBlock.textContent = getExec(value).newNum;
    overNumBlock.textContent = getExec(value).overNum;
    moneyBlock.textContent = getExec(value).receiveMoney;
    //    execName.textContent = getExec(nowValue).name;

    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawAnotherChart);

}

function drawChart() {
    var caseType = ['種類', '件數'];

    var dataTotal = [
        [
            //執行署
            caseType, ['罰鍰', 471],
            ['費用', 309],
            ['財稅', 99],
            ['健保', 56]
        ],
        [
            //臺北
            caseType, ['罰鍰', 38],
            ['費用', 31],
            ['財稅', 6.5],
            ['健保', 4.4]
        ],
        [
            //士林
            caseType, ['罰鍰', 22],
            ['費用', 31],
            ['財稅', 4.5],
            ['健保', 3.2]
        ],
        [
            //新北
            caseType, ['罰鍰', 81],
            ['費用', 39],
            ['財稅', 14],
            ['健保', 7.6]
        ],
        [
            //桃園
            caseType, ['罰鍰', 45],
            ['費用', 34],
            ['財稅', 10],
            ['健保', 6.5]
        ],
        [
            //新竹
            caseType, ['罰鍰', 38],
            ['費用', 20],
            ['財稅', 6.6],
            ['健保', 3.6]
        ],
        [
            //臺中
            caseType, ['罰鍰', 26],
            ['費用', 31],
            ['財稅', 8.3],
            ['健保', 6.7]
        ],
        [
            //彰化
            caseType, ['罰鍰', 33],
            ['費用', 19],
            ['財稅', 6.9],
            ['健保', 3.9]
        ],
        [
            //嘉義
            caseType, ['罰鍰', 38],
            ['費用', 21],
            ['財稅', 7.1],
            ['健保', 4]
        ],
        [
            //臺南
            caseType, ['費用', 23],
            ['罰鍰', 17],
            ['財稅', 7.1],
            ['健保', 4]
        ],
        [
            //高雄
            caseType, ['罰鍰', 63],
            ['費用', 33],
            ['財稅', 12],
            ['健保', 5.6]
        ],
        [
            //屏東
            caseType, ['罰鍰', 19],
            ['費用', 13],
            ['財稅', 5.5],
            ['健保', 2.1]
        ],
        [
            //花蓮
            caseType, ['罰鍰', 18],
            ['費用', 9.2],
            ['財稅', 4],
            ['健保', 2.3]
        ],
        [
            //宜蘭
            caseType, ['罰鍰', 26],
            ['費用', 14],
            ['財稅', 4.5],
            ['健保', 2.3]
        ],
    ];

    // Create the data table.
    var data = new google.visualization.arrayToDataTable(dataTotal[nowValue]);
    // Set chart options
    var options = {
        // 'backgroundColor': 'gray', 
        'backgroundColor.stroke': 'red',
        'backgroundColor.strokeWidth': 1,
        'backgroundColor.fill': 'red',
        chartArea: {
            left: 70,
            top: 65,
            width: '100%',
            height: '100%'
        },
        colors: ['#F34626', '#EFBA23', '#007F62', '#00A3D6'],
        enableInteractivity: true,
        fontSize: '1em',
        // fontName:'微軟正黑體',
        // forceIFrame: true,
        legend: {
            position: 'right',
            textStyle: {
                color: '#005b8e',
                fontSize: 13
            }
        },
        pieHole: 0.4,
        pieSliceBorderColor: 'white',
        pieSliceText: 'percentage',
        pieSliceTextStyle: {
            color: 'white',
            // fontName: '微軟正黑體',
            fontSize: 12
        },
        // 'title': '總新收案件數：935萬件',
        title: "總新收案件數：" + getExec(nowValue).newNum + "萬件",
        'titleTextStyle': {
            color: '#005b8e',
            fontName: '微軟正黑體',
            fontSize: 14,
            bold: true,
        },
        'tooltip.isHtml': true,
        'tooltip.ignoreBounds': true,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('donutChart'));
    chart.draw(data, options);
}

function drawAnotherChart() {
    var dataTotal = [
        //執行署
        [
            ['財稅', 103, 'color: #007F62; fill-opacity:1', 103],
            ['健保', 87, 'color: #00A3D6; fill-opacity:1;', 87],
            ['費用', 61, 'color: #EFBA23; fill-opacity: 1', 61],
            ['罰鍰', 23, 'color: #F34626; fill-opacity: 1', 23],
        ],
        //臺北分署
        [
            ['財稅', 15, 'color: #007F62; fill-opacity:1', 15],
            ['健保', 35, 'color: #00A3D6; fill-opacity:1;', 35],
            ['費用', 15, 'color: #EFBA23; fill-opacity: 1', 15],
            ['罰鍰', 2.3, 'color: #F34626; fill-opacity: 1', 2.3],
        ],
        //士林分署
        [
            ['財稅', 9.4, 'color: #007F62; fill-opacity:1', 9.4],
            ['健保', 1.8, 'color: #00A3D6; fill-opacity:1;', 1.8],
            ['費用', 2, 'color: #EFBA23; fill-opacity: 1', 2],
            ['罰鍰', 1.5, 'color: #F34626; fill-opacity: 1', 1.5],
        ],
        //新北分署
        [
            ['財稅', 14, 'color: #007F62; fill-opacity:1', 14],
            ['健保', 1.8, 'color: #00A3D6; fill-opacity:1;', 1.8],
            ['費用', 3.7, 'color: #EFBA23; fill-opacity: 1', 3.7],
            ['罰鍰', 3.3, 'color: #F34626; fill-opacity: 1', 3.3],
        ],
        //桃園分署
        [
            ['財稅', 9.9, 'color: #007F62; fill-opacity:1', 9.9],
            ['健保', 3.2, 'color: #00A3D6; fill-opacity:1;', 3.2],
            ['費用', 2.9, 'color: #EFBA23; fill-opacity: 1', 2.9],
            ['罰鍰', 2.1, 'color: #F34626; fill-opacity: 1', 2.1],
        ],
        //新竹分署
        [
            ['財稅', 6.2, 'color: #007F62; fill-opacity:1', 6.2],
            ['健保', 1.3, 'color: #00A3D6; fill-opacity:1;', 1.3],
            ['費用', 1.5, 'color: #EFBA23; fill-opacity: 1', 1.5],
            ['罰鍰', 1.6, 'color: #F34626; fill-opacity: 1', 1.6],
        ],
        //臺中分署
        [
            ['財稅', 9.1, 'color: #007F62; fill-opacity:1', 9.1],
            ['健保', 3.5, 'color: #00A3D6; fill-opacity:1;', 3.5],
            ['費用', 3.6, 'color: #EFBA23; fill-opacity: 1', 3.6],
            ['罰鍰', 2.2, 'color: #F34626; fill-opacity: 1', 2.2],
        ],
        //彰化分署
        [
            ['財稅', 6.3, 'color: #007F62; fill-opacity:1', 6.3],
            ['健保', 1.5, 'color: #00A3D6; fill-opacity:1;', 1.5],
            ['費用', 2.4, 'color: #EFBA23; fill-opacity: 1', 2.4],
            ['罰鍰', 1.9, 'color: #F34626; fill-opacity: 1', 1.9],
        ],
        //嘉義分署
        [
            ['財稅', 4.2, 'color: #007F62; fill-opacity:1', 4.2],
            ['健保', 1.2, 'color: #00A3D6; fill-opacity:1;', 1.2],
            ['費用', 1.4, 'color: #EFBA23; fill-opacity: 1', 1.4],
            ['罰鍰', 1.5, 'color: #F34626; fill-opacity: 1', 1.5],
        ],
        //臺南分署
        [
            ['財稅', 6.3, 'color: #007F62; fill-opacity:1', 6.3],
            ['健保', 1.7, 'color: #00A3D6; fill-opacity:1;', 1.7],
            ['費用', 1.9, 'color: #EFBA23; fill-opacity: 1', 1.9],
            ['罰鍰', 0.9, 'color: #F34626; fill-opacity: 1', 0.9],
        ],
        //高雄分署
        [
            ['財稅', 14, 'color: #007F62; fill-opacity:1', 14],
            ['健保', 30, 'color: #00A3D6; fill-opacity:1;', 30],
            ['費用', 23, 'color: #EFBA23; fill-opacity: 1', 23],
            ['罰鍰', 2.6, 'color: #F34626; fill-opacity: 1', 2.6],
        ],
        //屏東分署
        [
            ['財稅', 2.4, 'color: #007F62; fill-opacity:1', 2.4],
            ['健保', 1, 'color: #00A3D6; fill-opacity:1;', 1],
            ['費用', 0.8, 'color: #EFBA23; fill-opacity: 1', 0.8],
            ['罰鍰', 0.9, 'color: #F34626; fill-opacity: 1', 0.9],
        ],
        //花蓮分署
        [
            ['財稅', 1.90, 'color: #007F62; fill-opacity:1', 1.90],
            ['健保', 1.11, 'color: #00A3D6; fill-opacity:1;', 1.11],
            ['費用', 1.13, 'color: #EFBA23; fill-opacity: 1', 1.13],
            ['罰鍰', 1.03, 'color: #F34626; fill-opacity: 1', 1.03],
        ],
        //宜蘭分署
        [
            ['財稅', 2.6, 'color: #007F62; fill-opacity:1', 2.6],
            ['健保', 0.9, 'color: #00A3D6; fill-opacity:1;', 0.9],
            ['費用', 0.8, 'color: #EFBA23; fill-opacity:1', 0.8],
            ['罰鍰', 1.2, 'color: #F34626; fill-opacity:1', 1.2],
        ],
    ];

    var dataChoice = [
        ['案件類型', '徵起金額', {
            role: 'style'
        }, {
            role: 'annotation'
        }],
        dataTotal[nowValue][0],
        dataTotal[nowValue][1],
        dataTotal[nowValue][2],
        dataTotal[nowValue][3]
    ];
    // console.log(dataChoice);

    var data = new google.visualization.arrayToDataTable(dataChoice);
    var options = {
        chartArea: {
            left: 90,
            top: 70,
        },
        title: '總徵起金額：' + getExec(nowValue).receiveMoney + '億元',
        'titleTextStyle': {
            color: '#005b8e',
            fontName: '微軟正黑體',
            fontSize: 14,
            bold: true,
        },
        width: '100%',
        height: '320',
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: 'none',
        },
        'tooltip.isHtml': true,
        annotations: {
            textStyle: {
                fontName: 'Times-Roman',
                fontSize: 13,
                color: 'white',
            }
        },
        'vAxis.viewWindow.min': 'pretty'
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('barChart'));

    chart.draw(data, options);
}

var btnMovie = document.getElementsByClassName("movie-inner-content");
for (var row = 0; row < btnMovie.length; row++) {
    btnMovie[row].onclick = function () {
        var movieNow = document.getElementsByClassName("movie-size");
        var movieIsActive = document.getElementById("movieIsActive");
        var movieChoose = document.getElementById("choose");
        var value = this.getAttribute("value");
        movieChoose.removeAttribute("id");
        btnMovie[value].setAttribute("id", "choose");
        movieIsActive.removeAttribute("id");
        movieNow[value].setAttribute("id", "movieIsActive");
    };
}
// console.log(btnMovie[0]);


var movieIsActive = document.getElementById("movieIsActive");
var chooseMovie = document.querySelectorAll(".movie-inner-content");
for (var row = 0; row < chooseMovie.length; row++) {
    chooseMovie[row].onclick = function () {
        var movieNow = document.querySelector("#choose");
        movieNow.removeAttribute("id", "choose");
        this.setAttribute("id", "choose");
        movieIsActive.src = this.getAttribute("value")
    };
}

function changeTab(value) {
    var tabNow = document.getElementById("tabActive");
    var tabColor = document.getElementById("tabActiveColor");
    var changeTab = document.getElementsByClassName("tabcontent")[value];
    var changeTabColor = document.getElementsByClassName("tablink")[value];
    tabNow.removeAttribute("id", "tabActive");
    changeTab.setAttribute("id", "tabActive");
    tabColor.removeAttribute("id", "tabActiveColor");
    changeTabColor.setAttribute("id", "tabActiveColor");
}