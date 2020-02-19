var checkboxArr = document.getElementsByClassName("checkbox");
var price = document.getElementById("price");
var btn = document.getElementsByClassName("btn")[0];
var counter = 0.00; 

checkboxArr[0].children[0].firstChild.addEventListener("change", function() {
    if(this.checked === true) {
        for(var i=0; i<checkboxArr.length; i++) {
            if(i===checkboxArr.length-1)
                checkboxArr[i].children[0].firstChild.checked = false;
            else {
                checkboxArr[i].children[0].firstChild.checked = true;
                    if(i !== 0)
                        counter = parseFloat(counter) + parseFloat(checkboxArr[i].children[0].firstChild.getAttribute("data-price"));
            }
        }
        counter = counter.toFixed(2);
        var text = document.createTextNode(''+counter+'zł');
        price.replaceChild(text, price.firstChild);

    }
})

checkboxArr[checkboxArr.length-1].children[0].firstChild.addEventListener("change", function() {
    for(var i=0; i<checkboxArr.length; i++)
            checkboxArr[i].children[0].firstChild.checked = false;
        
        counter = 0.00;
        var text = document.createTextNode(''+counter+'zł');
        price.replaceChild(text, price.firstChild);
})

for(var i=1; i<checkboxArr.length-1; i++) {
    checkboxArr[i].children[0].firstChild.addEventListener("change", function() {
        if(checkboxArr[i].children[0].firstChild.checked === true) {
            counter = parseFloat(counter) + parseFloat(this.getAttribute("data-price"));
            counter = counter.toFixed(2);
            var text = document.createTextNode(''+counter+'zł');
            price.replaceChild(text, price.firstChild);
        } else {
            counter = parseFloat(counter) - parseFloat(this.getAttribute("data-price"));
            counter = counter.toFixed(2);
            var text = document.createTextNode(''+counter+'zł');
            price.replaceChild(text, price.firstChild);
        }
    })
}
btn.addEventListener("click", function() {
        alert("Do zapłaty: "+counter+" zł");
})