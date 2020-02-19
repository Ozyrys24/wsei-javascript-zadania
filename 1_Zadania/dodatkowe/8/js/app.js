document.addEventListener("DOMContentLoaded", function() {
    var Ron = new Tree("Ron");
    var Jack = new Tree("Jack");
    var Back = new Tree("Back");
    var Hermiona = new Tree("Hermiona");
    
    Essy = new Tree("Essy");

    Ron.descendents.push(Jack);
    Jack.descendents.push(Hermiona, Back);
    Back.descendents.push(Essy);

    console.log(Ron.descendents[0].descendents[0]);

    var Kermit = new Tree("Harry");
    var Snape = new Tree("Snape");
    var Dumbledor = new Tree("Dumbledor");
    var Albus = new Tree("Albus");
    var Rock = new Tree("Rock");

    Kermit.descendents.push(Snape);
    Snape.descendents.push(Dumbledor);
    Dumbledor.descendents.push(Albus, Rock);

    console.log(Kermit.descendents[0].descendents[0].descendents);

})

class Tree {
    constructor(value) {
        this.value = value;
        this.descendents = [];
        function bloom() {
            return "I am blooming";
        }
    }
}