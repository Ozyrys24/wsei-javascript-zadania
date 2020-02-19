document.addEventListener('DOMContentLoaded', function () {

    const x = 5;
    let y = 3;

    for (var i = 0; i < 10; i++) {
        console.log(i, y);
    }
    console.log(i, y);

    function myFn(param1) {
        let y = 4;
        let i = 20;
        console.log(param1, y, i);


    }
    myFn(i)

    console.log(x);
    {
        let y = 25;
        console.log(y);
        var z = 50;

    }

    console.log(z, y);

    //Task 0
    const a = 5;
    let b = 5;

    for(let i=0; i<1; i++) {
        //error a = 3;
        b = 3; //nadpisało
        console.log("Zasięg const w pętli", a);
        console.log("Zasięg let w pętli", b);
    }
    function Test(a, b) {
        a = 2; //nadpisało
        b = 2; //nadpisało
        console.log("Zasięg const w funkcji", a);
        console.log("Zasięg let w funkcji", b);
    }
    Test(a,b);

    {
        b = 4; //nie zmieniło się
        c = 4; //nadpisało
        console.log("Zasięg const w bloku", a);
        console.log("Zasięg let w bloku", b);
    }

    //Task 1
    require("./zadanie01");

    //Task 2
    require("./zadanie02");

    //Task 3
    for(var i=0; i<=11; i++)
        console.log(i);

    console.log(i); //zmienna i została wypisana zwiększona o 1 poza pętlą

    for(let j=0; j<=11; j++)
        console.log(j);

    //console.log(j); //komunikat o niezdefiniowanej zmiennej j
    //Task 4
    require("./zadanie04");

    //Task 5
    (function() {
        console.log("hello world");
    } ());

    //Task 6
    var printName = (function(name) {
        return {
            getName: function() {
                return name;
            }
        }
    })("Mateusz");

    console.log(printName.getName());

})