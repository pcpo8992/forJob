$(document).ready(function () {
    getNews("hotNews", 0);
    getNews("news", 1);
    getNews("report", 2);
    getNews("announcement", 3);
    getNews("propaganda", 4);
});


function getNews(type, value) {
    $.ajax({
        method: "GET",
        url: getUrl(value),
        success: function (data) {
            // console.log(type);
            var articleTitle = $(data).find("#lpmatter h1 a");
            var articleHref = $(data).find("#lpmatter h1 a");
            var articleDate = $(data).find("#lpmatter h1 .Date");
            var ul = document.getElementById(type);
            for (var row = 0; row < 5; row++) {
                var title = articleTitle[row].title;
                var href = articleHref[row].getAttribute("href");
                var date = changeDate(articleDate[row].textContent);
                var elm = "<li><div class='newsContent'>" + "<a href='" + href + "' title='" +
                    title +
                    "'>" + "<span class='new-date'>" + date + "</span><span class='new-content'>" +
                    title + "</span></a></div>" + "</li>";
                // console.log(elm);
                $("#" + type).append(elm);
            }
        }
    });
}

function getUrl(value) {
    switch (value) {
        case 0:
            return "http://127.0.0.1:8087/01機關外版/news.html";
        case 1:
            return "http://127.0.0.1:8087/01機關外版/hot_news.html";
        case 2:
            return "http://127.0.0.1:8087/01機關外版/buy.html";
        case 3:
            return "http://127.0.0.1:8087/01機關外版/reword.html";
        case 4:
            return "http://127.0.0.1:8087/01機關外版/policy.html";
        default:
            break;
    }
}

function getBlock(value) {
    var newsNow = document.querySelector("#isActive");
    var btnActive = document.querySelector("#is-active");
    var btnNext = document.getElementsByClassName("btn-news");
    var block = document.getElementsByClassName("hot-news-content");
    // console.log(newsNow);
    btnActive.removeAttribute("id");
    newsNow.removeAttribute("id");
    btnNext[value].setAttribute("id", "is-active");
    block[value].setAttribute("id", "isActive");
}

function changeDate(date){
    return date.replace("/", "-").replace("/", "-");
}