//Task 2.1
var menu = document.getElementById("menu");

function getDataInfo(element) {
    var newArr = [];
    for(var i=0; i<element.children.length; i++)
        newArr.push(element.children[i].getAttribute("data-info"))
    return newArr;
}
console.log(getDataInfo(menu));

//Task 2.2
var el = document.getElementById("main-contener");

var getElementClass = (element) => element.classList;
console.log(getElementClass(el));

//Task 2.3
var pink = document.getElementsByClassName("pink-color")[0];

var getElementText = (element) => element.textContent;
console.log(getElementText(pink));

//Task 2.4
var images = document.getElementsByClassName("images");

function getElementsAlt(element) {
    var alts = [];
    for(var i=0; i<element.length; i++)
        alts.push(element[i].alt);
    return alts;
}
console.log(getElementsAlt(images));

//Task 2.5
var links = document.getElementsByClassName("my-link");

function getElementHref(element) {
    var hrefs = [];
    for(var i=0; i<element.length; i++)
        hrefs.push(element[i].href);
    
    return hrefs;
}
console.log(getElementHref(links));

