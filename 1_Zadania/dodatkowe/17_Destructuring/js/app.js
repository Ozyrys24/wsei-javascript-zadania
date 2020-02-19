//Zadanie #0a
console.log("Zadanie 0a:");

var [a, , z] = ["snow", "rain", "sun"];
console.log(a);
console.log(z);

//Zadanie #0b
console.log("Zadanie 0b:");

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

var {type, autoStart} = slider;
console.log(type);
console.log(autoStart);

//Zadanie #1
console.log("Zadanie 1:");
const names = ["Zdzisław", "Bogusław", "Kazimierz"];
var [name1, name2, name3] = names;
console.log(name1);
console.log(name2);
console.log(name3);


//Zadanie #2
console.log("Zadanie 2:");

function generateRandomNumbers() {
    let numbers = [];
    for(let i=0; i<6; i++)
        numbers.push(Math.round(Math.random() * 10));
    return numbers;
}
/*
const test = generateRandomNumbers();
console.log(test);
var [num1, , num3] = test;
*/
var [num1, , num3] = generateRandomNumbers();
console.log(num1);
console.log(num3);

//Zadanie #4
console.log("Zadanie 4:");

function getAnimal() {
    return {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    }
}

var {name, getVoice} = getAnimal();
const catName = name;
const catVoice = getVoice();
console.log(catName);
console.log(catVoice);