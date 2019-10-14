var Calculator = function() {
    this.history = new Array();
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push("Added " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1 * num2;
    this.history.push("Multiplied " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    var result = num1 - num2;
    this.history.push("Subtracted " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 / num2;
    this.history.push("Divided " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.printOperations = function() {
    for (let i = 0; i < this.history.length; i++) {
        console.log(this.history[i]);  
    }
}

Calculator.prototype.clearoperations = function() {
    this.history = new Array();
}

var calc = new Calculator();
calc.add(1,2);
calc.divide(5,6);
calc.multiply(15,3);
calc.subtract(4,5);
calc.printOperations();
calc.clearoperations();
calc.printOperations();