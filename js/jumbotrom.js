// jumbotron
var btnNext = document.getElementById("jumbotronNext");
var btnPre = document.getElementById("jumbotronPre");

btnNext.onclick = function () {
    var activeImg = document.getElementById("jumbotronIsActive");
    var value = parseInt(activeImg.getAttribute("value"));
    var imgContainer = document.getElementsByClassName("imgContainer");
    if (value < imgContainer.length - 1) {
        console.log(imgContainer[value]);
        imgContainer[value].removeAttribute("id");
        value += 1;
        console.log(value);
        imgContainer[value].setAttribute("id", "jumbotronIsActive");
    } else {
        imgContainer[value].removeAttribute("id");
        imgContainer[0].setAttribute("id", "jumbotronIsActive");
    }
};

btnPre.onclick = function () {
    var activeImg = document.getElementById("jumbotronIsActive");
    var value = parseInt(activeImg.getAttribute("value"));
    var imgContainer = document.getElementsByClassName("imgContainer");
    if (value > 0) {
        imgContainer[value].removeAttribute("id");
        value -= 1;
        imgContainer[value].setAttribute("id", "jumbotronIsActive");
    } else {
        imgContainer[value].removeAttribute("id");
        imgContainer[imgContainer.length - 1].setAttribute("id", "jumbotronIsActive");
    }
};

// setInterval(function () {
//     var activeImg = document.getElementById("isActive");
//     var value = parseInt(activeImg.getAttribute("value"));
//     var imgContainer = document.getElementsByClassName("imgContainer");
//     if (value < imgContainer.length - 1) {
//         // console.log(imgContainer[value]);
//         imgContainer[value].removeAttribute("id");
//         value += 1;
//         // console.log(value);
//         imgContainer[value].setAttribute("id", "isActive");
//     } else {
//         imgContainer[value].removeAttribute("id");
//         imgContainer[0].setAttribute("id", "isActive");
//     }
// }, 8000);