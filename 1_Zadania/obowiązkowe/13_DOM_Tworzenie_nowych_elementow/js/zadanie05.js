//Task 5
document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.getElementsByClassName("moveBtn");

    for(let i=0; i<buttons.length; i++ ) {
        buttons[i].addEventListener("click", function() {
            var list1 = document.getElementById("list1");
            var list2 = document.getElementById("list2");
        
            if(list1.contains(this.parentElement)) 
                list2.append(this.parentElement);
            else
                list1.append(this.parentElement);
            
        })
    }
})