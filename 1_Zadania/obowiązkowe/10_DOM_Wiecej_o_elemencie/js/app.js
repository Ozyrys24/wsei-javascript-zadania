document.addEventListener("DOMContentLoaded", function () {
    //Task 0
    var ex5 = document.getElementsByClassName('ex5')[0].getElementsByTagName('li');

    for(var i=0; i<ex5.length; i++) {
        if(i%2 == 1)
            ex5[i].style.backgroundColor = "green";

        if(i === 5)
            ex5[i].className = "big";

        if(i == 2 || i == 5)
            ex5[i].getElementsByTagName('a')[0].style.textDecoration = "underline";
        else
        ex5[i].getElementsByTagName('a')[0].style.textDecoration = "none";
    }
    //Task 1

    var ex1 = document.getElementsByClassName('ex1')[1].childNodes;
    var children = [];
    for(var i=0; i<ex1.length; i++) 
        children.push(ex1[i].childNodes);

    children[5][3].style.backgroundImage = "url('assets/img/edge.png')";
    children[7][3].style.backgroundImage = "url('assets/img/firefox.png')";

    children[3][5].textContent ='Chrome';
    children[7][5].textContent = "Firefox";

    children[3][3].style.width = "100px";
    console.log(children);
    //Kod CSS został dynamicznie wstawiony do kodu html

    //Task 2
    var ex2 = document.getElementsByClassName('ex2')[0];
    console.log(ex2);
    var list = ex2.querySelectorAll('span');
    list[0].innerHTML = "Mateusz Bugaj";
    list[1].innerHTML = "Czarny";
    list[2].innerHTML = "Pierogi ruskie";

    //Task 3

    var ex3 = document.getElementsByClassName('ex3')[0];
    console.log(ex3);
    
    ex3.getElementsByTagName('ul')[0].className = "menu";

    var liEl = ex3.querySelectorAll('li');
    for(var i=0; i<liEl.length; i++) {
        if(liEl[i].className === "error") {
            liEl[i].classList.remove("error");
        }
        liEl[i].classList.add("menuElement");
    }

    //Task 4
    var ex4 = document.getElementsByClassName('ex4')[0];
    console.log(ex4);
    
    var list4 = ex4.querySelectorAll('li');
    for(var i=0; i<list4.length; i++)
        list4[i].setAttribute("data-id", i+1);

});