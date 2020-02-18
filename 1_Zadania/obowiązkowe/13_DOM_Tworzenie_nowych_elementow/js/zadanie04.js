//Task 4
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("remove").addEventListener("click", function() {
        var list = document.querySelector("ul").children;
        var count = list.length;
        for(let i=(count-1); i>=0; i--) {
            list[i].parentNode.removeChild(list[i]);
        }
        
    })
})