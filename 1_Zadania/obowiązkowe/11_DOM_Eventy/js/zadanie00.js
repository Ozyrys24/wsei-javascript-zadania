document.addEventListener("DOMContentLoaded", function() {
    //Task 0a
    var parents = document.querySelectorAll("div.parent");

    for(let i=0; i<parents.length; i++){
        parents[i].addEventListener("mouseenter", function() {
            const child = parents[i].querySelector("div.children");
            child.style.display = "block";
            child.addEventListener("mouseleave", function() {
                child.style.display = "none";
            })
        })
    }
    
   //Task 0b
   for(let i=0; i<parents.length; i++){
       parents[i].addEventListener("mouseenter", function() {
           var child = parents[i].querySelector("div.children");
           child.style.display = "block";
           child.addEventListener("mouseleave", hideChildrenElement);
           function hideChildrenElement() {
            this.style.display = "none";
           }
       })
   }


})