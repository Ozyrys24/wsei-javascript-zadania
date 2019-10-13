//Task 0
function distFromAvarage(table){
    let sum = 0;
    table.forEach(element => {
        sum += element;
    });
    const avg = sum/table.length;

    for(var i = 0; i < table.length; i++){
        table[i] = table[i] - avg;
    }
    return table;
}

var table = [1,2,3,4,5,6,7];
table = distFromAvarage(table);

table.forEach(element => {
    console.log(element);
});

//Task 1

fruits = ['apple','pineapple','banana', 'watermalon','pears','strawberries'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.forEach(element => {
    console.log(element);
});

//Task 3

function printTable(table) {
    for (let i = 0; i < table.length; i++) {
        console.log(table[i]);     
    }
}
printTable(fruits);

//Task 4

table = [1,2,3,4,5,6,7];
function multiply(array){
    let multiply = 1;
    array.forEach(element => {
        multiply *= element;
    });
    return multiply;
}

console.log('\n'+ multiply(table));

//Task 5
table = [1,2,3,4,5,6,7];
function getEvenAvarage(array){
    var sum = 0;
    var counter = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 == 0){
            sum += array[i];
            counter++
        }    
    }
    if(counter != 0) return sum/counter;
    else return null; 
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));
console.log(getEvenAvarage([1,1,1,1]));
console.log(getEvenAvarage([2,8,3,7,4]));

//Task 6

function sortArray (array) {
    return array.sort((a,b) => a - b);
}

console.log(sortArray([145,11,3,64,4,6,10]));

//Task 7

function addArrays(array1, array2) {
     if(array1.length > array2.length){
        array = array1;
        length = array2.length;
     } else {
        array = array2;
        length = array1.length;
     } 

     for (let i = 0; i < length; i++) {
        array[i] = array1[i] + array2[i];
    }

    return array;
}

console.log();
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));