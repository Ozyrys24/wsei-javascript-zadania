
showhi();
function showhi() {
    console.log("Cześć");
}
showhi();

//funkcja jest widoczna przed jest zadefiniowaniem

//showhi2();

var showhi2 = function(){
    console.log("Witaj");
}

showhi2();

//Wyrazenie funkcyjne przypisane do zmeiennej jest widoczne tylko po jego inicjalizacji 
