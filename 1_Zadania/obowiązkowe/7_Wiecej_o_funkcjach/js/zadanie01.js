
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Definiujemy funkcję sortArray
function sortArray() {

    //Inicjalizujemy tablicę points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywołujemy funkcję Array.sort na tablicy points która przyjmówję fukcję  która w tym przydaku jest motoda anonimową
    //definiujacą jak funkcja ma sortowac elementy
    points.sort(function (a, b) {
        //fukcja zwraca który element jest mniejszy zwracając wartośc mniejszą, wieszką lub równą 0
        return a - b;
    });

    //zwraca posrtowaną tablicę points
    return points;
}

//wywołuje funkcję sortArray
sortArray();
