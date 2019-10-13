function countHello(number)
{
    let count = 1;
    if(number > 0 && number < 11){
        let interval = setInterval(function(){
            console.log('Hello ',count++);
            if(number < count) clearInterval(interval);
        },1000);
    }
} 

countHello(10);