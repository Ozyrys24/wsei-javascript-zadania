//Task 0

var timeMachine = {
    shape : 'Rectangle',
    model : 'XRZ - 43x54',
    place : "",
    data : "",
    run : function(date,place)
    {
        this.place = place;
        this.data = date;
    }
};

timeMachine.run("12:00 UT 06/28/2009","52 12' 21\" N, 0 7' 4.7\" E")
for(const key in timeMachine) {
    if(typeof(timeMachine[key]) != "function") console.log(key + " : " + timeMachine[key]);
};

//Task 1

var book = {
    title : "Sezon burz",
    author : "Andrzej Sapokowski",
    numberOfPages : "320",  
}

console.log();
for(const key in book) {
    console.log(key + " : " + book[key]);
}

//Task 2

var person = {
    name : "Andrzej",
    age : "12",
    sayHello : () => console.log("hello"),
}

console.log();
person.sayHello();
console.log(person.name + " " + person.age);

//Task 3

var recipe = {
    title : "Screambled eggs",
    serving : 4,
    ingredients : [],
}

recipe.ingredients = new Array();
recipe.ingredients.push('8 Eggs');
recipe.ingredients.push('2 spoons butter');
recipe.ingredients.push('Pinch of salt');
recipe.ingredients.push('Pinch of pepper');

console.log();
for(const key in recipe) {
    console.log(recipe[key]);
}

//Task 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log();
if(spoon.isExist) console.log("Spoon is no fork");
else console.log("Do not try and bend the spoon, that's impossible. Instead, only try to realize the truth...there is no spoon. Then you will see it is not the spoon that bends, it is only fork.");