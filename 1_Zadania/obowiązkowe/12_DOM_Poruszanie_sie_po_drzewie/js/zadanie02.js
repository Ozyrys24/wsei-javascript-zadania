//Task 2
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("button");

    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            var box = this.parentElement;
            box.style.backgroundColor = randomColor;
        })
    }
})