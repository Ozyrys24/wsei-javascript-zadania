document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");
    var prev = document.getElementById("prevPicture");
    var next = document.getElementById("nextPicture");

    var li = document.querySelector("ul").children;
    var current = 0;

    li[current].className = "visible";

    prev.addEventListener("click", function() {
        li[current].classList.remove("visible");
        if(current === 0) {
            current = li.length-1;
            li[current].className = "visible";

        } else {
            current--;
            li[current].className = "visible";
        }
    })
    next.addEventListener("click", function() {
        li[current].classList.remove("visible");
        if(current === li.length-1) {
            current = 0;
            li[current].className = "visible";

        } else {
            current++;
            li[current].className = "visible";
        }
    })
    //8. Index się bedzie zwiększał aż braknie mniejsca w zmiennej slider się nie zapetla

})