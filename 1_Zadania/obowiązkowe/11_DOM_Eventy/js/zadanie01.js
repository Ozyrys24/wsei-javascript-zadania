//Task 1
/*
W pierwszym przypadku pojawia się komunikat o problemie z wyswitlaniem klasy menu gdyż skrypt
jest wykonany przed wygerowaniem się DOM'u
*/
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/*
W drugim przypadku skrypt realizuje się prawidłowo ponieważ zostaje wykonany dopiero w 
momencie pojawienia się eventu o załadowaniu elementów DOM

W trzecim przypadku strona ładuje sie prawidłowo "DOMConetentLoaded" nie jest niezbędny ale nie przeszkadza
*/