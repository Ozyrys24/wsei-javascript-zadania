
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Task 0

function checkArray(array2D){
    var array = [array2D.length];
    for (let i = 0; i < array2D.length; i++) {
        let isEven = true;
        for (let j = 0; j < array2D[i].length; j++) {
            if(array2D[i][j] % 2 != 0) { 
                isEven = false;
                break;
            }
        }
        array.push(isEven);
    }
    return array;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

console.log('Task 0');
console.log(checkArray(arr));

//Task 1
console.log('Task 1');
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//Taks 2
console.log('Task 2');

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}

console.log();
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}

console.log();
for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);  
    } 
}

//Task 3

function print2DArray(array2D) {
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            console.log(array2D[i][j]);  
        } 
    }
}

console.log('\nTask 3\n');
print2DArray(task1Array);

//Task 4

var myArray = [
    [1,2,3],
    [4,5,6],
    [1,2,3,4],
    ['Ala','ma','kota','a','kot','ma','Ale'],
];

console.log('\nTask 4\n');
print2DArray(myArray);

//Task 5

function create2DArray(rows,columns){
    var array2D = new Array(rows);
    for (let i = 0; i < array2D.length; i++) {
        array2D[i] = new Array(columns);
    }

    let counter = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            array2D[i][j] = counter++;
        }      
    }
    return array2D;
}

console.log('\nTask 5\n');
var myArray2D = create2DArray(4,4)
for (let i = 0; i < myArray2D.length; i++) {
    console.log(myArray2D[i]);
}
print2DArray(create2DArray(4,4));
