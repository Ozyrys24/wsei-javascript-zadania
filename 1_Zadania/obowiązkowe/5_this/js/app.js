//Task 0

var car = {
    brand : "Mercedes",
    color : "Czarny",
    numberOfKilometrs : 0,
    serviceDate : new Array(), 
    printCarinfo : function(){
        console.log(this.color + " " + this.brand + ", " + this.numberOfKilometrs + "km" );
    },
    drive : function(km){
        this.numberOfKilometrs += km;
    },
    addService : function(serviceDate){
        this.serviceDate.push(serviceDate);
    },
    printServiceDates : function() {
        for (let i = 0; i < this.serviceDate.length; i++) {
            console.log("Przegląd: " + this.serviceDate[i]);
        }
    }
}

car.printCarinfo();
car.drive(20);
car.printCarinfo();

//Task 1

car.addService("12/10/2018");
car.addService("10/10/2019");
car.printServiceDates();

//Task 3

var stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        console.log(this.step);
    }
}

console.log();
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();
