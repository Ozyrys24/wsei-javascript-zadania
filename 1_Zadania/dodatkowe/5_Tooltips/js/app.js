document.addEventListener("DOMContentLoaded", function() {
    console.log("działa");
    var tooltips = document.getElementsByClassName("tooltip");
    console.log(tooltips);
    var span;
    for(let i=0; i<tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function() {
            span = document.createElement("span");
            span.className = "tooltipText";
            span.textContent = tooltips[i].getAttribute("data-text");
            tooltips[i].appendChild(span);
            console.log(tooltips[i].getAttribute("data-text"));
        })
        tooltips[i].addEventListener("mouseout", function() {
            tooltips[i].removeChild(span);
            console.log("mouse out");
        })
    }
})
//Strona wyswitla podpowiedzi po najechaniu na tekst w tooltipie.
//Działa według założeń