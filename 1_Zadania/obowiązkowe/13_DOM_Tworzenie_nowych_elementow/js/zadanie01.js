//Task 1
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementsByClassName("button")[0];
    var counter = 0;

    button.addEventListener("click", function() {
        counter++;
        var table = this.parentElement.children[0];
        var child = document.createElement("li");
        child.appendChild(document.createTextNode("Element "+counter+" w chwili dodania było "+
        (counter-1)+" elementów"));
        table.appendChild(child);
    })
})