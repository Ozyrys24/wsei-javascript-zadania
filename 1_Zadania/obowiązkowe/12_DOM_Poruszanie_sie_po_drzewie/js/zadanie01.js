//Task 1
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("button");

    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
             var box = this.nextElementSibling;
             if(box !== null) {
                if(box.style.visibility === "hidden")
                    box.style.visibility = "visible";
                else
                    box.style.visibility = "hidden";
            }
             })

        }
})