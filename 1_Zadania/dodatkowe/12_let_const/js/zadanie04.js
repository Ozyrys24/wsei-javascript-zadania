//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
//name = "Darek";
//nie da się nadpisać zmiennej const


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];
//simpleArray = [2, 3, 4, 5]; //błąd przy próbie nadpisania zmiennej
simpleArray.push(5);
simpleArray[0] = 2;
console.log(simpleArray);
//a) nie da się nadpisać
//b) da się powiększyć tablicę
//c) da się edytować tablicę


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}
/*
dog = {
    name: "Bob",
    skill: "eating"
}
*/
dog.skill = "sleeping";
dog.age = 12;
console.log(dog);
//a) nie da się nadpisać zmiennej
//b) da się zmienić własność obiektu
//c) da się dodać nową własność do obiektu
