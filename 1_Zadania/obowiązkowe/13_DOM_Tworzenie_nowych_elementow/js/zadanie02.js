//Task 2
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addBtn").addEventListener("click", function() {
        var table = document.getElementById("orders");
        var labels = document.querySelectorAll("input");
        var tr = document.createElement("tr");
        for(let i=0; i<labels.length; i++) {
            var element = document.createElement("td");
            element.textContent = labels[i].value;
            tr.appendChild(element);
        }
        table.appendChild(tr);
    })
})