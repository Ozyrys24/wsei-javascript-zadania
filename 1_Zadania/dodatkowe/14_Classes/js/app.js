//Zadanie #00
console.log("Zadanie 00:");
//constructor
class Vehicle {
    constructor(name, deportment, color) {
        this.name = name;
        this.color = color;
        this.deportment = deportment;
    }
    description() { console.log(this.color + " " + this.name + " " + this.deportment + "!") };
}

let Boat = new Vehicle("boat", "swim", "red");
Boat.description();
let Car = new Vehicle("car", "drive", "green");
Car.description();
let Plane = new Vehicle("plane", "fly", "blue");
Plane.description();

//Zadanie #01
console.log("Zadanie 01:");

class Kaczka {
    constructor(type = "zwykła kaczka") { this.type = type; }
    kwacz() { console.log("kwa kwa"); }
    plywaj() { console.log("płynę..."); }
    wyswietl() { console.log("Wygląda jak zwykła kaczka"); }
}

Kaczucha = new Kaczka();
console.log(Kaczucha.type);
Kaczucha.kwacz();
Kaczucha.plywaj();
Kaczucha.wyswietl();

//Zadanie #02
console.log("Zadanie 02:");

class DzikaKaczka extends Kaczka {
    wyswietl() { this.type = "dzika" }
}
dzikaKaczucha = new DzikaKaczka();
console.log("Stary typ: "+dzikaKaczucha.type);
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();
console.log("Nowy typ: "+dzikaKaczucha.type);

//Zadanie #03
console.log("Zadanie 03:");

class KrzyzowkaKaczka extends Kaczka {
    wyswietl() { this.type = "krzyżówka"; }
}
krzyzoKaczka = new KrzyzowkaKaczka();
console.log("Stary typ: "+krzyzoKaczka.type);
krzyzoKaczka.kwacz();
krzyzoKaczka.plywaj();
krzyzoKaczka.wyswietl();
console.log("Nowy typ: "+krzyzoKaczka.type);

//Zadanie #04
console.log('Zadanie 04:');

Kaczka.prototype.lec = function() { console.log("Lecę") };
Kaczucha.lec();
dzikaKaczucha.lec();
krzyzoKaczka.lec();

//Zadanie #05
console.log("Zadanie 05:");

class GumowaKaczka extends Kaczka { wyswietl() { this.type = "gumowa" }; }

gumowaKaczucha = new GumowaKaczka();
console.log("Stary typ: "+gumowaKaczucha.type);
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();
console.log("Nowy typ: "+gumowaKaczucha.type);

GumowaKaczka.prototype.lec = function() { console.log("gumowe kaczki nie potrafią latać :("); }
gumowaKaczucha.lec();

require("./zadanie06");
require("./zadanie07");