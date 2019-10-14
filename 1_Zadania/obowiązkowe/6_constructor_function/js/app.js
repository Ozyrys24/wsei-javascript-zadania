//Task 0

var Basket = function() {
    this.products = new Array();
    this.sum = 0;
    this.addProduct = function(name, price) {
        this.products.push({
            name: name,
            price: price,
        });
        this.sum += price;
    }  
    this.showBasket = function() {
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i].name + " " + this.products[i].price + "zł");
        }
        console.log("Total: " + this.sum + "zł\n");
    }
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
console.dir(bruceBasket.prototype);