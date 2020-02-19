document.addEventListener("DOMContentLoaded", function () {
    //Task 1
    function getNumber(num, arr) {
        if (arr.includes(num))
            return true;
        else
            return false;
    }

    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

    //Task 2
    function createIdentityMatrix(rows, columns) {
        var arr = new Array();
        var oneIndex = 0;
        for (var i = 0; i < columns; i++) {
            var rowArray = [];
            for (var j = 0; j < rows; j++) {
                if (j === oneIndex)
                    rowArray.push(1)
                else
                    rowArray.push(0);
            }
            arr.push(rowArray);
            oneIndex++;
        }
        return arr;
    }
    console.log(createIdentityMatrix(4, 4));

    //Task 3
    function sortPlanets(planets) {
        var sorted = new Array();
        for (var i = 0; i < planets.length; i++) {
            var sorts = [];
            sorts.push(planets[i].name);
            sorts.push(planets[i].numberOfMoons);
            sorted.push(sorts);
        }
        sorted.sort(function (a, b) {
            return b[1] - a[1];
        })
    }
    console.log(sortPlanets(planets));

    //Bonus Task 1
    function addTheSameNumbers(num, arr) {
        var counter = null;
        arr.find(function (element) {
            if (element === num)
                counter = counter + element;
        });
        return counter;
    }
    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

    //Bonus Task 2
    function factors(num) {
        var table = [];
        if (num <= 0)
            return table;
        else {
            for (var i = num; i > 0; i--) {
                if (num % i === 0)
                    table.push(i);
            }
            return table;
        }
    }
    console.log(factors(2));
    console.log(factors(54));
    console.log(factors(-4));

    //Bonus Task 3
    function getMissingElement(arr) {
        var num = null;
        var smallest = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== smallest)
                num = smallest;
            else
                smallest++;
        }
        return num;
    }
    console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
    console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
    console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));

    //Bonus Task 4
    function getLastNumbers(num, arr) {
        var last = [];
        if (Number.isInteger(num)) {
            var lastIndex = arr.length - num;
            for (var i = lastIndex; i < arr.length; i++) {
                last.push(arr[i]);
            }
            return last;
        } else
            return last;
    }

    console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
    console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
    console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
    console.log(getLastNumbers("ala", [-4, -3, -2, 0, 1, 2, 3, 4]));
})