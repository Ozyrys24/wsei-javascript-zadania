//Task 0
document.addEventListener("DOMContentLoaded", function() {

    var element1 = document.getElementsByClassName("first")[0].firstElementChild.children[2];
    console.log(element1);

    var element2 = document.getElementById("second").parentElement.children[3];
    console.log(element2);

    var element3a = document.querySelector("[data-ex]").parentElement.parentElement.lastElementChild.firstElementChild;
    var element3b =element3a.children[(Math.round(element3a.childElementCount/2))-1];
    console.log(element3b);

    var element4 = document.getElementsByClassName("forth")[0].parentElement.getElementsByTagName("article")[0].getElementsByTagName("p")[1];
    console.log(element4);

})