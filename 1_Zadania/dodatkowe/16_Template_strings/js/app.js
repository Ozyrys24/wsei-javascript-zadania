document.addEventListener('DOMContentLoaded', function () {

    const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
    // var sorted= array.sort((a,b)=>a-b);
    // // console.log(sorted);
    // // var newVar = array.flat();
    // // console.log(newVar);
    // newVar.sort((a,b)=>a-b);
    var flat = array.flat();
    flat.sort((a, b) => a - b);
    console.log(flat);
    var newFlat = flat.map((element) => element * 2);
    console.log(newFlat);
    var newVar = newFlat.reduce((a, b) => a * b);
    console.log(newVar);

    const blocks = document.getElementsByClassName("cite");
//Zadanie #0
    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        proffesion: "Lord of Wallachia"
      };
      
      blocks[0].innerHTML = whoAreYou(person);

//Zadanie #1
console.log("Zadanie 1:");
const a = 2;
const b = 4;
console.log(`Suma dwóch liczb ${a} i ${b} to: ${a+b}`);

//Zadanie #2
console.log("Zadanie 2:");
let name = "Tomasz";
console.log(`Moje imię i nazwisko to: ${name+ " Orpik"}`);

//Zadanie #3
console.log("Zadanie 3:");
console.log(writeText());

//Zadanie #4
console.log("Zadanie 4:");

const button = {
    value: "Send message",
    idName: "sendMsg",
    width: "100px",
    padding: "20px",
  }

console.log(`To jest button.
Jego szerokość to ${parseInt(button.width)+2*(parseInt(button.padding))}px.
Napis, który na nim widnieje to "${button.value}"`);

})
//funkcja do zadania 0
function whoAreYou(object) {
     return `My name is ${object.name} ${object.lastName}. <br />
             I am ${new Date().getFullYear()-object.yearOfBirth} years old. <br />
             My profession is ${object.proffesion}`;
}
//funkcja do zadania 3
function writeText() {
    return `"Myślę, że jest wiele piękna
W posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`;
}