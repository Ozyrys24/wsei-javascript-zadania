//Task 3
document.addEventListener("DOMContentLoaded", function() {
    var spans = document.querySelectorAll("span.counter");
    var btn1 = 0;
    var btn2 = 0;
    var btn3 = 0;
    document.getElementById("button1").addEventListener("click", function() {
        btn1++;
        spans[0].textContent = btn1;
    })

    document.getElementById("button2").addEventListener("click", function() {
        btn2++;
        spans[1].textContent = btn2;
    })

    document.getElementById("button3").addEventListener("click", function() {
        btn3++;
        spans[2].textContent = btn3;
    })
})