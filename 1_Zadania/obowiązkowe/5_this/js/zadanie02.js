var calculator = {
    a: 0,
    b: 0,
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    multiply: function() {
        return this.a * this.b;
    },
    sum: function() {
        return this.a + this.b;
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
