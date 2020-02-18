document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa");
    var li = document.querySelector("ul").children;
    var body = document.querySelector("body");
    console.log(li);
    console.log(body);

    for(let i=0; i<li.length; i++) {
        li[i].addEventListener("click", function() {
            console.log(this.querySelector("img").src);
            let img = document.createElement("img");
            let div = document.createElement("div");
            let close = document.createElement("button");
            close.className = "close";
            close.textContent = "X";
            div.className = "fullScreen";
            img.src = this.querySelector("img").src;
            div.appendChild(close);
            div.appendChild(img);
            body.appendChild(div);
            close.addEventListener("click", function() {
                body.removeChild(div);
            })
        })
    }
    // Obrazki są bardzo duże przez co powiększanie 
    // nie wygląda jak powiększanie. Poza tym strona działa poprawnie
})