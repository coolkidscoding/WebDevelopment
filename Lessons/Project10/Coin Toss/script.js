document.getElementById('click').onclick = click;

var heads = 0;
var tails = 0;

function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip("heads");
        heads++;
    }else{
        flip("tails");
        tails++;
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
    document.getElementById("head-result").innerHTML = heads;
    document.getElementById("tail-result").innerHTML = tails;
};
