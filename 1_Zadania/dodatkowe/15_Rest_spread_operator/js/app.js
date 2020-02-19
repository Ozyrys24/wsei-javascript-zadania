//Zadanie #0
console.log("Zadanie 00:");
let namesA = ["Marta", "Damian", "Zdzisław"];
let namesB = ["Nina", "Brian", "Jan", "Karol"];

namesB.splice(2, 0, ...namesA);
console.log(namesA);
console.log(namesB);

function getAverage(...arr) {
    return arr.reduce((previous, current) => {
        return previous + current;
    })/arr.length;
}

console.log(getAverage(2,4,5,6,7,79));

//Zadanie #01
console.log("Zadanie 01");
const name = "tomek";
let arrName = [];
arrName.push(...name);
console.log(arrName);

//Zadanie #02
console.log("Zadanie 02:");
const fruits = ["banana", "apple", "orange"];
const vegetables = ["onion", "tomato", "salad"];
let mix = [];
mix.push(...fruits, ...vegetables);
console.log(mix);

require("./zadanie03");