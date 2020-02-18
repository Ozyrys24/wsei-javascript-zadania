document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");
    var li = document.getElementById("gallery").children;
    var hide = document.getElementById("hideButton");
    var show = document.getElementById("showButton");
    var input = document.getElementById("tagInput");
    console.log(li);
    console.log(hide);
    console.log(show);
    console.log(input);
    hide.addEventListener("click", function() {
        var text = input.value;
        var tags = [];
        for(var i=0; i<li.length; i++) {
            tags.push(li[i].getAttribute("data-tag"));
        }
        
        for(var j=0; j<tags.length; j++) {
            if(tags[j].includes(text)) {
                li[j].className ="invisible";
            }
        }
        input.value = "";
    })
    show.addEventListener("click", function() {
        var text = input.value;
        var tags = [];
        for(var i=0; i<li.length; i++) {
            tags.push(li[i].getAttribute("data-tag"));
        }
        
        for(var j=0; j<tags.length; j++) {
            if(tags[j].includes(text)) {
                li[j].classList.remove("invisible");
            }
        }
        input.value = "";
    })
    //Grafiki są ukrywane i pokazewane w zależności od wprowadzonego tagu 
    //Kiedy nie zostanie wprowadzony żaden tag wszystkie grafiki są brane pod uwage
    //Strona działa prawidłowo
})