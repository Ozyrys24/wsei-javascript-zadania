/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Definiujemy funkcję jeden
function jeden() {

    //Inicjalizujemy zmienną zmienna jeden
    var zmienna1 = 1;

    //Definiujemy wewnnętrzą funkcję fukcji jeden o nazwie dwa
    function dwa() {

        //Wypisujemy wartość zmiennej zmienna1 na okno konsoli 
        console.log(zmienna1);

        //Inicjalizujemy zmienną lokalna zmienna2
        var zmienna2 = 3;
    }

    //Wywołujemy funkcję dwa
    dwa();

    //Wypisujemy wartość zmiennej zmienna2 na okno konsoli  która jest zmienną lokalna funkcji dwa i zwraca ReferenceError
    console.log(zmienna2)
}

//Wywołujemy funkcję jeden
jeden()