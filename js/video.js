var btnMovie = document.getElementsByClassName("movie-inner-content");
for(var row = 0; row < btnMovie.length; row++){
    btnMovie[row].onclick = function(){
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