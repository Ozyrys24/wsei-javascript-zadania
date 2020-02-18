//Task 4
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");
    var counter = document.querySelector("span.counter");
    var count = 0;
    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            count++;
            counter.textContent = count;
        })
    }
    
});