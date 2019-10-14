var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robot = new Robot("Rob");
robot.sayHi("Matti");
robot.changeName("Robert");
robot.isFunctional = false;
var robot2 = new Robot("Jon");
robot.sayHi("Matti");
robot2.sayHi("Matti");
robot.fixIt();
robot.sayHi("Matti");