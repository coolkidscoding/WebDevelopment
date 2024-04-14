var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber
    }
  }
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    while(placeholder.hasChildNodes()) {
        placeholder.removeChild(placeholder.firstChild);
    }
    let dice = document.createElement('img');
    dice.src = `./images/tile${number}.png`;
    placeholder.appendChild(dice);
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  