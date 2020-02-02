document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //Task 0
    var element = document.querySelector('.title');

    function getDataAnimation(element) {
        var localElement = element;
        localElement = localElement.getAttribute('data-animation');

        return localElement;
    }

    console.log(getDataAnimation(element));

    //Task 1
    var homeId = document.getElementById('#home');
    console.log(homeId);
    var homeId2 = document.querySelector('#home');
    console.log(homeId2);

    var li = document.querySelector('li');
    console.log(li);
    
    var classBlock = document.querySelector('.block');
    console.log(classBlock);

    //Task 2
    var liInNav = document.querySelector('nav').querySelectorAll('li');
    console.log(liInNav);
    
    var divs = document.querySelectorAll('div');
    var paragraphs = [];
    for(let i=0; i<divs.length; i++) {
        var paragraphInDiv = divs[i].querySelectorAll('p');
        for(let j=0; j<paragraphInDiv.length; j++)
            paragraphs.push(paragraphInDiv[j]);
    }
    console.log(paragraphs);

    var articleDivs = document.querySelector('article').querySelectorAll('div');
    console.log(articleDivs);

    //Task 3

    var article = document.querySelector('article.first')
    var h1 = article.querySelectorAll('h1');
    console.log(h1.length);

});
