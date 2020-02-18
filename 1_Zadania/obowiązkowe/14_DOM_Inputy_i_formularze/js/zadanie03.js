//Task 3
document.addEventListener("DOMContentLoaded", () => {
    var team1 = document.getElementById("team1");
    var points1 = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    var scoreTable = document.getElementsByClassName("table")[0];

    var btn = document.getElementsByClassName("btn")[0];
    var rowCounter = 3;

    btn.addEventListener("click", (evt) => {
        if(team1.value===team2.value) {
            evt.preventDefault();
            alert("Drużyny nie mogą być takie same!");
            return;
        };
        if(team1.value==null || team2.value==null || points1.value==null || points2.value==null
            || team1.value=="" || team2.value=="" || points1.value=="" || points2.value=="" ) {
            evt.preventDefault();
            alert("Wszystkie pola muszą zostać wypełnione!");
            return;
        };
        if(points1.value<0 || points2.value<0) {
            evt.preventDefault();
            alert("Wartość punktów nie może być ujemna!");
            return;
        };

        var tr = scoreTable.insertRow(rowCounter);
        rowCounter++;

        var td1 = tr.insertCell(0);
        td1.textContent = team1.value;;
        var td2 = tr.insertCell(1);
        td2.textContent = team2.value;
        var td3 = tr.insertCell(2);
        td3.textContent = points1.value+" - "+points2.value;

        evt.preventDefault();
    })
})