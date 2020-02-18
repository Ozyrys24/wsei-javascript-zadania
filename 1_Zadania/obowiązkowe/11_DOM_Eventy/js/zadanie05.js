//Task 5
document.addEventListener("DOMContentLoaded", function() {
    var divs = document.getElementsByClassName("box");

    for(let i=0; i<divs.length; i++) {
        divs[i].addEventListener("click", function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        })
    }
})